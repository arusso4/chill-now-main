"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Sparkles,
  Zap
} from "lucide-react";
import { openAIService, CHILLNOW_SYSTEM_CONTEXT } from "@/lib/openai";
import { chatService } from "@/lib/chatService";
import { thePlugService } from "@/lib/thePlugService";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotWidgetProps {
  initialContext?: string;
  className?: string;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ 
  initialContext = CHILLNOW_SYSTEM_CONTEXT,
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: thePlugService.getWelcomeMessage().message,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens and load history
  useEffect(() => {
    if (isOpen) {
      // Focus input
      if (inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      
      // Load chat history from Supabase (only if we have more than just the initial message)
      if (messages.length <= 1) {
        loadChatHistory();
      }
    }
  }, [isOpen]);

  const loadChatHistory = async () => {
    try {
      const history = await chatService.getSessionHistory();
      if (history.length > 0) {
        // Convert Supabase format to component format
        const formattedHistory: Message[] = history.map(msg => ({
          id: msg.id,
          text: msg.message,
          sender: msg.sender === 'user' ? 'user' : 'bot',
          timestamp: new Date(msg.timestamp)
        }));
        
        setMessages(formattedHistory);
        console.log(`📚 Loaded ${formattedHistory.length} messages from chat history`);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Save user message to Supabase
    const userSaved = await chatService.saveMessage(text.trim(), 'user');
    if (!userSaved) {
      console.warn('⚠️ Failed to save user message to Supabase');
    }

    try {
      // Use The Plug service instead of OpenAI
      const plugResponse = thePlugService.processMessage(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: plugResponse.message,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      // Save bot message to Supabase
      const botSaved = await chatService.saveMessage(plugResponse.message, 'assistant');
      if (!botSaved) {
        console.warn('⚠️ Failed to save bot message to Supabase');
      }

      // Log interaction to plug_interactions table
      try {
        const { error } = await supabase
          .from('plug_interactions')
          .insert({
            session_id: chatService.getCurrentSessionId(),
            user_input: text.trim(),
            bot_response: plugResponse.message,
            interaction_count: thePlugService.getInteractionCount()
          });

        if (error) {
          console.error('Error logging plug interaction:', error);
        } else {
          console.log('📝 Plug interaction logged to Supabase');
        }
      } catch (error) {
        console.error('Error logging plug interaction:', error);
      }

      // Handle special actions
      if (plugResponse.action === 'email_capture') {
        // Could trigger email capture UI here
        console.log('📧 Email capture opportunity triggered');
      }

    } catch (error) {
      console.error('Error processing message with The Plug:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Yo, something's not working right now. Hit me up again in a sec.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);

      // Save error message to Supabase
      await chatService.saveMessage(errorMessage.text, 'assistant');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">The Plug 🔌</h3>
                  <p className="text-xs text-muted-foreground">Your digital budtender</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-accent"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-64 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        : 'bg-accent text-foreground'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                      {message.sender === 'user' && (
                        <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-accent text-foreground rounded-2xl px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-background border-border focus:border-green-500"
              />
              <Button
                type="submit"
                size="sm"
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen 
            ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600' 
            : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700'
        } text-white border-0`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default ChatbotWidget; 
import { supabase } from "@/integrations/supabase/client";

export interface ChatMessage {
  id: string;
  session_id: string;
  message: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

export class ChatService {
  private getSessionId(): string {
    if (typeof window === 'undefined') {
      // Return a temporary session ID for SSR
      return 'temp-session-id';
    }
    
    let sessionId = localStorage.getItem('chat_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('chat_session_id', sessionId);
    }
    return sessionId;
  }

  async saveMessage(message: string, sender: 'user' | 'assistant'): Promise<boolean> {
    try {
      const sessionId = this.getSessionId();
      
      const { error } = await supabase
        .from('chat_history')
        .insert({
          session_id: sessionId,
          message: message,
          sender: sender
        });

      if (error) {
        console.error('Error saving message to Supabase:', error);
        return false;
      }

      console.log(`✅ Message saved to Supabase: ${sender} - "${message.substring(0, 50)}${message.length > 50 ? '...' : ''}"`);
      return true;
    } catch (error) {
      console.error('Error in saveMessage:', error);
      return false;
    }
  }

  async getSessionHistory(sessionId?: string): Promise<ChatMessage[]> {
    try {
      const targetSessionId = sessionId || this.getSessionId();
      
      const { data, error } = await supabase
        .from('chat_history')
        .select('*')
        .eq('session_id', targetSessionId)
        .order('timestamp', { ascending: true });

      if (error) {
        console.error('Error fetching chat history:', error);
        return [];
      }

      console.log(`📚 Retrieved ${data?.length || 0} messages for session: ${targetSessionId}`);
      return (data || []).map(msg => ({
        ...msg,
        sender: msg.sender as 'user' | 'assistant'
      }));
    } catch (error) {
      console.error('Error in getSessionHistory:', error);
      return [];
    }
  }

  async getSessionHistoryByDateRange(startDate: Date, endDate: Date): Promise<ChatMessage[]> {
    try {
      const { data, error } = await supabase
        .from('chat_history')
        .select('*')
        .gte('timestamp', startDate.toISOString())
        .lte('timestamp', endDate.toISOString())
        .order('timestamp', { ascending: true });

      if (error) {
        console.error('Error fetching chat history by date range:', error);
        return [];
      }

      return (data || []).map(msg => ({
        ...msg,
        sender: msg.sender as 'user' | 'assistant'
      }));
    } catch (error) {
      console.error('Error in getSessionHistoryByDateRange:', error);
      return [];
    }
  }

  getCurrentSessionId(): string {
    return this.getSessionId();
  }

  clearSession(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('chat_session_id');
      console.log('🗑️ Chat session cleared');
    }
  }
}

export const chatService = new ChatService(); 
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class OpenAIService {
  private apiKey: string;
  private baseURL: string = 'https://api.openai.com/v1';

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || '';
    
    if (!this.apiKey) {
      console.warn('OpenAI API key not found. Please set OPENAI_API_KEY in your .env file');
    }
  }

  async sendMessage(
    message: string, 
    conversationHistory: ChatMessage[] = [],
    systemContext?: string
  ): Promise<string> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const messages: ChatMessage[] = [];

    // Add system context if provided
    if (systemContext) {
      messages.push({
        role: 'system',
        content: systemContext
      });
    }

    // Add conversation history
    messages.push(...conversationHistory);

    // Add current user message
    messages.push({
      role: 'user',
      content: message
    });

    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || response.statusText}`);
      }

      const data: OpenAIResponse = await response.json();
      return data.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw error;
    }
  }

  // Helper method to format conversation history for API
  formatConversationHistory(messages: Array<{ sender: 'user' | 'bot'; text: string }>): ChatMessage[] {
    return messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));
  }
}

// Default system context for ChillNOW
export const CHILLNOW_SYSTEM_CONTEXT = `You are a helpful assistant for ChillNOW, a premium cannabis and wellness delivery service. 

Your personality:
- Be friendly, knowledgeable, and maintain the brand's chill, slightly rebellious tone
- Use emojis occasionally to keep the vibe light and fun
- Be helpful with product recommendations, delivery questions, and general cannabis/wellness advice
- Keep responses concise but informative
- Always prioritize safety and legal compliance
- If asked about illegal activities, politely redirect to legal alternatives

Key information about ChillNOW:
- Premium cannabis and wellness delivery service
- Operating in legal markets only
- Fast delivery (60 minutes or less)
- Curated selection of products
- Background-checked drivers
- Lab-tested products
- Secure, verified marketplace

Remember: You're here to help users find their perfect chill while maintaining a professional, legal, and safe approach.`;

export const openAIService = new OpenAIService(); 
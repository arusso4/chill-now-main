# The Plug Chatbot Setup Guide

## Overview
"The Plug" is our edgy, confident chatbot that serves as your digital budtender. It provides product recommendations, order tracking, and customer support with a personality that matches ChillNOW's bold, subversive brand.

## Features
- ✅ **The Plug personality** - Edgy, confident digital budtender
- ✅ Floating chat widget in bottom-right corner
- ✅ Dark, modern design matching ChillNOW aesthetic
- ✅ **Smart response system** - Keyword-based product recommendations
- ✅ **Product database** - Curated cannabis drinks, snacks, and wellness products
- ✅ **Email capture** - Automatic prompts after 2+ interactions
- ✅ **Interaction logging** - All conversations saved to Supabase
- ✅ **Session persistence** - Chat history across browser sessions
- ✅ Responsive design for all devices
- ✅ Auto-scroll and focus management
- ✅ Loading states and error handling

## Setup Instructions

### 1. Configure Environment Variables
Create a `.env` file in the project root:

```env
# Supabase Configuration (for chat history and interaction logging)
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Optional: OpenAI API Configuration (for future GPT integration)
VITE_OPENAI_API_KEY=sk-your_actual_api_key_here
```

### 2. Set up Supabase Database
Run the database migrations to create the required tables:

```bash
# If you have Supabase CLI installed
npx supabase db push

# Or manually run the SQL in your Supabase dashboard:
# See: supabase/migrations/20250101000003_add_chat_history.sql
# See: supabase/migrations/20250101000004_add_plug_interactions.sql
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

## Usage

### Basic Usage
The Plug automatically appears on all pages in the bottom-right corner. Users can:
- Click the chat icon to open/close the chat
- Type messages and press Enter or click Send
- Get product recommendations based on keywords
- Ask about popular drinks, sleep products, order tracking
- **All interactions are logged to Supabase**
- **Chat history persists across browser sessions**
- **Email capture prompts after 2+ interactions**

### Sample Conversations
- "What's your most popular drink?" → Product recommendations
- "How do I track my order?" → Order tracking guidance
- "What's good for sleep?" → Sleep/relaxation products
- "I want to talk to someone" → Human support connection

### Customization

#### Props
```typescript
interface ChatbotWidgetProps {
  initialContext?: string;  // Custom system prompt
  className?: string;       // Additional CSS classes
}
```

#### Example with Custom Context
```typescript
<ChatbotWidget 
  initialContext="You are a product specialist for ChillNOW. Focus on helping users find the perfect cannabis products for their needs."
/>
```

## API Configuration

### OpenAI Settings
- **Model**: GPT-4
- **Max Tokens**: 500
- **Temperature**: 0.7
- **System Context**: ChillNOW brand personality and product information

### Error Handling
- API key validation
- Network error handling
- Rate limiting protection
- Graceful fallback messages

## Future Enhancements

### Planned Features
- [ ] Chat history persistence in Supabase
- [ ] File upload support
- [ ] Voice message support
- [ ] Multi-language support
- [ ] Chat analytics and insights

### Supabase Integration
To enable chat storage, add these environment variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Security Notes
- API keys are stored in environment variables (not in code)
- Client-side API calls are made directly to OpenAI
- Consider implementing a backend proxy for production
- Monitor API usage and costs

## Troubleshooting

### Common Issues
1. **"API key not configured"** - Check your `.env` file
2. **"Network error"** - Verify internet connection
3. **"Rate limit exceeded"** - Wait and try again
4. **Widget not appearing** - Check browser console for errors

### Debug Mode
Enable debug logging by adding to `.env`:
```env
VITE_DEBUG=true
```

## Support
For issues or questions about the chatbot widget, check the browser console for detailed error messages. 
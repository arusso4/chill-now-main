export interface PlugResponse {
  message: string;
  action?: 'track_order' | 'human_support' | 'email_capture' | 'product_showcase';
  data?: any;
}

export interface ProductSuggestion {
  name: string;
  description: string;
  category: 'drink' | 'snack' | 'wellness';
  tags: string[];
  link?: string;
}

export class ThePlugService {
  private interactionCount = 0;
  private hasAskedForEmail = false;

  // Product database (placeholder - can be moved to Supabase later)
  private products: ProductSuggestion[] = [
    {
      name: "ChillNOW Sparkling Cannabis Water",
      description: "5mg THC, 0mg CBD - Perfect for social vibes",
      category: "drink",
      tags: ["social", "energy", "sparkling"],
      link: "/marketplace#drinks"
    },
    {
      name: "Deep Sleep Gummies",
      description: "10mg THC, 5mg CBD - Knock out like a champ",
      category: "wellness",
      tags: ["sleep", "relaxation", "gummies"],
      link: "/marketplace#wellness"
    },
    {
      name: "Chill Chips - Spicy Nacho",
      description: "Infused with 2mg THC - Snack smarter",
      category: "snack",
      tags: ["snack", "savory", "chips"],
      link: "/marketplace#snacks"
    },
    {
      name: "Focus Fuel Tincture",
      description: "5mg THC, 10mg CBD - Clear mind, sharp focus",
      category: "wellness",
      tags: ["focus", "productivity", "tincture"],
      link: "/marketplace#wellness"
    }
  ];

  getWelcomeMessage(): PlugResponse {
    return {
      message: `Yo. I'm The Plug. 🔌\n\nLooking for cannabis drinks, snacks, or that chill-next-level?\n\nHit me with what you need.`
    };
  }

  processMessage(userInput: string): PlugResponse {
    this.interactionCount++;
    const input = userInput.toLowerCase().trim();

    // Check for email capture opportunity
    if (this.interactionCount >= 3 && !this.hasAskedForEmail) {
      this.hasAskedForEmail = true;
      return {
        message: `Want early access to drops? 👀\n\nDrop your email and I'll plug you in.`,
        action: 'email_capture'
      };
    }

    // Handle different types of questions
    if (this.isPopularDrinkQuestion(input)) {
      return this.getPopularDrinksResponse();
    }

    if (this.isOrderTrackingQuestion(input)) {
      return this.getOrderTrackingResponse();
    }

    if (this.isSleepQuestion(input)) {
      return this.getSleepProductsResponse();
    }

    if (this.isHumanSupportQuestion(input)) {
      return this.getHumanSupportResponse();
    }

    if (this.isProductQuestion(input)) {
      return this.getProductRecommendations(input);
    }

    // Default response
    return this.getDefaultResponse();
  }

  private isPopularDrinkQuestion(input: string): boolean {
    const keywords = ['popular', 'best', 'drink', 'beverage', 'favorite', 'top'];
    return keywords.some(keyword => input.includes(keyword));
  }

  private isOrderTrackingQuestion(input: string): boolean {
    const keywords = ['track', 'order', 'delivery', 'where', 'status', 'shipping'];
    return keywords.some(keyword => input.includes(keyword));
  }

  private isSleepQuestion(input: string): boolean {
    const keywords = ['sleep', 'bed', 'night', 'insomnia', 'rest', 'relax'];
    return keywords.some(keyword => input.includes(keyword));
  }

  private isHumanSupportQuestion(input: string): boolean {
    const keywords = ['human', 'person', 'talk', 'speak', 'agent', 'representative', 'support'];
    return keywords.some(keyword => input.includes(keyword));
  }

  private isProductQuestion(input: string): boolean {
    const keywords = ['product', 'item', 'thing', 'recommend', 'suggest', 'what', 'show'];
    return keywords.some(keyword => input.includes(keyword));
  }

  private getPopularDrinksResponse(): PlugResponse {
    const popularDrinks = this.products.filter(p => p.category === 'drink').slice(0, 2);
    
    let message = "🔥 Here's what's hitting hard right now:\n\n";
    popularDrinks.forEach((product, index) => {
      message += `${index + 1}. **${product.name}**\n`;
      message += `   ${product.description}\n\n`;
    });
    message += "Want to see more? Hit me with 'show me drinks' or check out the marketplace.";

    return {
      message,
      action: 'product_showcase',
      data: { products: popularDrinks, category: 'drinks' }
    };
  }

  private getOrderTrackingResponse(): PlugResponse {
    return {
      message: "I got you — hit [Track Order] or type your order number.\n\nIf you don't have an order number, hit me up and I'll connect you with the crew.",
      action: 'track_order'
    };
  }

  private getSleepProductsResponse(): PlugResponse {
    const sleepProducts = this.products.filter(p => 
      p.tags.some(tag => ['sleep', 'relaxation'].includes(tag))
    );

    let message = "😴 Need that deep sleep? Here's what'll knock you out:\n\n";
    sleepProducts.forEach((product, index) => {
      message += `${index + 1}. **${product.name}**\n`;
      message += `   ${product.description}\n\n`;
    });
    message += "Take 30-45 minutes before bed for best results. Sweet dreams! 🌙";

    return {
      message,
      action: 'product_showcase',
      data: { products: sleepProducts, category: 'sleep' }
    };
  }

  private getHumanSupportResponse(): PlugResponse {
    return {
      message: "Cool, I'll pass you off to a human. Hang tight.\n\n*Connecting you to our support team...*",
      action: 'human_support'
    };
  }

  private getProductRecommendations(input: string): PlugResponse {
    // Simple keyword matching for product recommendations
    let relevantProducts: ProductSuggestion[] = [];

    if (input.includes('drink') || input.includes('beverage')) {
      relevantProducts = this.products.filter(p => p.category === 'drink');
    } else if (input.includes('snack') || input.includes('food')) {
      relevantProducts = this.products.filter(p => p.category === 'snack');
    } else if (input.includes('focus') || input.includes('work')) {
      relevantProducts = this.products.filter(p => p.tags.includes('focus'));
    } else {
      // Default to showing a mix
      relevantProducts = this.products.slice(0, 3);
    }

    let message = "Here's what I'm thinking for you:\n\n";
    relevantProducts.forEach((product, index) => {
      message += `${index + 1}. **${product.name}**\n`;
      message += `   ${product.description}\n\n`;
    });
    message += "Want something specific? Just tell me what you're looking for.";

    return {
      message,
      action: 'product_showcase',
      data: { products: relevantProducts }
    };
  }

  private getDefaultResponse(): PlugResponse {
    const responses = [
      "Hmm, not sure what you're looking for. Try asking about drinks, snacks, sleep, or tracking orders.",
      "I'm here to help with products, orders, and recommendations. What's on your mind?",
      "Need something specific? I can help with product recs, order tracking, or connect you with the team.",
      "Yo, hit me with what you need - drinks, snacks, wellness stuff, or order help."
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return { message: randomResponse };
  }

  // Method to handle email capture
  handleEmailCapture(email: string): PlugResponse {
    // This would typically save to Supabase
    console.log('📧 Email captured for The Plug:', email);
    
    return {
      message: "🔥 You're in! I'll hit you up when we drop new stuff.\n\nKeep an eye on your inbox for exclusive access and early drops."
    };
  }

  // Reset interaction count (useful for testing)
  resetInteractionCount(): void {
    this.interactionCount = 0;
    this.hasAskedForEmail = false;
  }

  // Get current interaction count
  getInteractionCount(): number {
    return this.interactionCount;
  }
}

export const thePlugService = new ThePlugService(); 
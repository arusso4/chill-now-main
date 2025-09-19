"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="delivery-areas" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            What areas do you deliver to?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            We currently deliver to select areas in California, Nevada, and Washington. Enter your address during checkout to see if we deliver to your location. We're expanding to new markets regularly, so check back often or join our waitlist to be notified when we launch in your area.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="delivery-time" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            How fast is your delivery?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            We offer lightning-fast delivery in under 60 minutes for most orders. Our AI-powered routing system ensures your order gets to you as quickly as possible. Delivery times may vary based on location, traffic, and order volume, but we always aim to exceed your expectations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="age-verification" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            What ID do I need for delivery?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            You must be 21+ to purchase cannabis products. Please have a valid government-issued photo ID ready (driver's license, passport, or state ID). Our delivery partners will verify your age and identity before completing the delivery. This is required by law and helps keep our community safe.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="product-quality" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            How do you ensure product quality?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            Every product in our catalog is lab-tested and COA-verified. We work exclusively with licensed cultivators and manufacturers who meet our strict quality standards. All products undergo rigorous testing for potency, purity, and safety. You can view the Certificate of Analysis (COA) for any product on our platform.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payment-methods" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay. Due to federal banking regulations, we cannot accept cash payments. All transactions are processed securely through our encrypted payment system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="order-tracking" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Can I track my order in real-time?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            Yes! Once your order is confirmed, you'll receive a tracking link that shows your delivery partner's location in real-time. You'll get updates when your order is being prepared, when it's out for delivery, and when it's approaching your location. You can also contact your delivery partner directly through our app.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="delivery-fee" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Is there a delivery fee?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            Delivery fees vary by location and order size. Orders over $50 typically qualify for free delivery. You'll see the exact delivery fee during checkout before completing your order. We also offer subscription plans with free delivery on all orders.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="product-variety" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            What types of products do you carry?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            We carry a curated selection of premium cannabis products including flower, pre-rolls, edibles, concentrates, vapes, topicals, and accessories. Our inventory is constantly updated with the latest products from top brands. We focus on quality over quantity, ensuring every product meets our high standards.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="safety-measures" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            What safety measures do you have in place?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            All our delivery partners undergo comprehensive background checks and safety training. We use secure, temperature-controlled vehicles with GPS tracking. Every delivery is contactless and requires ID verification. We also have 24/7 customer support and a dedicated safety team monitoring all deliveries.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="returns-refunds" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            What's your return policy?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            Due to regulatory requirements, we cannot accept returns on cannabis products once they leave our facility. However, if you receive a damaged or incorrect product, contact us immediately and we'll make it right. We stand behind the quality of our products and will work with you to resolve any issues.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="privacy-security" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            How do you protect my privacy?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            Your privacy is our top priority. We use bank-level encryption to protect your personal information and purchase history. We never share your data with third parties without your consent. All deliveries are discreet and unmarked. You can read our full privacy policy for more details on how we protect your information.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="minimum-order" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Is there a minimum order amount?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            Our minimum order is $20. This helps us maintain our fast delivery times and quality service. Orders under $20 will incur a small service fee. We recommend ordering multiple items to get the best value and qualify for free delivery on orders over $50.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="business-hours" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            What are your delivery hours?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            We deliver 7 days a week from 9 AM to 10 PM. Hours may vary by location and local regulations. You can place orders 24/7 through our app or website, and they'll be delivered during our operating hours. We also offer scheduled deliveries for your convenience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="subscription-plans" className="rounded-2xl border border-border bg-card">
          <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            Do you offer subscription plans?
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
            Yes! Our ChillNOW Plus membership includes free delivery on all orders, exclusive discounts, early access to new products, and priority customer support. Plans start at $9.99/month and can be cancelled anytime. Members also get access to our premium product recommendations and personalized shopping experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

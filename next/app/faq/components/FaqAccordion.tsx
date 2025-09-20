"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const wrap = "container mx-auto px-6 max-w-4xl";
const darkPanel = "rounded-2xl border border-border bg-card";
const trg = "w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400";
const cnt = "px-5 pb-5 pt-0 text-sm text-muted-foreground";

export default function FaqAccordion() {
  return (
    <section className={`${wrap} py-12 md:py-16`}>
      {/* Customers */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Customers</h2>
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="c1" className={darkPanel}>
          <AccordionTrigger className={trg}>Where does chillNOW deliver?</AccordionTrigger>
          <AccordionContent className={cnt}>
            We operate city-by-city with licensed retail partners. Enter your address at checkout to see availability in your area. We're expanding—join the waitlist to get notified when we launch near you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="c2" className={darkPanel}>
          <AccordionTrigger className={trg}>What ID do I need to receive an order?</AccordionTrigger>
          <AccordionContent className={cnt}>
            A valid, government-issued photo ID is required at delivery. The name must match the order, and you must meet the legal age requirements for your jurisdiction.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="c3" className={darkPanel}>
          <AccordionTrigger className={trg}>How long do deliveries take?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Typical deliveries arrive within 45–90 minutes depending on distance, traffic, and order volume. You'll receive live status updates and an ETA once a driver is assigned.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="c4" className={darkPanel}>
          <AccordionTrigger className={trg}>Can I schedule a delivery?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Yes. Many markets support scheduled windows during operating hours. Choose an available slot at checkout; we'll notify you when the driver is en route.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Drivers */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Drivers</h2>
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="d1" className={darkPanel}>
          <AccordionTrigger className={trg}>What are the driver requirements?</AccordionTrigger>
          <AccordionContent className={cnt}>
            21+ where required, valid driver's license, clean driving record, proof of insurance, smartphone, and a reliable vehicle. Background screening is part of onboarding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="d2" className={darkPanel}>
          <AccordionTrigger className={trg}>How much can I earn?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Earnings vary by market and time of day; most drivers report competitive hourly rates including tips and bonuses. Weekly incentives are available for top performers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="d3" className={darkPanel}>
          <AccordionTrigger className={trg}>How are routes assigned?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Orders are dispatched based on proximity, availability, and service level. You'll see pickup details and customer instructions in the app for each delivery.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Brands & Partners */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Brands & Partners</h2>
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="b1" className={darkPanel}>
          <AccordionTrigger className={trg}>How do I list my products on chillNOW?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Submit your brand on our <a className="underline" href="/add-your-brand">Add Your Brand</a> page. Our team will review compliance, onboarding needs, and go-live timelines (typically 2–3 weeks).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="b2" className={darkPanel}>
          <AccordionTrigger className={trg}>Is there a cost to participate?</AccordionTrigger>
          <AccordionContent className={cnt}>
            We use transparent partner terms with performance-based fees. There are no surprise charges—details are shared during onboarding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="b3" className={darkPanel}>
          <AccordionTrigger className={trg}>How do promotions and limited drops work?</AccordionTrigger>
          <AccordionContent className={cnt}>
            We coordinate inventory and scheduling with your team, then feature your products in our marketplace and email campaigns. Limited drops can be geo-targeted by market.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Compliance & Safety */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Compliance & Safety</h2>
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="s1" className={darkPanel}>
          <AccordionTrigger className={trg}>How does chillNOW verify age and identity?</AccordionTrigger>
          <AccordionContent className={cnt}>
            We perform ID checks at handoff and log required confirmations. Orders will not be released without valid ID and signature where required by law.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="s2" className={darkPanel}>
          <AccordionTrigger className={trg}>What safety measures do drivers follow?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Drivers follow secure handling, no-public-consumption policies, and designated delivery protocols. Incidents can be reported 24/7 from the app or our contact page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="s3" className={darkPanel}>
          <AccordionTrigger className={trg}>Do you deliver to hotels or workplaces?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Local rules apply. Some locations restrict deliveries—our app will indicate if an address is eligible. Property/concierge policies must be respected.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Payments & Orders */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Payments & Orders</h2>
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="p1" className={darkPanel}>
          <AccordionTrigger className={trg}>Which payment methods are accepted?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Options vary by market (debit, cashless ATM, or other compliant methods). Available options are shown at checkout.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="p2" className={darkPanel}>
          <AccordionTrigger className={trg}>What is your cancellation or refund policy?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Orders can be canceled before dispatch. Once en route, fees may apply. Quality issues are reviewed case-by-case—contact support within 24 hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="p3" className={darkPanel}>
          <AccordionTrigger className={trg}>How do I track my order?</AccordionTrigger>
          <AccordionContent className={cnt}>
            You'll receive live updates with driver location and ETA. We'll notify you when the driver is nearby and when delivery is complete.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Technical & Account */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">Technical & Account</h2>
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="t1" className={darkPanel}>
          <AccordionTrigger className={trg}>I can't sign in — what should I do?</AccordionTrigger>
          <AccordionContent className={cnt}>
            Use "Forgot password" to reset via email. If issues persist, try a different browser or clear cache. Still stuck? Contact support and include your device/OS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="t2" className={darkPanel}>
          <AccordionTrigger className={trg}>Is my data secure?</AccordionTrigger>
          <AccordionContent className={cnt}>
            We use industry-standard encryption and follow least-privilege access. See our Privacy Policy for details on data retention and your rights.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

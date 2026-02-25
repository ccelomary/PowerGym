import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  { name: "Basic", price: "SAR 199/mo", perks: ["Gym access", "Fitness assessment", "Locker access"] },
  { name: "Plus", price: "SAR 349/mo", perks: ["Everything in Basic", "4 Group Classes", "Monthly check-in"] },
  {
    name: "Elite",
    price: "SAR 599/mo",
    perks: ["Unlimited Classes", "4 PT sessions", "Priority trainer support"],
    featured: true
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-shell py-16">
      <SectionHeading eyebrow="Memberships" title="Simple Pricing, Powerful Results" />
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <MotionReveal key={plan.name} delay={index * 0.1}>
            <Card className={plan.featured ? "border-primary/60 bg-primary/10" : ""}>
              <p className="text-sm text-muted-foreground">{plan.name}</p>
              <h3 className="mt-2 text-3xl font-bold">{plan.price}</h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {plan.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
              <Link href="/contact" className="mt-6 inline-block">
                <Button variant={plan.featured ? "default" : "outline"}>Join Now</Button>
              </Link>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

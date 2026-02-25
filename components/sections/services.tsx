import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const services = [
  { title: "Personal Training", text: "1:1 coaching, personalized plans, and form correction." },
  { title: "Group Fitness", text: "High-energy classes for strength, cardio, and fat loss." },
  { title: "Body Transformation", text: "Structured training with nutritional guidance." },
  { title: "Functional Training", text: "Mobility and performance sessions for everyday strength." }
];

export function ServicesSection() {
  return (
    <section id="services" className="section-shell py-16">
      <SectionHeading eyebrow="Programs" title="Services That Match Your Goals" />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <MotionReveal key={service.title} delay={index * 0.08}>
            <Card className="h-full transition hover:-translate-y-1 hover:border-primary/60">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.text}</p>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote: "I dropped 9kg in four months and finally enjoy training. The coaches keep me accountable.",
    name: "Reem A."
  },
  {
    quote: "Best gym atmosphere in Riyadh. Every session feels structured and motivating.",
    name: "Faisal M."
  },
  {
    quote: "The Elite plan gave me a clear roadmap and visible muscle gains.",
    name: "Khalid S."
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell py-16">
      <SectionHeading eyebrow="Results" title="What Members Say" />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <MotionReveal key={item.name} delay={index * 0.1}>
            <TestimonialCard quote={item.quote} name={item.name} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

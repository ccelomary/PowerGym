import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const points = [
  "Goal-focused coaching for all fitness levels",
  "Clean, premium gym environment in Riyadh",
  "Balanced strength, cardio, and functional programs",
  "Community support that keeps you accountable"
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-16">
      <SectionHeading
        eyebrow="About"
        title="A Gym Built for Lasting Results"
        subtitle="At Power Gym, every program is designed to turn motivation into measurable progress."
      />
      <MotionReveal>
        <Card className="mx-auto max-w-4xl">
          <ul className="grid gap-4 sm:grid-cols-2">
            {points.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </MotionReveal>
    </section>
  );
}

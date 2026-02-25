import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/motion-reveal";

const trainers = [
  {
    name: "Ahmed Al-Harbi",
    role: "Strength & Conditioning",
    bio: "Specializes in technique-first strength plans that build confidence and measurable power.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Lina Faris",
    role: "Fat Loss & Functional Fitness",
    bio: "Designs high-energy sessions focused on sustainable fat loss and mobility.",
    image:
      "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Omar Nasser",
    role: "Athletic Performance",
    bio: "Helps members improve speed, explosiveness, and overall athletic output.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e6349?auto=format&fit=crop&w=900&q=80"
  }
];

export default function TrainersPageContent() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="Team"
        title="Meet Our Expert Coaches"
        subtitle="Train with certified professionals who turn goals into step-by-step results."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {trainers.map((trainer, index) => (
          <MotionReveal key={trainer.name} delay={index * 0.1}>
            <Card className="overflow-hidden p-0">
              <Image src={trainer.image} alt={trainer.name} width={900} height={800} className="h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-sm text-primary">{trainer.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{trainer.bio}</p>
              </div>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

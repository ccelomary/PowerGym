import { Card } from "@/components/ui/card";

type TestimonialCardProps = {
  quote: string;
  name: string;
};

export function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <p className="text-muted-foreground">“{quote}”</p>
      <p className="mt-4 font-semibold text-primary">— {name}</p>
    </Card>
  );
}

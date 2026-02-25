import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPageContent() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Start Your Fitness Journey Today"
        subtitle="Visit us in Riyadh or book your free trial in under a minute."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <BookingForm />
        <div className="space-y-5">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Power Gym</h3>
            <p className="mt-2 text-sm text-muted-foreground">Riyadh, Saudi Arabia</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Phone: +966 XX XXX XXXX</li>
              <li>Email: info@powergym.sa</li>
              <li>Hours: Daily, 6:00 AM – 12:00 AM</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Power Gym Riyadh Map"
              src="https://www.google.com/maps?q=24.5677911,46.8393999&z=15&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

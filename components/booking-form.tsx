"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  goal: z.string().min(5, "Tell us your goal in a few words.")
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Booking form submission", values);
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-4 rounded-2xl p-6">
      <h3 className="text-xl font-semibold">Book Your Free Trial</h3>
      <p className="text-sm text-muted-foreground">Fill in your details and our team will contact you within 24 hours.</p>

      <div>
        <input {...register("name")} placeholder="Full name" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name.message}</p> : null}
      </div>
      <div>
        <input {...register("email")} placeholder="Email" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email.message}</p> : null}
      </div>
      <div>
        <input {...register("phone")} placeholder="Phone" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p> : null}
      </div>
      <div>
        <textarea
          {...register("goal")}
          placeholder="Your goal (e.g., lose fat, gain strength)"
          className="min-h-24 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3"
        />
        {errors.goal ? <p className="mt-1 text-xs text-red-400">{errors.goal.message}</p> : null}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Book a Free Trial"}
      </Button>
      {submitted ? <p className="text-sm text-emerald-400">Thanks! We will contact you shortly.</p> : null}
    </form>
  );
}

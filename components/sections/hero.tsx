"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section-shell grid gap-10 py-16 md:grid-cols-2 md:py-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Transform starts here</p>
        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Build Muscle, Burn Fat, and Stay Consistent at <span className="text-primary">Power Gym</span>
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Join a results-driven gym in Saudi Arabia with elite coaches, modern equipment, and programs built for real progress.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact">
            <Button>Join Now</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Book a Free Trial</Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative overflow-hidden rounded-3xl border border-white/10"
      >
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80"
          alt="Power Gym training area"
          width={900}
          height={700}
          className="h-full w-full object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}

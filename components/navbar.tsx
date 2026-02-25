"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

const homeAnchors = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Dumbbell className="h-5 w-5 text-primary" />
          Power Gym
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {pathname === "/"
            ? homeAnchors.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                  {item.label}
                </a>
              ))
            : null}
          <Link href="/trainers" className="text-sm text-muted-foreground transition hover:text-foreground">
            Trainers
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground transition hover:text-foreground">
            Contact
          </Link>
        </nav>

        <Link href="/contact">
          <Button className="animate-glow">Book a Free Trial</Button>
        </Link>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Power Gym Saudi Arabia | Strength. Results. Community.",
  description:
    "Power Gym is a modern fitness destination in Saudi Arabia offering personal training, group classes, and transformation programs.",
  openGraph: {
    title: "Power Gym Saudi Arabia",
    description: "Join Power Gym and transform your body with expert coaching and premium facilities.",
    url: "https://powergym.sa",
    siteName: "Power Gym",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Power Gym hero"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

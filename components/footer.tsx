export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Power Gym. All rights reserved.</p>
        <p>Riyadh, Saudi Arabia • Open Daily 6:00 AM – 12:00 AM</p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-fg-faint">
          © {new Date().getFullYear()} Rishika Juloori
        </p>
        <p className="font-mono text-[11px] text-fg-faint">
          Designed & built with Next.js
        </p>
      </div>
    </footer>
  );
}

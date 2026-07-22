export default function Header() {
  return (
    <header className="relative overflow-hidden border-b border-marquee-border bg-marquee-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(231,178,60,0.12) 0px, rgba(231,178,60,0.12) 2px, transparent 2px, transparent 26px)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 sm:px-8">
      
        <h1 className="font-display text-5xl leading-none tracking-wide text-marquee-text sm:text-6xl">
          MINI <span className="text-marquee-gold">·</span> CATÁLOGO
        </h1>
    
      </div>
    </header>
  );
}

"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  totalResultados: number;
}

export default function SearchBar({
  value,
  onChange,
  totalResultados,
}: SearchBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 rounded-lg border border-marquee-border bg-marquee-surface px-4 py-3 shadow-inner shadow-black/40 transition-colors focus-within:border-marquee-gold">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 stroke-marquee-muted"
          fill="none"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" strokeLinecap="round" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          inputMode="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar por título… ex: Matrix"
          aria-label="Buscar filme por título"
          className="w-full bg-transparent font-body text-base text-marquee-text placeholder:text-marquee-muted focus:outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Limpar busca"
            className="shrink-0 rounded-full px-2 py-0.5 font-mono text-xs text-marquee-muted transition-colors hover:bg-marquee-elevated hover:text-marquee-text"
          >
            limpar
          </button>
        )}
      </div>
      <p className="mt-2 font-mono text-xs tracking-wide text-marquee-muted">
        {totalResultados} {totalResultados === 1 ? "sessão encontrada" : "sessões encontradas"}
      </p>
    </div>
  );
}

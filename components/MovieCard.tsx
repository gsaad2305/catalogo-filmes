"use client";

import Link from "next/link";
import { Filme } from "@/lib/types";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
  filme: Filme;
  favorito: boolean;
  onToggleFavorito: (id: number) => void;
}

export default function MovieCard({
  filme,
  favorito,
  onToggleFavorito,
}: MovieCardProps) {
  return (
    <article
      className={`ticket-perforation group relative flex flex-col overflow-hidden rounded-xl border bg-marquee-surface shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 ${
        favorito
          ? "border-marquee-gold/70 ring-1 ring-marquee-gold/40"
          : "border-marquee-border"
      }`}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-marquee-elevated">
        <img
          src={filme.imagem}
          alt={`Pôster do filme ${filme.titulo}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-marquee-surface to-transparent" />

        <FavoriteButton
          ativo={favorito}
          onToggle={() => onToggleFavorito(filme.id)}
          titulo={filme.titulo}
        />

        {favorito && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-marquee-gold px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-marquee-bg">
            Favorito
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="font-display text-2xl leading-none tracking-wide text-marquee-text">
          {filme.titulo}
        </h2>

        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-marquee-muted">
          <span className="rounded border border-marquee-border px-1.5 py-0.5">
            {filme.ano}
          </span>

          <span className="rounded border border-marquee-border px-1.5 py-0.5 text-marquee-gold">
            {filme.genero}
          </span>

          <span className="ml-auto flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-marquee-gold">
              <path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7.1L12 17.9l-6.2 3.4L7 14.2 2 9.3l7.1-0.7L12 2z" />
            </svg>
            {filme.avaliacao.toFixed(1)}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-dashed border-marquee-border pt-3">
          <span className="font-mono text-[11px] text-marquee-muted">
            {filme.duracao}
          </span>

          <Link
            href={`/filme/${filme.id}`}
            className="rounded-md bg-marquee-gold px-3 py-1.5 font-body text-sm font-semibold text-marquee-bg transition-colors hover:bg-marquee-goldSoft"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMovies, getMovieById } from "@/lib/services/movies";

interface FilmePageProps {
  params: {
    id: number;
  };
}

export function generateStaticParams() {
  return getMovies().map((filme) => ({
    id: filme.id.toString(),
  }));
}

export function generateMetadata({ params }: FilmePageProps): Metadata {
  const filme = getMovieById(Number(params.id));

  return {
    title: filme ? `${filme.titulo} — Marquee` : "Filme não encontrado",
  };
}

export default function FilmeDetalhePage({ params }: FilmePageProps) {
  const filme = getMovieById(Number(params.id));

  if (!filme) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-8 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-marquee-muted transition-colors hover:text-marquee-gold"
        >
          ← Voltar para o catálogo
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
          <div className="overflow-hidden rounded-xl border border-marquee-border bg-marquee-surface">
            <img
              src={filme.imagem}
              alt={filme.titulo}
              className="aspect-[2/3] w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-marquee-gold">
                {filme.genero}
              </span>

              <h1 className="font-display text-5xl text-marquee-text">
                {filme.titulo}
              </h1>
            </div>

            <dl className="grid grid-cols-2 gap-4 border-y border-dashed border-marquee-border py-4">
              <div>
                <dt className="text-marquee-muted">Ano</dt>
                <dd>{filme.ano}</dd>
              </div>

              <div>
                <dt className="text-marquee-muted">imdbID</dt>
                <dd>{filme.imdbID}</dd>
              </div>
            </dl>

            <div>
              <h2 className="font-body text-sm font-semibold uppercase tracking-wide text-marquee-muted">
                Sinopse
              </h2>

              <p className="mt-2 font-body leading-relaxed text-marquee-text">
                {filme.sinopse}
              </p>
            </div>

            <Link
              href="/"
              className="mt-2 inline-flex w-fit rounded-md bg-marquee-gold px-4 py-2 text-marquee-bg"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

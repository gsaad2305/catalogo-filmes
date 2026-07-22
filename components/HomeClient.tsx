"use client";

import { useMemo, useState } from "react";
import { Filme } from "@/lib/types";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

interface HomeClientProps {
  filmes: Filme[];
}

export default function HomeClient({ filmes }: HomeClientProps) {
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set());
  const [somenteFavoritos, setSomenteFavoritos] = useState(false);

  const filmesFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return filmes.filter((f) => {
      const combinaBusca = termo
        ? f.titulo.toLowerCase().includes(termo)
        : true;

      const combinaFavorito = somenteFavoritos ? favoritos.has(f.id) : true;

      return combinaBusca && combinaFavorito;
    });
  }, [filmes, busca, somenteFavoritos, favoritos]);

  function alternarFavorito(id: number) {
    setFavoritos((atual) => {
      const proximo = new Set(atual);

      if (proximo.has(id)) {
        proximo.delete(id);
      } else {
        proximo.add(id);
      }

      return proximo;
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="sm:max-w-md sm:flex-1">
          <SearchBar
            value={busca}
            onChange={setBusca}
            totalResultados={filmesFiltrados.length}
          />
        </div>

        <button
          type="button"
          onClick={() => setSomenteFavoritos((v) => !v)}
          aria-pressed={somenteFavoritos}
          className={`flex shrink-0 items-center gap-2 self-start rounded-lg border px-4 py-3 font-body text-sm font-medium transition-colors ${
            somenteFavoritos
              ? "border-marquee-gold bg-marquee-gold text-marquee-bg"
              : "border-marquee-border bg-marquee-surface text-marquee-text hover:border-marquee-gold/60"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${
              somenteFavoritos ? "fill-marquee-bg" : "fill-marquee-red"
            }`}
          >
            <path d="M12 20.5s-7.5-4.6-10-9.2C0.3 8.2 1.6 4.5 5 3.4c2.2-0.7 4.4 0.2 5.6 2 0.4 0.6 1.4 0.6 1.8 0 1.2-1.8 3.4-2.7 5.6-2 3.4 1.1 4.7 4.8 3 7.9-2.5 4.6-10 9.2-10 9.2Z" />
          </svg>
          Favoritos ({favoritos.size})
        </button>
      </div>

      {filmesFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filmesFiltrados.map((filme) => (
            <MovieCard
              key={filme.id}
              filme={filme}
              favorito={favoritos.has(filme.id)}
              onToggleFavorito={alternarFavorito}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-marquee-border py-20 text-center">
          <span className="font-display text-3xl text-marquee-muted">
            SESSÃO ENCERRADA
          </span>

          <p className="max-w-sm font-body text-sm text-marquee-muted">
            Nenhum filme corresponde à sua busca. Tente outro título ou desative
            o filtro de favoritos.
          </p>
        </div>
      )}
    </div>
  );
}

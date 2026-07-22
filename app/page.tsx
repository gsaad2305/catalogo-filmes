import Header from "@/components/Header";
import HomeClient from "@/components/HomeClient";
import { getMovies } from "@/lib/services/movies";
import { getPoster } from "@/lib/services/omdb";

export default async function Home() {
  const filmes = await Promise.all(
    getMovies().map(async (filme) => ({
      ...filme,
      imagem: await getPoster(filme.imdbID),
    })),
  );

  return (
    <main className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <HomeClient filmes={filmes} />
      </section>
    </main>
  );
}

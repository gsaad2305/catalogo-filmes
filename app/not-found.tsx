import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-marquee-gold">
        Erro 404
      </span>
      <h1 className="font-display text-5xl tracking-wide text-marquee-text">
        SESSÃO NÃO ENCONTRADA
      </h1>
      <p className="max-w-md font-body text-sm text-marquee-muted">
        Este filme não está em cartaz. Ele pode ter sido removido do catálogo
        ou o link pode estar incorreto.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-md bg-marquee-gold px-4 py-2.5 font-body text-sm font-semibold text-marquee-bg transition-colors hover:bg-marquee-goldSoft"
      >
        ← Voltar para o catálogo
      </Link>
    </main>
  );
}

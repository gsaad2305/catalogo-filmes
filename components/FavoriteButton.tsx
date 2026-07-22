"use client";

interface FavoriteButtonProps {
  ativo: boolean;
  onToggle: () => void;
  titulo: string;
}

export default function FavoriteButton({
  ativo,
  onToggle,
  titulo,
}: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
      aria-pressed={ativo}
      aria-label={
        ativo
          ? `Remover ${titulo} dos favoritos`
          : `Adicionar ${titulo} aos favoritos`
      }
      className="group/heart absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 transition-colors ${
          ativo
            ? "fill-marquee-red stroke-marquee-red"
            : "fill-transparent stroke-marquee-text group-hover/heart:stroke-marquee-red"
        }`}
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.5s-7.5-4.6-10-9.2C0.3 8.2 1.6 4.5 5 3.4c2.2-0.7 4.4 0.2 5.6 2 0.4 0.6 1.4 0.6 1.8 0 1.2-1.8 3.4-2.7 5.6-2 3.4 1.1 4.7 4.8 3 7.9-2.5 4.6-10 9.2-10 9.2Z"
        />
      </svg>
    </button>
  );
}

import Image from "next/image";

type ProjectVisualProps = {
  title: string;
  image: string;
};

export default function ProjectVisual({ title, image }: ProjectVisualProps) {
  return (
    <div className="relative h-64 overflow-hidden border-b border-white/10 bg-black/40">
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 via-transparent to-fuchsia-500/10" />

      <div className="absolute inset-x-6 top-6 overflow-hidden rounded-2xl border border-white/10 bg-[#111116]/90 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/3 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <p className="ml-3 truncate text-xs font-medium text-zinc-400">
            {title}
          </p>
        </div>

        <div className="relative h-48">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#0b0b0f] to-transparent" />
    </div>
  );
}
type ProjectVisualProps = {
  title: string;
  index: number;
};

export default function ProjectVisual({ title, index }: ProjectVisualProps) {
  const labels = [
    ["Portfolio", "Reports", "Audit Logs"],
    ["Members", "Announcements", "Admin"],
    ["Savings", "Loans", "History"],
    ["CMS", "Pages", "Content"],
  ];

  const currentLabels = labels[index] ?? ["System", "Data", "UI"];

  return (
    <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/40">
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 via-transparent to-red-500/10" />

      <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
        Project 0{index + 1}
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="rounded-2xl border border-white/10 bg-[#111116]/90 p-5 shadow-xl backdrop-blur">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <p className="mb-4 text-sm font-semibold text-white">
            {title}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {currentLabels.map((label) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="mb-3 h-2 w-8 rounded-full bg-orange-500/50" />
                <p className="text-[11px] text-zinc-400">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30 pointer-events-none"
      />

      {/* Radial glow behind hero text */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none"
      />

      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* System tag */}
        <div className="mb-8">
          <span className="system-label">[ SYSTEM INITIALIZED ]</span>
        </div>

        {/* Title */}
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-4">
          <span className="text-gradient-blue">SOLO</span>
          <br />
          <span className="text-foreground/90">LEVELING</span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-md mb-3 leading-relaxed">
          Your life has become a game.
        </p>
        <p className="text-slate-500 text-sm mb-12 max-w-sm">
          Complete quests. Gain XP. Level up your stats. Become the strongest version of yourself.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/auth/register"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 glow-blue"
          >
            Begin Your Journey
          </Link>
          <Link
            href="/auth/login"
            className="px-8 py-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-200 font-semibold rounded-lg transition-colors duration-200"
          >
            Continue
          </Link>
        </div>

        {/* Feature hints */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl w-full">
          {[
            { label: "XP System", desc: "Every action earns XP" },
            { label: "Quests", desc: "Daily & long-term missions" },
            { label: "Stats", desc: "Strength, Mind & Spirit" },
            { label: "Ranks", desc: "E → S progression" },
          ].map((f) => (
            <div key={f.label} className="panel p-4 text-left">
              <div className="text-xs system-label mb-1">{f.label}</div>
              <div className="text-sm text-slate-400">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

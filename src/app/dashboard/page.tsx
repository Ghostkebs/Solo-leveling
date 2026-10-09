import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
}

// Full implementation in Phase 3 (Player System)
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <span className="system-label">[ DASHBOARD ]</span>
        <h1 className="text-2xl font-bold mt-1">Player Status</h1>
      </div>

      {/* Placeholder panels — replaced in Phase 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="panel p-6">
          <p className="system-label mb-2">Level</p>
          <p className="text-4xl font-bold text-gradient-blue">—</p>
        </div>
        <div className="panel p-6">
          <p className="system-label mb-2">XP</p>
          <p className="text-4xl font-bold text-slate-400">—</p>
        </div>
        <div className="panel p-6">
          <p className="system-label mb-2">Rank</p>
          <p className="text-4xl font-bold text-slate-400">—</p>
        </div>
      </div>
    </div>
  )
}

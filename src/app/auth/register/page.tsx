import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register",
}

// Full implementation in Phase 2
export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="panel p-8">
          <div className="text-center mb-8">
            <span className="system-label block mb-3">[ SYSTEM INITIALIZATION ]</span>
            <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
            <p className="text-sm text-muted-foreground mt-2">
              A new Player has been detected.
            </p>
          </div>

          {/* Register form — full implementation in Phase 2 */}
          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Display Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Email</label>
              <input
                type="email"
                placeholder="player@example.com"
                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 text-sm">
              Initialize System
            </button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already a Player?{" "}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

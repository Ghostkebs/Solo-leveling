// Full navigation and auth guard implemented in Phase 2 & 3
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav — Phase 2 */}
      <div className="flex">
        {/* Sidebar — Phase 2 */}
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}

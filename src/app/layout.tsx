import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Solo Leveling — Real Life RPG",
    template: "%s | Solo Leveling",
  },
  description:
    "Level up your life. Complete quests. Gain XP. Become stronger.",
  openGraph: {
    title: "Solo Leveling — Real Life RPG",
    description: "Level up your life. Complete quests. Gain XP. Become stronger.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

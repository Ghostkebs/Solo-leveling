import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { QuestCategory, CategoryMeta, Rank } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format XP number: 1250 → "1,250"
export function formatXP(xp: number): string {
  return xp.toLocaleString()
}

// Format a Date to readable string: "Oct 8, 2025"
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

// Format date as "Today", "Yesterday", or formatted date
export function formatRelativeDate(date: Date | string): string {
  const d = new Date(date)
  const now = new Date()
  const diff = now.setHours(0, 0, 0, 0) - d.setHours(0, 0, 0, 0)

  if (diff === 0) return "Today"
  if (diff === 86400000) return "Yesterday"
  return formatDate(date)
}

// Category display metadata
export const CATEGORY_META: Record<QuestCategory, CategoryMeta> = {
  BODY: {
    label: "Body",
    color: "text-orange-400",
    textColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
  },
  MIND: {
    label: "Mind",
    color: "text-blue-400",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
  },
  DISCIPLINE: {
    label: "Discipline",
    color: "text-yellow-400",
    textColor: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10",
  },
  SPIRIT: {
    label: "Spirit",
    color: "text-purple-400",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
  },
  PERSONAL: {
    label: "Personal",
    color: "text-emerald-400",
    textColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/10",
  },
}

// Rank display metadata
export const RANK_META: Record<Rank, { label: string; color: string; bgColor: string }> = {
  E: { label: "E", color: "text-slate-400", bgColor: "bg-slate-800" },
  D: { label: "D", color: "text-green-400", bgColor: "bg-green-900/40" },
  C: { label: "C", color: "text-yellow-400", bgColor: "bg-yellow-900/40" },
  B: { label: "B", color: "text-blue-400", bgColor: "bg-blue-900/40" },
  A: { label: "A", color: "text-purple-400", bgColor: "bg-purple-900/40" },
  S: { label: "S", color: "text-amber-300", bgColor: "bg-amber-900/40" },
}

// Get category initials for icons
export function getCategoryInitial(category: QuestCategory): string {
  return category.charAt(0)
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + "..."
}

// Check if date is today
export function isToday(date: Date | string): boolean {
  const d = new Date(date)
  const now = new Date()
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  )
}

// Pluralize: "1 quest" / "3 quests"
export function pluralize(count: number, singular: string, plural?: string): string {
  if (count === 1) return `1 ${singular}`
  return `${count} ${plural ?? singular + "s"}`
}

import type { LevelInfo, Rank } from "@/types"

// ─────────────────────────────────────────────
// LEVEL FORMULA
// Base XP required: 100 * level^1.5
// Level  1 →    100 XP
// Level  5 →  1,118 XP
// Level 10 →  3,162 XP
// Level 25 → 12,500 XP
// ─────────────────────────────────────────────

const BASE_XP = 100
const EXPONENT = 1.5

export function xpRequiredForLevel(level: number): number {
  return Math.floor(BASE_XP * Math.pow(level, EXPONENT))
}

export function getLevelFromTotalXp(totalXp: number): number {
  let level = 1
  let accumulated = 0

  while (true) {
    const required = xpRequiredForLevel(level)
    if (accumulated + required > totalXp) break
    accumulated += required
    level++
    if (level > 999) break
  }

  return level
}

export function getXpInCurrentLevel(totalXp: number): number {
  let level = 1
  let accumulated = 0

  while (true) {
    const required = xpRequiredForLevel(level)
    if (accumulated + required > totalXp) {
      return totalXp - accumulated
    }
    accumulated += required
    level++
    if (level > 999) break
  }

  return 0
}

export function getLevelInfo(totalXp: number): LevelInfo {
  const level = getLevelFromTotalXp(totalXp)
  const currentXp = getXpInCurrentLevel(totalXp)
  const requiredXp = xpRequiredForLevel(level)
  const progressPercent = Math.min(100, Math.round((currentXp / requiredXp) * 100))
  const rank = getRankFromLevel(level)

  return { level, currentXp, requiredXp, progressPercent, rank }
}

// ─────────────────────────────────────────────
// RANK SYSTEM
// E:  Level  1–9
// D:  Level 10–19
// C:  Level 20–34
// B:  Level 35–49
// A:  Level 50–74
// S:  Level 75+
// ─────────────────────────────────────────────

export function getRankFromLevel(level: number): Rank {
  if (level >= 75) return "S"
  if (level >= 50) return "A"
  if (level >= 35) return "B"
  if (level >= 20) return "C"
  if (level >= 10) return "D"
  return "E"
}

export function getNextRankLevel(rank: Rank): number | null {
  const thresholds: Record<Rank, number | null> = {
    E: 10,
    D: 20,
    C: 35,
    B: 50,
    A: 75,
    S: null,
  }
  return thresholds[rank]
}

// ─────────────────────────────────────────────
// STAT REWARDS BY CATEGORY
// ─────────────────────────────────────────────

export interface StatChanges {
  strength?: number
  intelligence?: number
  discipline?: number
  vitality?: number
  spirit?: number
}

const STAT_REWARDS_BY_CATEGORY: Record<string, StatChanges> = {
  BODY: { strength: 2, vitality: 2 },
  MIND: { intelligence: 2 },
  DISCIPLINE: { discipline: 2 },
  SPIRIT: { spirit: 2 },
  PERSONAL: { discipline: 1 },
}

export function getStatChangesForCategory(category: string): StatChanges {
  return STAT_REWARDS_BY_CATEGORY[category] ?? {}
}

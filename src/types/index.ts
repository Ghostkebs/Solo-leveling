// ─────────────────────────────────────────────
// ENUMS
// ─────────────────────────────────────────────

export type QuestCategory = "BODY" | "MIND" | "DISCIPLINE" | "SPIRIT" | "PERSONAL"
export type QuestType = "DAILY" | "WEEKLY" | "LONG_TERM" | "MAIN" | "SIDE"
export type Rank = "E" | "D" | "C" | "B" | "A" | "S"

export type Mood =
  | "HAPPY"
  | "BLANK"
  | "SAD"
  | "STRESSED"
  | "TIRED"
  | "ROUGH"

// ─────────────────────────────────────────────
// PLAYER
// ─────────────────────────────────────────────

export interface PlayerStats {
  strength: number
  intelligence: number
  discipline: number
  vitality: number
  spirit: number
}

export interface Player {
  id: string
  userId: string
  level: number
  totalXp: number
  currentXp: number
  rank: Rank
  stats: PlayerStats
  currentStreak: number
  longestStreak: number
  lastStreakDate: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface LevelInfo {
  level: number
  currentXp: number
  requiredXp: number
  progressPercent: number
  rank: Rank
}

// ─────────────────────────────────────────────
// QUESTS
// ─────────────────────────────────────────────

export interface Quest {
  id: string
  userId: string
  title: string
  description?: string | null
  category: QuestCategory
  type: QuestType
  xpReward: number
  difficulty: string
  active: boolean
  createdAt: Date
  updatedAt: Date
  completions?: QuestCompletion[]
}

export interface QuestCompletion {
  id: string
  userId: string
  questId: string
  completedAt: Date
  xpAwarded: number
  statChanges?: Record<string, number> | null
}

export interface QuestWithCompletion extends Quest {
  completedToday: boolean
  completionCount: number
}

// ─────────────────────────────────────────────
// HABITS
// ─────────────────────────────────────────────

export interface Habit {
  id: string
  userId: string
  title: string
  description?: string | null
  category: QuestCategory
  target: number
  unit: string
  xpReward: number
  frequency: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

// ─────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────

export interface Achievement {
  id: string
  key: string
  name: string
  description: string
  xpReward: number
}

export interface UserAchievement {
  id: string
  userId: string
  achievement: Achievement
  unlockedAt: Date
}

// ─────────────────────────────────────────────
// XP
// ─────────────────────────────────────────────

export interface XPTransaction {
  id: string
  userId: string
  amount: number
  reason: string
  questCompletionId?: string | null
  createdAt: Date
}

// ─────────────────────────────────────────────
// MOOD
// ─────────────────────────────────────────────

export interface MoodEntry {
  id: string
  userId: string
  mood: Mood
  note?: string | null
  entryDate: Date
}

// ─────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────

export type NotificationType =
  | "QUEST_COMPLETED"
  | "LEVEL_UP"
  | "ACHIEVEMENT_UNLOCKED"
  | "RANK_UP"
  | "STREAK_MILESTONE"
  | "DAILY_QUEST_AVAILABLE"
  | "STAT_INCREASE"

export interface SystemNotification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  read: boolean
  createdAt: Date
}

// ─────────────────────────────────────────────
// QUEST COMPLETION RESULT
// ─────────────────────────────────────────────

export interface QuestCompletionResult {
  xpAwarded: number
  statChanges: Record<string, number>
  leveledUp: boolean
  newLevel?: number
  previousLevel?: number
  rankUp: boolean
  newRank?: Rank
  achievementsUnlocked: Achievement[]
  notifications: SystemNotification[]
}

// ─────────────────────────────────────────────
// CATEGORY METADATA
// ─────────────────────────────────────────────

export interface CategoryMeta {
  label: string
  color: string
  textColor: string
  borderColor: string
  bgColor: string
}

// ─────────────────────────────────────────────
// API RESPONSES
// ─────────────────────────────────────────────

export interface ApiSuccess<T> {
  success: true
  data: T
}

export interface ApiError {
  success: false
  error: string
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError

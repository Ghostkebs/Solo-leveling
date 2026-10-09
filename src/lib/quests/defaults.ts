import type { QuestCategory, QuestType } from "@/types"

interface DefaultQuest {
  title: string
  description: string
  category: QuestCategory
  type: QuestType
  xpReward: number
  difficulty: string
}

// Default daily quests seeded during onboarding
export const DEFAULT_DAILY_QUESTS: DefaultQuest[] = [
  {
    title: "Wake Up Before 8 AM",
    description: "Start the day early. Discipline begins at dawn.",
    category: "DISCIPLINE",
    type: "DAILY",
    xpReward: 50,
    difficulty: "Normal",
  },
  {
    title: "Exercise",
    description: "Work out. Push your body. Build your strength.",
    category: "BODY",
    type: "DAILY",
    xpReward: 75,
    difficulty: "Normal",
  },
  {
    title: "Study 5 Hours",
    description: "Dedicate 5 focused hours to your studies or learning.",
    category: "MIND",
    type: "DAILY",
    xpReward: 100,
    difficulty: "Hard",
  },
  {
    title: "Learn a New Skill (1 Hour)",
    description: "Spend 1 hour learning something new outside of formal study.",
    category: "MIND",
    type: "DAILY",
    xpReward: 75,
    difficulty: "Normal",
  },
  {
    title: "Drink 5 Cups of Water",
    description: "Stay hydrated. Fuel your body.",
    category: "BODY",
    type: "DAILY",
    xpReward: 25,
    difficulty: "Easy",
  },
  {
    title: "No Phone 30 Min Before Bed",
    description: "Protect your sleep. No screen time 30 minutes before sleeping.",
    category: "DISCIPLINE",
    type: "DAILY",
    xpReward: 50,
    difficulty: "Normal",
  },
  {
    title: "Sleep Before 12 AM",
    description: "Rest is part of the grind. Sleep before midnight.",
    category: "BODY",
    type: "DAILY",
    xpReward: 50,
    difficulty: "Normal",
  },
  {
    title: "Read the Bible and Pray",
    description: "Nourish your spirit. Spend time in scripture and prayer.",
    category: "SPIRIT",
    type: "DAILY",
    xpReward: 50,
    difficulty: "Easy",
  },
]

export const QUEST_DIFFICULTY_XP_MULTIPLIERS: Record<string, number> = {
  Easy: 0.75,
  Normal: 1.0,
  Hard: 1.5,
  Legendary: 2.5,
}

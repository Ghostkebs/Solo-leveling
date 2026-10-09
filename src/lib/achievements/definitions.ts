export interface AchievementDef {
  key: string
  name: string
  description: string
  xpReward: number
}

export const ACHIEVEMENT_DEFINITIONS: AchievementDef[] = [
  {
    key: "FIRST_STEP",
    name: "First Step",
    description: "Complete your first quest.",
    xpReward: 50,
  },
  {
    key: "SEVEN_DAY_WARRIOR",
    name: "7 Day Warrior",
    description: "Maintain a 7-day completion streak.",
    xpReward: 200,
  },
  {
    key: "DISCIPLINED",
    name: "Disciplined",
    description: "Complete all daily objectives for 7 consecutive days.",
    xpReward: 500,
  },
  {
    key: "LEVEL_10",
    name: "Level 10",
    description: "Reach Level 10.",
    xpReward: 300,
  },
  {
    key: "AWAKENED",
    name: "Awakened",
    description: "Reach Level 25 and unlock your true potential.",
    xpReward: 1000,
  },
  {
    key: "MIND_OVER_MATTER",
    name: "Mind Over Matter",
    description: "Complete 30 Mind category quests.",
    xpReward: 150,
  },
  {
    key: "IRON_WILL",
    name: "Iron Will",
    description: "Complete 30 quests in total.",
    xpReward: 250,
  },
  {
    key: "SPIRIT_SEEKER",
    name: "Spirit Seeker",
    description: "Complete 14 Spirit quests.",
    xpReward: 200,
  },
]

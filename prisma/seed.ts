import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  // Seed achievement definitions
  const achievements = [
    {
      key: "FIRST_STEP",
      name: "First Step",
      description: "Complete your first quest.",
      xpReward: 50,
    },
    {
      key: "SEVEN_DAY_WARRIOR",
      name: "7 Day Warrior",
      description: "Maintain a 7-day streak.",
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
      description: "Accumulate 1,000 Intelligence XP.",
      xpReward: 150,
    },
    {
      key: "IRON_WILL",
      name: "Iron Will",
      description: "Complete 30 quests.",
      xpReward: 250,
    },
    {
      key: "SPIRIT_SEEKER",
      name: "Spirit Seeker",
      description: "Complete 14 Spirit quests.",
      xpReward: 200,
    },
  ]

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { key: achievement.key },
      update: achievement,
      create: achievement,
    })
  }

  console.log(`✅ Seeded ${achievements.length} achievements`)
  console.log("✅ Database seeded successfully")
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

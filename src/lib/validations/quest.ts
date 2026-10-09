import { z } from "zod"

export const QuestCategorySchema = z.enum([
  "BODY",
  "MIND",
  "DISCIPLINE",
  "SPIRIT",
  "PERSONAL",
])

export const QuestTypeSchema = z.enum([
  "DAILY",
  "WEEKLY",
  "LONG_TERM",
  "MAIN",
  "SIDE",
])

export const CreateQuestSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(120, "Title must be under 120 characters")
    .trim(),
  description: z.string().max(500).optional(),
  category: QuestCategorySchema,
  type: QuestTypeSchema,
  xpReward: z
    .number()
    .int()
    .min(1, "XP reward must be at least 1")
    .max(10000, "XP reward cannot exceed 10,000"),
  difficulty: z.enum(["Easy", "Normal", "Hard", "Legendary"]).default("Normal"),
})

export const UpdateQuestSchema = CreateQuestSchema.partial().extend({
  active: z.boolean().optional(),
})

export const CompleteQuestSchema = z.object({
  questId: z.string().cuid("Invalid quest ID"),
})

export type CreateQuestInput = z.infer<typeof CreateQuestSchema>
export type UpdateQuestInput = z.infer<typeof UpdateQuestSchema>
export type CompleteQuestInput = z.infer<typeof CompleteQuestSchema>

import { z } from "zod"

export const MoodSchema = z.enum([
  "HAPPY",
  "BLANK",
  "SAD",
  "STRESSED",
  "TIRED",
  "ROUGH",
])

export const CreateMoodEntrySchema = z.object({
  mood: MoodSchema,
  note: z.string().max(300, "Note must be under 300 characters").optional(),
})

export type MoodInput = z.infer<typeof MoodSchema>
export type CreateMoodEntryInput = z.infer<typeof CreateMoodEntrySchema>

# Solo Leveling — Real Life RPG System

> Level up your life. Complete quests. Gain XP. Become stronger.

A real-life RPG progression system where your daily actions become quests, your consistency becomes XP, and you become the main character of your own life.

---

## Features

- **Player Progression** — Level, XP, Rank (E → S)
- **Stats** — Strength, Intelligence, Discipline, Vitality, Spirit
- **Quest System** — Daily, Weekly, Long-Term, Main, Side quests
- **Habit Tracking** — Measurable habits with streaks
- **Achievements** — Unlockable milestones
- **Mood Tracking** — Daily mood entries with history
- **XP Ledger** — Immutable XP transaction history
- **System Notifications** — RPG-style event feed

---

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Database** — PostgreSQL (via Neon or Supabase)
- **ORM** — Prisma
- **Auth** — NextAuth v5
- **Validation** — Zod
- **Animations** — Framer Motion
- **Charts** — Recharts
- **Icons** — Lucide React

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/solo-leveling.git
cd solo-leveling
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
DATABASE_URL=your_postgresql_connection_string
AUTH_SECRET=your_secret_key  # openssl rand -base64 32
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set up the database

```bash
# Push schema to your database
npm run db:push

# Or create a migration
npm run db:migrate

# Seed initial data
npm run db:seed
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Prisma Commands

```bash
npm run db:push      # Push schema changes
npm run db:migrate   # Create and apply migration
npm run db:studio    # Open Prisma Studio (DB GUI)
npm run db:seed      # Seed achievement definitions
```

---

## Project Structure

```
src/
├── app/
│   ├── auth/           # Login & Register pages
│   ├── dashboard/      # Main player dashboard
│   │   ├── quests/
│   │   ├── habits/
│   │   ├── achievements/
│   │   └── stats/
│   └── layout.tsx
├── components/
│   ├── ui/             # Base components
│   ├── dashboard/      # Dashboard-specific
│   ├── quests/         # Quest components
│   └── layout/         # Nav, sidebar
├── lib/
│   ├── auth/           # Auth config
│   ├── db/             # Prisma client
│   ├── calculations/   # XP & level engine
│   ├── validations/    # Zod schemas
│   ├── quests/         # Quest defaults
│   └── achievements/   # Achievement definitions
├── types/
│   └── index.ts        # Shared TypeScript types
prisma/
├── schema.prisma
└── seed.ts
```

---

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Recommended database providers: [Neon](https://neon.tech) or [Supabase](https://supabase.com)

---

## Development Phases

- [x] **Phase 1** — Foundation (current)
- [ ] **Phase 2** — Authentication
- [ ] **Phase 3** — Player System (XP, Level, Stats)
- [ ] **Phase 4** — Quest System
- [ ] **Phase 5** — Habits
- [ ] **Phase 6** — Gamification (Achievements, Level-up)
- [ ] **Phase 7** — Mood Tracking
- [ ] **Phase 8** — Analytics
- [ ] **Phase 9** — Polish & Performance

---

## License

Private project. All rights reserved.

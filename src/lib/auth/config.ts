// Auth configuration — implemented fully in Phase 2
// This file is a placeholder to establish the auth module structure.

export const AUTH_CONFIG = {
  // Session max age: 30 days
  sessionMaxAge: 30 * 24 * 60 * 60,
  // Cookie name
  cookieName: "sl-session",
} as const

export type AuthConfig = typeof AUTH_CONFIG

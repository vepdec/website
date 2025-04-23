import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { rateLimit } from "./rate-limit"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendMail = (email: string) => {
  window.location.href = `mailto:${email}`
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// Sanitize user input to prevent XSS attacks
export function sanitizeInput(input: string): string {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}

// Validate email format
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Apply rate limiting to form submissions
export async function applyRateLimit(identifier: string, limit = 5, timeWindow = 60): Promise<boolean> {
  try {
    const result = await rateLimit(identifier, limit, timeWindow)
    return result.success
  } catch (error) {
    console.error("Rate limiting error:", error)
    return false
  }
}

// Add shadow glow effect to elements
export const shadowGlow = {
  blue: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
  indigo: "shadow-[0_0_15px_rgba(99,102,241,0.5)]",
  purple: "shadow-[0_0_15px_rgba(139,92,246,0.5)]",
}

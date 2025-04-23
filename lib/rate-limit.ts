interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: Date
}

// Simple in-memory store for rate limiting
// In production, use Redis or another distributed store
const rateLimitStore = new Map<string, { count: number; reset: Date }>()

/**
 * Apply rate limiting based on an identifier
 * @param identifier - Unique identifier (e.g., IP address, user ID)
 * @param limit - Maximum number of requests allowed in the time window
 * @param windowInSeconds - Time window in seconds
 * @returns Result of the rate limit check
 */
export async function rateLimit(identifier: string, limit: number, windowInSeconds: number): Promise<RateLimitResult> {
  const now = new Date()
  const key = `ratelimit:${identifier}`

  // Clean up expired entries
  for (const [storedKey, data] of rateLimitStore.entries()) {
    if (data.reset < now) {
      rateLimitStore.delete(storedKey)
    }
  }

  // Get current rate limit data or create new entry
  const resetTime = new Date(now.getTime() + windowInSeconds * 1000)
  const currentData = rateLimitStore.get(key) || { count: 0, reset: resetTime }

  // Check if reset time has passed
  if (currentData.reset < now) {
    currentData.count = 0
    currentData.reset = resetTime
  }

  // Increment count
  currentData.count += 1
  rateLimitStore.set(key, currentData)

  // Check if limit exceeded
  const remaining = Math.max(0, limit - currentData.count)
  const success = currentData.count <= limit

  return {
    success,
    limit,
    remaining,
    reset: currentData.reset,
  }
}

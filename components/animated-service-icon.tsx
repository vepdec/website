"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface AnimatedServiceIconProps {
  Icon: LucideIcon
  size?: number
  color?: string
  animationDelay?: number
}

export default function AnimatedServiceIcon({
  Icon,
  size = 32,
  color = "text-blue-400",
  animationDelay = 0,
}: AnimatedServiceIconProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 },
      }}
      className={`${color}`}
    >
      <Icon size={size} />
    </motion.div>
  )
}

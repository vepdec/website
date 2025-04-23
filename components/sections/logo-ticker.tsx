"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Cloud } from "lucide-react"
import { useState } from "react"

// Update the company type definition at the top of the file
interface Company {
  name: string
  logo: string
  class: string
}

const companies = [
  {
    name: "Lufthansa Airlines",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Lufthansa-Logo.png",
    class: "max-h-10 w-auto", // Unchanged
  },
  {
    name: "Aegean Airlines",
    logo: "/logos/aegean.svg",
    class: "max-h-24 w-auto", // Unchanged
  },
  {
    name: "FirstBase",
    logo: "/logos/firstbase.io-logo.svg",
    class: "max-h-8 w-auto", // Unchanged
  },
  {
    name: "21Bitcoin",
    logo: "/logos/21bitcoin.png",
    class: "max-h-16 w-auto", // Unchanged
  },
  {
    name: "Glassnode",
    logo: "/logos/glassnode-no-bg.png",
    class: "w-40 h-40", // Increased
  },
  {
    name: "Eet.nu",
    logo: "/logos/eet.png",
    class: "max-h-12 w-12", // Increased
  },
  {
    name: "OrangeHost",
    logo: "/logos/OrangeHost.svg",
    class: "max-h-8 w-auto", // Unchanged
  },
  {
    name: "Droip",
    logo: "/logos/droip.svg",
    class: "max-h-22 w-auto", // Increased
  },
  {
    name: "Brizy",
    logo: "/logos/brizy.io-no-bg.png",
    class: "max-h-13 w-auto", // Increased
  },
  {
    name: "Creative Force",
    logo: "/logos/creativeforce.png",
    class: "max-h-12 w-auto", // Increased
  },
  {
    name: "Draftbit",
    logo: "/logos/draftbit.png",
    class: "max-h-16 w-auto", // Increased
  },
  {
    name: "Feeling Stream",
    logo: "/logos/feelingstream.png",
    class: "max-h-20 w-auto", // Increased
  },
  {
    name: "Film Vandaag",
    logo: "/logos/filmvandaag.png",
    class: "max-h-20 w-auto", // Increased
  },
  {
    name: "Htm.nl",
    logo: "/logos/htm.nl-no-bg.png",
    class: "max-h-20 w-auto", // Increased
  },
  {
    name: "Kikin.io",
    logo: "/logos/kikin.io-no-bg.png",
    class: "max-h-20 w-auto", // Increased
  },
  {
    name: "Marketsy.ai",
    logo: "/logos/marketsy.ai-no-bg.png",
    class: "max-h-16 w-auto", // Increased
  },
  {
    name: "Otterly.ai",
    logo: "/logos/otterly.png",
    class: "max-h-12 w-auto", // Increased
  },
  {
    name: "Preplounge",
    logo: "/logos/preplounge.png",
    class: "max-h-16 w-auto", // Increased
  },
  {
    name: "Sitejet",
    logo: "/logos/sitejet.svg",
    class: "max-h-8 w-auto", // Unchanged
  },
  {
    name: "Spond.com",
    logo: "/logos/spond.com-no-bg.png",
    class: "max-h-22 w-auto", // Increased
  },
  {
    name: "VoiceNotes",
    logo: "/logos/voicenotes.png",
    class: "max-h-16 w-auto", // Increased
  },
]

// Replace the splitting logic with this safer version
const firstRowCompanies: Company[] = []
const secondRowCompanies: Company[] = []

// First add the specific companies we want in the first row
const priorityNames = ["Lufthansa Airlines", "Aegean Airlines", "FirstBase", "21Bitcoin", "Glassnode"]
const remainingCompanies: Company[] = []

// Sort companies into priority and remaining
companies.forEach((company) => {
  if (priorityNames.includes(company.name)) {
    firstRowCompanies.push(company)
  } else {
    remainingCompanies.push(company)
  }
})

// Fill the first row with additional companies to balance
const companiesPerRow = Math.ceil(companies.length / 2)
const additionalNeeded = companiesPerRow - firstRowCompanies.length
if (additionalNeeded > 0) {
  firstRowCompanies.push(...remainingCompanies.slice(0, additionalNeeded))
  secondRowCompanies.push(...remainingCompanies.slice(additionalNeeded))
} else {
  secondRowCompanies.push(...remainingCompanies)
}

// Component for the logo with hover effect
function LogoCard({ company, index, rowKey }: { company: Company; index: number; rowKey: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      key={`${rowKey}-${index}`}
      className="flex flex-col items-center justify-center backdrop-blur-xl bg-white/10 border border-white/10 min-w-[180px] h-28 px-6 rounded-xl transition-all duration-300 hover:bg-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onContextMenu={(e) => e.preventDefault()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        <Image
          src={company.logo || "/placeholder.svg"}
          alt={company.name}
          width={140}
          height={40}
          className={`object-contain filter brightness-150 grayscale ${company.class}`}
          unoptimized={true}
          draggable="false"
          style={{ pointerEvents: "none", userSelect: "none" }}
        />
      </div>

      {/* Thinking cloud with name animation */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -bottom-16 flex flex-col items-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Cloud className="w-8 h-8 text-white/70" />
            </motion.div>

            <motion.div
              className="text-white text-sm font-medium mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              {company.name}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function LogoTicker() {
  return (
    <section className="py-16 bg-navy-900/50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with companies of all sizes to secure their digital assets and build exceptional web experiences.
          </p>
        </div>

        <div className="relative">
          {/* First row of logos with extra space above */}
          <motion.div
            className="flex gap-8 mb-20 mt-10" // Added extra space above and below
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {[...firstRowCompanies, ...firstRowCompanies].map((company, index) => (
              <LogoCard key={index} company={company} index={index} rowKey="row1" />
            ))}
          </motion.div>

          {/* Second row of logos with extra space below */}
          <motion.div
            className="flex gap-8 mb-16" // Added extra space below
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {[...secondRowCompanies, ...secondRowCompanies].map((company, index) => (
              <LogoCard key={index} company={company} index={index} rowKey="row2" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

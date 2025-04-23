"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const reviews = [
  {
    "id": 1,
    "name": "Augusto",
    "role": "Engineering Lead, FirstBase.io",
    "content": "Great experience, helped us a lot to improve how safe our products are. Providing really detailed information on what is wrong and how to validate the problem. Quick to reply and prompt to help.",
    "avatar": "A.M.",
    "rating": 5
  },
  {
    "id": 2,
    "name": "Książę Litewski",
    "role": "Security Head, Glassnode",
    "content": "Muhammad from Vepdec consulted for the company I worked with at the time. He helped us identify meaningful vulnerabilities and did a good job suggesting countermeasures. I would recommend Vepdec if you are looking for a trusted security consulting partner.",
    "avatar": "K.L.",
    "rating": 5
  },
  {
    "id": 3,
    "name": "Mark Aburot",
    "role": "Security Head,Brizy.io",
    "content": "You're amazing, we appreciate your audit of our site, it greatly helped our team make it more secure for members. Thank you for the help, understanding, and for being a part of our community.",
    "avatar": "M.A.",
    "rating": 5
  },
  {
    "id": 4,
    "name": "Alexey Kramin",
    "role": "Founder, Marketsy.ai",
    "content": "VepDec's team provided us with a comprehensive cybersecurity audit. Their insights were invaluable and helped us address several key vulnerabilities that could have compromised our systems.",
    "avatar": "A.K.",
    "rating": 5
  },
  {
    "id": 5,
    "name": "Ali Nawaz",
    "role": "Owner, Online Grocery Store, Pakistan",
    "content": "VepDec's audit helped me secure our online store. Their team was responsive, professional, and worked with us to make our platform more secure.",
    "avatar": "A.N.",
    "rating": 4.5
  },
  {
    "id": 6,
    "name": "Liam Johnson",
    "role": "Marketing Director, Digital Insights, Canada",
    "content": "Thanks to VepDec, our website's security has been greatly enhanced. Their team did an excellent job ensuring that our customer data is safe and secure.",
    "avatar": "L.J.",
    "rating": 4
  },
  {
    "id": 7,
    "name": "Kavya Desai",
    "role": "Founder, Desai Solutions, India",
    "content": "The web application designed by VepDec exceeded our expectations. It was not only visually stunning but also optimized for security and performance.",
    "avatar": "K.D.",
    "rating": 5
  },
  {
    "id": 8,
    "name": "Jürgen Müller",
    "role": "CTO, Müller Technologies, Germany",
    "content": "VepDec's vulnerability assessment provided us with valuable insights. We were able to patch several vulnerabilities before they could be exploited. Highly recommend them for any tech firm looking to improve their security posture.",
    "avatar": "J.M.",
    "rating": 4.5
  },
  {
    "id": 9,
    "name": "Chris Williams",
    "role": "Director of IT, Global Enterprise, USA",
    "content": "VepDec's services were pivotal in improving our overall cybersecurity strategy. They provided critical recommendations and helped us stay ahead of potential threats.",
    "avatar": "C.W.",
    "rating": 4
  },
  {
    "id": 10,
    "name": "Anonymous Client",
    "role": "Large Enterprise, NDA",
    "content": "VepDec assisted us in enhancing our data security protocols. Their team was highly professional and provided detailed insights that significantly improved our security posture. Their consultancy is invaluable.",
    "avatar": "A.C.",
    "rating": 5
  },
]

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleReviews, setVisibleReviews] = useState<typeof reviews>([])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setVisibleReviews(reviews.slice(activeIndex, activeIndex + 1))
      } else if (width < 1024) {
        setVisibleReviews(reviews.slice(activeIndex, activeIndex + 2))
      } else {
        setVisibleReviews(reviews.slice(activeIndex, activeIndex + 3))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeIndex])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (reviews.length - (visibleReviews.length - 1)))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - visibleReviews.length : prev - 1))
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about our services.
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden gap-6">
            {visibleReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="drobackp-blur-xl bg-white/10 border border-white/10 h-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group">
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} transition-colors duration-300 group-hover:text-yellow-300`}
                        />
                      ))}
                    </div>
                    <p className="mb-6 text-blue-50 group-hover:text-white transition-colors duration-300">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors duration-300">
                        <AvatarFallback>{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-white">{review.name}</p>
                        <p className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full w-10 h-10 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft size={16} />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full w-10 h-10 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight size={16} />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link href="/testimonials" className="flex items-center gap-2">
                View All Testimonials
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

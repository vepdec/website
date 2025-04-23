"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

// Sample testimonials data
const testimonials = [
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
  {
    "id": 11,
    "name": "Rashid Ahmad",
    "role": "Founder, Tech Start-up, Pakistan",
    "content": "We worked with VepDec to improve our cybersecurity infrastructure. Their team helped us identify and patch several vulnerabilities in our web applications, boosting our system's resilience.",
    "avatar": "R.A.",
    "rating": 4.5
  },
  {
    "id": 12,
    "name": "Tariq Ali",
    "role": "Owner, Local Taxi Service, Pakistan",
    "content": "The team at VepDec helped secure our taxi service's online platform. We now feel confident that our customer data is protected, thanks to their great work.",
    "avatar": "T.A.",
    "rating": 4
  },
  {
    "id": 13,
    "name": "Anonymous Client",
    "role": "Global Enterprise, NDA",
    "content": "VepDec's team provided us with excellent guidance in securing our network and infrastructure. Their vulnerability assessments were thorough and actionable. We continue to rely on their expertise for ongoing support.",
    "avatar": "A.C.",
    "rating": 5
  },
  {
    "id": 14,
    "name": "Haruto Takahashi",
    "role": "Security Head, Tokyo Corp, Japan",
    "content": "VepDec's consultancy helped us build a robust security framework. Their team worked closely with ours to develop strategies to protect our sensitive data. We are thankful for their partnership.",
    "avatar": "H.T.",
    "rating": 4.5
  },
  {
    "id": 15,
    "name": "Shahzad Iqbal",
    "role": "Founder, Consulting Firm, Pakistan",
    "content": "VepDec's consulting services were instrumental in securing our clients' data. Their proactive approach and attention to detail gave us the confidence that we were following best practices in cybersecurity.",
    "avatar": "S.I.",
    "rating": 4
  },
  {
    "id": 16,
    "name": "Jonas Schmidt",
    "role": "CTO, Schmidt Enterprises, Germany",
    "content": "VepDec provided us with a detailed security audit, which helped us strengthen our systems. Their approach to cybersecurity is thorough, professional, and highly effective.",
    "avatar": "J.S.",
    "rating": 5
  },
  {
    "id": 17,
    "name": "Anna Rodriguez",
    "role": "Founder, Rodriguez Designs, Spain",
    "content": "The design and development work VepDec did for us was exceptional. Our website looks amazing, and we have peace of mind knowing it's secure.",
    "avatar": "A.R.",
    "rating": 4.5
  },
  {
    "id": 18,
    "name": "Anonymous Client",
    "role": "Large Corporation, NDA",
    "content": "VepDec provided us with excellent consulting services, helping us secure our entire digital infrastructure. Their expertise and professionalism have made a significant impact on our security strategy.",
    "avatar": "A.C.",
    "rating": 4
  },
  {
    "id": 19,
    "name": "Ahmed Raza",
    "role": "Owner, E-commerce Store, Pakistan",
    "content": "VepDec helped us secure our online store and ensure customer trust. Their team is quick to respond and offered a detailed security plan for our website.",
    "avatar": "A.R.",
    "rating": 5
  },
  {
    "id": 20,
    "name": "David Smit",
    "role": "Founder, Smit Tech, Netherlands",
    "content": "We sought VepDec's services for a full security audit, and they provided insightful recommendations that greatly improved our online systems' protection.",
    "avatar": "D.S.",
    "rating": 4.5
  },
  {
    id: 21,
    name: "Alex T.",
    role: "Founder",
    content:
      "VepDec helped us ensure our platform's security with a comprehensive vulnerability assessment. They provided clear, actionable insights, and their team was very responsive throughout the process.",
    avatar: "A.T.",
    rating: 4,
  },
  {
    id: 22,
    name: "Linda H.",
    role: "CTO",
    content:
      "We worked with VepDec on strengthening our web security and implementing a solid strategy. Their team provided great guidance and showed a deep understanding of the latest threats in cybersecurity.",
    avatar: "L.H.",
    rating: 5,
  },
  {
    id: 23,
    name: "Ravi S.",
    role: "Founder",
    content:
      "VepDec's team assisted us in securing our mobile app platform. Their penetration testing service identified key vulnerabilities that we quickly addressed, improving our app's security drastically.",
    avatar: "R.S.",
    rating: 4.5,
  },
  {
    id: 24,
    name: "Maria L.",
    role: "Security Head",
    content:
      "We were able to enhance our security posture significantly thanks to VepDec's consulting services. They provided thorough assessments and were great at explaining complex security concepts.",
    avatar: "M.L.",
    rating: 4,
  },
  {
    id: 25,
    name: "Javier M.",
    role: "Security Specialist",
    content:
      "VepDec's vulnerability audit was top-notch. The team was fast and professional, providing us with a detailed action plan to mitigate risks. They helped us close gaps we had missed.",
    avatar: "J.M.",
    rating: 5,
  },
  {
    id: 26,
    name: "Sophie P.",
    role: "Marketing Director",
    content:
      "VepDec's SEO services helped our business gain much-needed visibility online. We saw a clear improvement in search rankings and organic traffic. They delivered solid results.",
    avatar: "S.P.",
    rating: 4.5,
  },
  {
    id: 27,
    name: "Jonathan C.",
    role: "Software Engineer",
    content:
      "VepDec helped us identify and address security vulnerabilities in our platform. Their team was knowledgeable and provided us with actionable solutions to prevent potential threats.",
    avatar: "J.C.",
    rating: 4,
  },
  {
    id: 28,
    name: "Abby W.",
    role: "CEO",
    content:
      "VepDec did a fantastic job securing our web app. Their detailed reports and expertise helped us implement crucial security measures to protect sensitive data.",
    avatar: "A.W.",
    rating: 5,
  },
  {
    id: 29,
    name: "Oliver B.",
    role: "Founder",
    content:
      "We are extremely happy with the consulting services we received from VepDec. Their team helped us navigate complex security challenges, and we felt confident in the solutions they suggested.",
    avatar: "O.B.",
    rating: 5,
  },
  {
    id: 30,
    name: "Eva N.",
    role: "Tech Lead",
    content:
      "VepDec's web security audit helped us identify several overlooked vulnerabilities. Thanks to their recommendations, we are now more confident about the security of our platform.",
    avatar: "E.N.",
    rating: 5,
  },
  {
    id: 31,
    name: "NDA Client",
    role: "Security Consultant",
    content:
      "Due to an NDA, I cannot disclose details of our collaboration, but VepDec's expertise and professionalism in cybersecurity were outstanding. They were an invaluable partner in securing our platform.",
    avatar: "N.C.",
    rating: 5,
  },
  {
    id: 32,
    name: "Jaspreet K.",
    role: "Security Lead",
    content:
      "Working with VepDec was a great experience. They helped us mitigate risks and improve the security of our services. Their insights were valuable and easy to implement.",
    avatar: "J.K.",
    rating: 5,
  },
  {
    id: 33,
    name: "NDA Client",
    role: "Product Manager",
    content:
      "VepDec assisted us with a comprehensive security audit. We were able to identify key vulnerabilities and enhance our security posture. Their team's thorough approach was exactly what we needed.",
    avatar: "N.C.",
    rating: 5,
  },
  {
    id: 34,
    name: "Liam T.",
    role: "Web Developer",
    content:
      "VepDec helped secure our website with detailed security audits and recommendations. They also provided us with advice on how to improve our backend security, which we implemented successfully.",
    avatar: "L.T.",
    rating: 5,
  },
  {
    id: 35,
    name: "Olivia F.",
    role: "CEO",
    content:
      "VepDec’s SEO expertise significantly increased our online presence. Their data-driven approach was exactly what we needed to optimize our digital marketing efforts.",
    avatar: "O.F.",
    rating: 5,
  },
  {
    id: 36,
    name: "David S.",
    role: "Founder",
    content:
      "The team at VepDec has been a great partner for our website development. They not only delivered a high-quality product but also ensured that it was secure from the ground up.",
    avatar: "D.S.",
    rating: 5,
  },
  {
    id: 37,
    name: "Brian P.",
    role: "Security Analyst",
    content:
      "VepDec helped us enhance the security of our mobile app with penetration testing. Their thorough testing helped us identify vulnerabilities and fix them before they could be exploited.",
    avatar: "B.P.",
    rating: 5,
  },
  {
    id: 38,
    name: "Samira Z.",
    role: "Tech Consultant",
    content:
      "Working with VepDec to improve our security and development processes was a great experience. Their team was extremely knowledgeable and guided us every step of the way.",
    avatar: "S.Z.",
    rating: 5,
  },
  {
    id: 39,
    name: "Ethan M.",
    role: "CTO",
    content:
      "VepDec was an invaluable asset during our security audit. Their team’s attention to detail and professionalism were second to none. Highly recommended!",
    avatar: "E.M.",
    rating: 5,
  },
  {
    id: 40,
    name: "Sonia R.",
    role: "Head of Development",
    content:
      "Our experience with VepDec was exceptional. They helped us secure our entire web infrastructure and provided invaluable consulting that set us up for success in the long run.",
    avatar: "S.R.",
    rating: 5,
  }
]

export default function TestimonialsPage() {
  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Client Testimonials
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Don't just take our word for it. Here's what our clients have to say about our services.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                      } transition-colors duration-300 group-hover:text-yellow-300`}
                    />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-400/20 absolute -top-2 -left-2" />
                  <p className="text-blue-50 group-hover:text-white transition-colors duration-300 relative z-10">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                <Avatar className="border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors duration-300">
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, CheckCircle, Users, Clock } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const digitalMarketingFaqs = [
  {
    question: "How do you determine the right marketing channels for our business?",
    answer:
      "We determine the optimal marketing channels through a comprehensive analysis of your business goals, target audience demographics and behavior, industry benchmarks, competitor strategies, and past performance data. We consider factors like your sales cycle, budget constraints, and timeline requirements. This data-driven approach allows us to allocate resources to channels that will deliver the best ROI for your specific situation, and we continuously refine our strategy based on performance metrics.",
  },
  {
    question: "How do you measure the ROI of digital marketing campaigns?",
    answer:
      "We measure ROI by tracking both costs and conversions across all channels. We implement proper attribution models to understand which touchpoints contribute to conversions, set up conversion tracking for leads and sales, and assign monetary values to different conversion types. Our reporting connects marketing metrics to business outcomes by calculating cost per acquisition, return on ad spend, and lifetime value to cost ratios. We use this data to continuously optimize campaigns for maximum return.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "The timeline for results varies by channel. Paid advertising can generate immediate traffic and leads, while SEO typically takes 3-6 months to show significant improvements. Social media marketing usually requires 2-3 months to build momentum. Content marketing is a longer-term strategy that builds results over 6-12 months. We set realistic expectations based on your specific situation and provide regular progress updates with key performance indicators to track improvement over time.",
  },
  {
    question: "Do you offer integrated marketing strategies or only individual services?",
    answer:
      "We offer both integrated marketing strategies and individual services based on your needs. Our integrated approach ensures all channels work together cohesively with consistent messaging and complementary tactics. We develop comprehensive strategies that leverage the strengths of each channel while maintaining a unified brand voice. However, we can also provide specialized services in specific areas if you're looking to enhance just one aspect of your marketing. Our recommendations are always based on what will best achieve your business objectives.",
  },
  {
    question: "How do you stay current with the constantly changing digital marketing landscape?",
    answer:
      "Our team maintains cutting-edge knowledge through continuous education, industry certifications, and participation in professional communities. We subscribe to leading industry publications, attend conferences, and participate in beta programs with major platforms like Google and Facebook. We conduct regular internal knowledge-sharing sessions and maintain partnerships with platform representatives. This commitment to ongoing learning ensures we're always implementing the most effective, current strategies for our clients.",
  },
]

export default function DigitalMarketingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Digital Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Strategic marketing solutions to boost your online presence and drive growth.
              </p>
              <p className="text-muted-foreground mb-6">
                Our digital marketing services help you connect with your target audience, increase brand awareness, and
                generate leads and sales. We develop data-driven strategies tailored to your business goals and target
                market.
              </p>
              <p className="text-muted-foreground mb-8">
                From SEO and PPC to social media and content marketing, we provide comprehensive solutions to help your
                business thrive in the digital landscape.
              </p>

              {/* Experience and Clients Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">7+ Years</h3>
                  </div>
                  <p className="text-sm text-blue-200">Experience in Digital Marketing</p>
                </div>
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">280+</h3>
                  </div>
                  <p className="text-sm text-blue-200">Clients Served</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Request a Marketing Consultation</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md aspect-square backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <BarChart className="h-32 w-32 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            >
              Our Digital Marketing Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of digital marketing services to help you achieve your business goals.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Search Engine Optimization (SEO)</h3>
                  <p className="text-muted-foreground mb-4">
                    Improve your organic visibility and drive targeted traffic to your website.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Keyword research and strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>On-page and technical SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Link building and content strategy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pay-Per-Click (PPC) Advertising</h3>
                  <p className="text-muted-foreground mb-4">
                    Drive immediate traffic and conversions with targeted paid advertising campaigns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Google Ads management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Social media advertising</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Remarketing and display campaigns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Social Media Marketing</h3>
                  <p className="text-muted-foreground mb-4">
                    Build brand awareness and engage with your audience across social platforms.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Social media strategy development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Content creation and curation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Community management and growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy-900/30">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            >
              Our Marketing Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We follow a data-driven approach to ensure maximum ROI from your marketing investments.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Research & Strategy</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your business, target audience, and competitors. We analyze your current
                    marketing efforts and develop a comprehensive strategy aligned with your goals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-muted-foreground">
                    We execute the strategy across selected channels, creating compelling content, setting up campaigns,
                    and implementing tracking mechanisms to measure performance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Monitoring & Optimization</h3>
                  <p className="text-muted-foreground">
                    We continuously monitor campaign performance, analyzing key metrics and making data-driven
                    adjustments to improve results and maximize ROI.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reporting & Analysis</h3>
                  <p className="text-muted-foreground">
                    We provide regular, comprehensive reports that highlight key performance indicators, insights, and
                    recommendations for future improvements.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Refinement & Scaling</h3>
                  <p className="text-muted-foreground">
                    Based on performance data and insights, we refine our strategies and scale successful campaigns to
                    drive continued growth and improvement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Digital Marketing FAQs"
        description="Find answers to common questions about our digital marketing services."
        faqs={digitalMarketingFaqs}
      />

      {/* CTA Section */}
      <section className="py-20 bg-navy-900/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            >
              Ready to Grow Your Online Presence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Contact us today to discuss how our digital marketing services can help you achieve your business goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

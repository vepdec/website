"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Calendar, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"
import Image from "next/image"

// Sample blog posts data
const blogPosts = [
  {
    id: "understanding-xss",
    title: "Understanding Cross-Site Scripting (XSS) Attacks",
    excerpt:
      "Learn about one of the most common web vulnerabilities and how to protect your applications from XSS attacks.",
    date: "2023-11-15",
    category: "Security",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "nextjs-vs-react",
    title: "Next.js vs React: When to Use Which?",
    excerpt: "A comprehensive comparison of Next.js and React to help you choose the right framework for your project.",
    date: "2023-10-22",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "seo-best-practices",
    title: "SEO Best Practices for 2023",
    excerpt:
      "Stay ahead of the competition with these SEO best practices that will help improve your website's visibility.",
    date: "2023-09-18",
    category: "Marketing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "mobile-app-security",
    title: "Mobile App Security: Protecting User Data",
    excerpt:
      "Discover essential strategies to secure user data in your mobile applications and build trust with your users.",
    date: "2023-08-05",
    category: "Security",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "ai-in-cybersecurity",
    title: "The Role of AI in Modern Cybersecurity",
    excerpt:
      "Explore how artificial intelligence is transforming the cybersecurity landscape and helping organizations stay protected.",
    date: "2023-07-12",
    category: "Security",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "responsive-design-tips",
    title: "Responsive Design Tips for Better User Experience",
    excerpt: "Learn how to create responsive designs that provide an optimal viewing experience across all devices.",
    date: "2023-06-28",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const categories = ["All", "Security", "Development", "Marketing", "Design"]

const blogFaqs = [
  {
    question: "How often do you publish new articles?",
    answer:
      "We publish new articles on a weekly basis, typically every Tuesday and Thursday. We focus on quality over quantity, ensuring each piece provides valuable insights and actionable information. For time-sensitive topics like security vulnerabilities or major technology updates, we may publish additional articles outside our regular schedule.",
  },
  {
    question: "Can I contribute a guest post to your blog?",
    answer:
      "Yes, we welcome guest contributions from industry experts. To be considered, please send us a brief pitch outlining your proposed topic, key points, and your relevant expertise. All guest posts must be original, not previously published elsewhere, and align with our content standards. We particularly value practical insights, case studies, and innovative perspectives on cybersecurity, web development, and digital marketing.",
  },
  {
    question: "Do you offer an RSS feed or email newsletter for blog updates?",
    answer:
      "Yes, we offer both options. You can subscribe to our RSS feed for real-time updates or join our weekly newsletter to receive a curated selection of our latest articles, industry news, and exclusive content directly in your inbox. The newsletter also includes special offers and invitations to webinars that aren't announced elsewhere.",
  },
  {
    question: "How can I share your articles on social media?",
    answer:
      "Each blog post has social sharing buttons at the bottom of the article that make it easy to share on platforms like Twitter, LinkedIn, Facebook, and more. We encourage sharing our content with proper attribution. If you'd like to quote or reference our articles in your own content, please include a link back to the original post.",
  },
  {
    question: "Can I request a specific topic for a future blog post?",
    answer:
      "We value reader input and strive to create content that addresses your specific questions and challenges. You can suggest topics through our contact form or by leaving a comment on any blog post. While we can't guarantee we'll cover every suggested topic, we carefully consider all requests and prioritize those that would benefit many readers.",
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Our Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Stay updated with the latest insights, trends, and best practices in cybersecurity, web development, and
          digital marketing.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 transition-all duration-300 focus:bg-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-glow transition-all duration-300"
                  : "backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group backdrop-blur-xl bg-white/10 border border-white/10">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-300 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="bg-white/5 hover:bg-white/10 text-white hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1 p-0"
                  >
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 max-w-lg mx-auto"
          >
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any articles matching your search criteria. Try adjusting your filters or search query.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300"
            >
              Reset Filters
            </Button>
          </motion.div>
        </div>
      )}

      {/* Blog FAQs Section */}
      <FAQSection
        title="Blog FAQs"
        description="Common questions about our blog and content"
        faqs={blogFaqs}
        className="mt-20"
      />
    </div>
  )
}

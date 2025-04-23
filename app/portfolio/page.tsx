"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tag } from "lucide-react";

// Sample portfolio projects
const projects = [
  {
    id: "secure-banking-app",
    title: "Secure Banking Application",
    category: "Security",
    description: "A highly secure banking application with advanced encryption and multi-factor authentication.",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Biometric Authentication"],
  },
  {
    id: "security-audit-tool",
    title: "Security Audit Tool",
    category: "Security",
    description: "An automated security audit tool that identifies vulnerabilities in web applications.",
    technologies: ["Python", "Docker", "OWASP ZAP", "Elasticsearch", "React"],
  },
  {
    id: "data-breach-monitor",
    title: "Data Breach Monitoring Platform",
    category: "Security",
    description: "A tool that alerts businesses of potential data breaches and exposed credentials in real-time.",
    technologies: ["Go", "Kafka", "MongoDB", "Elastic Stack", "GraphQL"],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A scalable e-commerce platform with integrated payment processing and inventory management.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS"],
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Patient Portal",
    category: "Web Development",
    description: "A HIPAA-compliant portal for secure patient communication and health records.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "HIPAA Compliance"],
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Listing Platform",
    category: "Web Development",
    description: "A feature-rich real estate platform for listing, filtering, and contacting property sellers.",
    technologies: ["Vue.js", "Firebase", "Cloud Functions", "Algolia", "SCSS"],
  },
  {
    id: "seo-analytics-dashboard",
    title: "SEO Analytics Dashboard",
    category: "Marketing",
    description: "A dashboard providing real-time SEO performance and keyword tracking metrics.",
    technologies: ["Vue.js", "D3.js", "Google Analytics API", "Python", "FastAPI"],
  },
  {
    id: "campaign-tracker",
    title: "Ad Campaign Tracker",
    category: "Marketing",
    description: "Tracks multi-channel ad campaigns and generates real-time performance insights.",
    technologies: ["React", "Chart.js", "Firebase", "GA4", "Tailwind"],
  },
  {
    id: "content-scheduler-tool",
    title: "Content Scheduler Tool",
    category: "Marketing",
    description: "A tool to schedule and auto-post marketing content across social media platforms.",
    technologies: ["Next.js", "Node.js", "MongoDB", "OAuth2", "Cron Jobs"],
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "App Development",
    description: "A secure and user-friendly mobile banking application for iOS and Android.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Biometric Authentication"],
  },
  {
    id: "gym-tracker-app",
    title: "Gym Tracker App",
    category: "App Development",
    description: "A fitness app to monitor progress, set goals, and schedule workouts with trainers.",
    technologies: ["Flutter", "Firebase", "Figma", "Google Fit API", "GraphQL"],
  },
  {
    id: "event-booking-app",
    title: "Event Booking App",
    category: "App Development",
    description: "A streamlined app for finding, booking, and managing event tickets.",
    technologies: ["Swift", "Node.js", "MySQL", "QR Scanner SDK", "Firebase Messaging"],
  },
  {
    id: "ml-customer-segmentation",
    title: "AI-Powered Customer Segmentation",
    category: "AI/ML",
    description: "Clustering customer behaviors using machine learning for smarter marketing.",
    technologies: ["Python", "Scikit-learn", "Pandas", "AWS SageMaker", "Jupyter Notebooks"],
  },
  {
    id: "fraud-detection-ml-v1",
    title: "Fraud Detection System",
    category: "AI/ML",
    description: "An ML model to detect fraudulent transactions in real time.",
    technologies: ["TensorFlow", "Python", "Kafka", "Elastic Stack", "XGBoost"],
  },
  {
    id: "chatbot-customer-support",
    title: "Customer Support Chatbot",
    category: "AI/ML",
    description: "A multilingual chatbot trained to answer customer queries instantly.",
    technologies: ["Dialogflow", "Node.js", "MongoDB", "GPT-4", "LangChain"],
  },
  {
    id: "inventory-pos-tool",
    title: "Inventory & POS System",
    category: "Local Business Tools",
    description: "A POS and inventory system tailored for small grocery and retail stores.",
    technologies: ["React", "SQLite", "Electron", "Redux Toolkit", "Barcode Scanner API"],
  },
  {
    id: "restaurant-order-system",
    title: "Restaurant Online Order System",
    category: "Local Business Tools",
    description: "An online food ordering and delivery system for small restaurants.",
    technologies: ["Next.js", "Node.js", "Twilio", "MongoDB", "Razorpay"],
  },
  {
    id: "laundry-booking-app",
    title: "Laundry Booking System",
    category: "Local Business Tools",
    description: "A local booking platform for laundry pick-up and delivery services.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Push Notifications", "Stripe"],
  },
  {
    id: "erp-suite-enterprise",
    title: "Enterprise ERP Suite",
    category: "Enterprise Solutions",
    description: "A fully integrated ERP solution tailored for large-scale enterprises.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "React"],
  },
  {
    id: "hr-automation-suite",
    title: "HR Automation Platform",
    category: "Enterprise Solutions",
    description: "Automates hiring, onboarding, and payroll in a large-scale corporate setting.",
    technologies: ["Python", "Django", "Celery", "RabbitMQ", "MySQL"],
  },
  {
    id: "enterprise-ticketing",
    title: "Enterprise Ticketing System",
    category: "Enterprise Solutions",
    description: "A scalable ticketing and incident management platform with SLA tracking.",
    technologies: ["Next.js", "NestJS", "TypeORM", "Redis", "JWT"],
  },
  {
    id: "neumorphic-dashboard-ui",
    title: "Neumorphic Dashboard UI Kit",
    category: "UI/UX Design",
    description: "A modern, soft UI dashboard kit built using Figma and Tailwind for enterprise-level interfaces.",
    technologies: ["Figma", "Tailwind CSS", "Adobe XD"]
  },
  {
    id: "accessible-web-redesign",
    title: "Accessible Website Redesign",
    category: "UI/UX Design",
    description: "Redesigned a non-profit's website with WCAG-compliant, mobile-first design for broader accessibility.",
    technologies: ["Sketch", "HTML5", "CSS Grid", "WCAG"]
  },
  {
    id: "ecommerce-ui-overhaul",
    title: "E-commerce UI Overhaul",
    category: "UI/UX Design",
    description: "Revamped the UX of a clothing e-commerce platform to improve conversions and retention.",
    technologies: ["Figma", "React", "Chakra UI"]
  },
  {
    id: "multi-cloud-migration",
    title: "Multi-Cloud Migration Framework",
    category: "Cloud Solutions",
    description: "Designed and implemented a multi-cloud strategy using AWS and Azure to enhance redundancy and scalability.",
    technologies: ["AWS", "Azure", "Terraform", "Docker"]
  },
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimization Tool",
    category: "Cloud Solutions",
    description: "Built a system to monitor and reduce cloud costs with real-time alerts and optimization suggestions.",
    technologies: ["GCP", "Python", "BigQuery", "Cloud Functions"]
  },
  {
    id: "secure-cloud-storage",
    title: "Secure Cloud Storage Platform",
    category: "Cloud Solutions",
    description: "Encrypted, redundant, and compliant cloud storage system for legal and healthcare firms.",
    technologies: ["AWS S3", "KMS", "HIPAA", "Lambda"]
  },
  {
    id: "hr-onboarding-bot",
    title: "Automated HR Onboarding Bot",
    category: "Automation",
    description: "Automated HR onboarding tasks like account creation and document submission workflows.",
    technologies: ["Zapier", "n8n", "Slack API", "Airtable"]
  },
  {
    id: "invoice-parser-automation",
    title: "Automated Invoice Parsing System",
    category: "Automation",
    description: "OCR-based tool for extracting, validating, and storing invoice data in accounting systems.",
    technologies: ["Tesseract", "Python", "Google Sheets API"]
  },
  {
    id: "content-scheduler",
    title: "Social Media Content Scheduler",
    category: "Automation",
    description: "Auto-publishes posts to multiple platforms based on predefined content calendars.",
    technologies: ["Node.js", "Cron Jobs", "Meta API", "Twitter API"]
  },
  {
    id: "ci-cd-terraform-pipeline",
    title: "CI/CD Pipeline with Terraform",
    category: "DevOps",
    description: "Built automated infrastructure pipeline for consistent deployments with Terraform and GitHub Actions.",
    technologies: ["Terraform", "GitHub Actions", "Docker", "AWS"]
  },
  {
    id: "monitoring-stack-prometheus",
    title: "Real-time Monitoring Stack",
    category: "DevOps",
    description: "Implemented Prometheus + Grafana for 24/7 infrastructure and application health monitoring.",
    technologies: ["Prometheus", "Grafana", "Kubernetes", "Alertmanager"]
  },
  {
    id: "containerized-dev-env",
    title: "Containerized Development Environment",
    category: "DevOps",
    description: "Dockerized dev environments for faster onboarding and consistent local testing.",
    technologies: ["Docker", "VS Code Dev Containers", "Nginx", "Git"]
  },
  {
    id: "multivendor-marketplace",
    title: "Multi-Vendor Marketplace",
    category: "E-commerce",
    description: "Developed a robust platform for multiple vendors to list, sell, and manage their inventory.",
    technologies: ["Next.js", "Stripe Connect", "MongoDB", "Tailwind CSS"]
  },
  {
    id: "local-store-app",
    title: "Local Grocery Delivery App",
    category: "E-commerce",
    description: "Mobile-first web app for real-time local grocery ordering with vendor dashboards and delivery tracking.",
    technologies: ["React Native", "Firebase", "Razorpay", "Mapbox"]
  },
  {
    id: "headless-shopify-pwa",
    title: "Headless Shopify PWA",
    category: "E-commerce",
    description: "Built a progressive web app using Shopify’s Storefront API and custom front-end stack.",
    technologies: ["Shopify", "React", "GraphQL", "Vercel"]
  },
  {
    id: "fraud-detection-ml-v2",
    title: "Real-Time Fraud Detection Model",
    category: "AI/ML",
    description: "Built and deployed a fraud detection pipeline using supervised machine learning techniques.",
    technologies: ["Python", "scikit-learn", "Pandas", "FastAPI"]
  },
  {
    id: "chatbot-customer-service",
    title: "AI Chatbot for Customer Support",
    category: "AI/ML",
    description: "AI-powered chatbot trained on support data to automate 70% of user queries.",
    technologies: ["TensorFlow", "Rasa", "LangChain", "GPT-3.5"]
  },
  {
    id: "recommendation-engine",
    title: "Personalized Recommendation Engine",
    category: "AI/ML",
    description: "Recommendation system for an e-learning platform using collaborative filtering.",
    technologies: ["PyTorch", "PostgreSQL", "Streamlit"]
  },
  {
    id: "local-crm-tool",
    title: "CRM for Local Service Providers",
    category: "Local Business Tools",
    description: "Simple CRM solution for small businesses to manage leads, customers, and invoices.",
    technologies: ["Laravel", "Vue.js", "MySQL"]
  },
  {
    id: "invoice-builder-app",
    title: "Invoice Generator for Freelancers",
    category: "Local Business Tools",
    description: "Lightweight web app for generating and managing invoices for local clients.",
    technologies: ["React", "Firebase", "PDFMake"]
  },
  {
    id: "booking-system-salons",
    title: "Online Booking System for Salons",
    category: "Local Business Tools",
    description: "Appointment scheduling tool for salons with SMS reminders and staff availability.",
    technologies: ["Node.js", "Twilio", "MongoDB"]
  },            
]

const categories = [
  "All",
  "Security",
  "Web Development",
  "Marketing",
  "App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Automation",
  "DevOps",
  "E-commerce",
  "AI/ML",
  "Local Business Tools",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Our Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Explore our recent projects showcasing our expertise in security, web development, and digital marketing.
        </motion.p>
      </div>

      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group backdrop-blur-xl bg-white/10 border border-white/10">
            <div className="relative overflow-hidden h-12">
  <span className="absolute top-4 right-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white flex items-center space-x-2">
    <Tag size={14} className="text-blue-100" />
    <span>{project.category}</span>
  </span>
</div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 backdrop-blur-xl px-2 py-1 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

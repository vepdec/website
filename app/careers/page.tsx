"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Users } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const jobOpenings = [
  // {
  //   id: "marketing-specialist",
  //   title: "Marketing Specialist",
  //   department: "Marketing",
  //   location: "Remote",
  //   type: "Full-time",
  //   description: "We're looking for a Marketing Specialist to help us grow our online presence and reach new clients.",
  //   responsibilities: [
  //     "Develop and implement marketing strategies to promote our services",
  //     "Create and manage content for our blog, social media, and other marketing channels",
  //     "Analyze marketing data and adjust strategies based on performance",
  //     "Collaborate with the sales team to generate leads and convert prospects",
  //     "Stay up-to-date with the latest marketing trends and best practices",
  //   ],
  //   requirements: [
  //     "Bachelor's degree in Marketing, Communications, or related field",
  //     "2+ years of experience in digital marketing",
  //     "Strong understanding of SEO, content marketing, and social media marketing",
  //     "Excellent written and verbal communication skills",
  //     "Analytical mindset with the ability to interpret data and make data-driven decisions",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work schedule and remote work options",
  //     "Health, dental, and vision insurance",
  //     "401(k) matching program",
  //     "Professional development opportunities",
  //     "Collaborative and innovative work environment",
  //   ],
  // },
  // {
  //   id: "security-analyst",
  //   title: "Security Analyst",
  //   department: "Cybersecurity",
  //   location: "Hybrid",
  //   type: "Full-time",
  //   description: "Join our cybersecurity team to help protect our clients from evolving security threats.",
  //   responsibilities: [
  //     "Conduct security assessments and vulnerability scans",
  //     "Monitor security systems and respond to security incidents",
  //     "Develop and implement security policies and procedures",
  //     "Provide security awareness training to clients and team members",
  //     "Stay informed about the latest security threats and mitigation strategies",
  //   ],
  //   requirements: [
  //     "Bachelor's degree in Cybersecurity, Computer Science, or related field",
  //     "3+ years of experience in cybersecurity",
  //     "Security certifications (e.g., CISSP, CEH, Security+)",
  //     "Strong knowledge of security tools and technologies",
  //     "Excellent problem-solving and analytical skills",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work schedule and remote work options",
  //     "Health, dental, and vision insurance",
  //     "401(k) matching program",
  //     "Professional development opportunities",
  //     "Collaborative and innovative work environment",
  //   ],
  // },
  // {
  //   id: "frontend-developer",
  //   title: "Frontend Developer",
  //   department: "Development",
  //   location: "Remote",
  //   type: "Full-time",
  //   description: "We're seeking a talented Frontend Developer to create exceptional user experiences for our clients.",
  //   responsibilities: [
  //     "Develop responsive and accessible web applications",
  //     "Collaborate with designers and backend developers",
  //     "Implement UI/UX designs with attention to detail",
  //     "Optimize applications for maximum speed and scalability",
  //     "Stay up-to-date with emerging trends and technologies",
  //   ],
  //   requirements: [
  //     "Bachelor's degree in Computer Science or related field (or equivalent experience)",
  //     "3+ years of experience in frontend development",
  //     "Proficiency in HTML, CSS, JavaScript, and modern frontend frameworks (React, Next.js)",
  //     "Experience with responsive design and cross-browser compatibility",
  //     "Strong problem-solving skills and attention to detail",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work schedule and remote work options",
  //     "Health, dental, and vision insurance",
  //     "401(k) matching program",
  //     "Professional development opportunities",
  //     "Collaborative and innovative work environment",
  //   ],
  // },
  // {
  //   id: "ux-designer",
  //   title: "UX Designer",
  //   department: "Design",
  //   location: "Remote",
  //   type: "Full-time",
  //   description: "Help us create intuitive and engaging user experiences for our clients' digital products.",
  //   responsibilities: [
  //     "Conduct user research and usability testing",
  //     "Create wireframes, prototypes, and user flows",
  //     "Collaborate with developers and stakeholders",
  //     "Design accessible and inclusive user interfaces",
  //     "Continuously improve user experiences based on feedback and data",
  //   ],
  //   requirements: [
  //     "Bachelor's degree in Design, HCI, or related field (or equivalent experience)",
  //     "3+ years of experience in UX/UI design",
  //     "Proficiency in design tools (Figma, Adobe XD, Sketch)",
  //     "Strong portfolio demonstrating UX process and problem-solving",
  //     "Excellent communication and collaboration skills",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work schedule and remote work options",
  //     "Health, dental, and vision insurance",
  //     "401(k) matching program",
  //     "Professional development opportunities",
  //     "Collaborative and innovative work environment",
  //   ],
  // },
]

// const departments = ["All", "Marketing", "Cybersecurity", "Development", "Design"]

// const careersFaqs = [
//   {
//     question: "What is your hiring process like?",
//     answer:
//       "Our hiring process typically consists of 4-5 steps: 1) Initial application review, 2) Phone screening with HR, 3) Technical assessment or skills test relevant to the position, 4) Interview with the hiring manager and team members, and 5) Final interview with leadership for senior positions. The entire process usually takes 2-3 weeks, and we strive to provide timely feedback after each stage.",
//   },
//   {
//     question: "Do you offer internship opportunities?",
//     answer:
//       "Yes, we offer internship programs for students and recent graduates in cybersecurity, web development, design, and marketing. Our internships typically run for 3-6 months and provide hands-on experience working alongside our professional teams. Many of our full-time employees started as interns with us. Internship opportunities are posted on our careers page seasonally, with summer internships being announced in early spring.",
//   },
//   {
//     question: "What benefits do you offer to employees?",
//     answer:
//       "We offer a comprehensive benefits package that includes health, dental, and vision insurance; flexible work arrangements including remote and hybrid options; paid time off and holidays; professional development stipends; 401(k) matching; performance bonuses; and a collaborative, inclusive work environment. We also provide specialized benefits like cybersecurity training certifications for relevant roles and regular team-building activities.",
//   },
//   {
//     question: "Is remote work an option for all positions?",
//     answer:
//       "Many of our positions offer remote or hybrid work options, though this varies by role and department. Some positions, particularly those requiring specialized equipment or high-security clearance, may require more on-site presence. Each job posting specifies the work arrangement (remote, hybrid, or on-site). We've built a strong remote work culture with effective collaboration tools and regular virtual team events to ensure all team members feel connected regardless of location.",
//   },
//   {
//     question: "How do you support professional development?",
//     answer:
//       "We're committed to helping our team members grow professionally. We provide an annual professional development budget for each employee to use for courses, certifications, conferences, and workshops relevant to their role. We also offer internal mentorship programs, regular lunch-and-learn sessions, and a library of resources. For technical roles, we allocate dedicated time for learning new technologies and experimenting with innovative approaches.",
//   },
// ]

// export default function CareersPage() {
//   const [selectedDepartment, setSelectedDepartment] = useState("All")
//   const [selectedJob, setSelectedJob] = useState(jobOpenings[0].id)

//   const filteredJobs =
//     selectedDepartment === "All" ? jobOpenings : jobOpenings.filter((job) => job.department === selectedDepartment)

//   return (
//     <div className="container py-20 md:py-32">
//       <div className="text-center mb-16">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
//         >
//           Join Our Team
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-blue-100 max-w-2xl mx-auto"
//         >
//           We're looking for talented individuals who are passionate about security, innovation, and excellence to join
//           our growing team.
//         </motion.p>
//       </div>

//       <div className="grid lg:grid-cols-3 gap-8 mb-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="lg:col-span-2 order-2 lg:order-1"
//         >
//           <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300">
//             <CardContent className="p-6">
//               <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
//                     <Users className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium mb-1">Collaborative Culture</h3>
//                     <p className="text-muted-foreground text-sm">
//                       Work with a team of experts who are passionate about what they do.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
//                     <CheckCircle className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium mb-1">Professional Growth</h3>
//                     <p className="text-muted-foreground text-sm">
//                       Continuous learning opportunities and career advancement paths.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
//                     <Clock className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium mb-1">Work-Life Balance</h3>
//                     <p className="text-muted-foreground text-sm">
//                       Flexible schedules and remote work options to support your lifestyle.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
//                     <Briefcase className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium mb-1">Impactful Work</h3>
//                     <p className="text-muted-foreground text-sm">
//                       Make a difference by helping clients protect their digital assets.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="order-1 lg:order-2"
//         >
//           <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300">
//             <CardContent className="p-6">
//               <h2 className="text-2xl font-bold mb-6">Our Process</h2>
//               <ol className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
//                     1
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Application Review</h3>
//                     <p className="text-muted-foreground text-sm">We review your application and resume.</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
//                     2
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Initial Interview</h3>
//                     <p className="text-muted-foreground text-sm">A conversation to get to know you better.</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
//                     3
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Technical Assessment</h3>
//                     <p className="text-muted-foreground text-sm">A skills assessment relevant to the position.</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
//                     4
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Final Interview</h3>
//                     <p className="text-muted-foreground text-sm">Meet with the team and discuss next steps.</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
//                     5
//                   </div>
//                   <div>
//                     <h3 className="font-medium">Offer</h3>
//                     <p className="text-muted-foreground text-sm">Welcome to the team!</p>
//                   </div>
//                 </li>
//               </ol>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

//         <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
//           {departments.map((department) => (
//             <Button
//               key={department}
//               variant={selectedDepartment === department ? "default" : "outline"}
//               size="sm"
//               onClick={() => setSelectedDepartment(department)}
//               className={
//                 selectedDepartment === department
//                   ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-glow transition-all duration-300"
//                   : "backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300"
//               }
//             >
//               {department}
//             </Button>
//           ))}
//         </div>

//         {filteredJobs.length > 0 ? (
//           <Tabs value={selectedJob} onValueChange={setSelectedJob} className="space-y-8">
//             <TabsList className="backdrop-blur-xl bg-white/10 border border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto p-1 overflow-x-auto flex-wrap">
//               {filteredJobs.map((job) => (
//                 <TabsTrigger
//                   key={job.id}
//                   value={job.id}
//                   className="py-3 data-[state=active]:bg-white/20 data-[state=active]:text-white transition-all duration-300"
//                 >
//                   {job.title}
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             {filteredJobs.map((job) => (
//               <TabsContent key={job.id} value={job.id} className="space-y-8">
//                 <Card className="backdrop-blur-xl bg-white/10 border border-white/10 transition-all duration-300">
//                   <CardContent className="p-6">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                       <div>
//                         <h3 className="text-2xl font-bold">{job.title}</h3>
//                         <p className="text-blue-400">{job.department}</p>
//                       </div>
//                       <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
//                         <div className="flex items-center gap-1 text-sm backdrop-blur-xl bg-white/10 border border-white/10 rounded-full px-3 py-1">
//                           <MapPin className="h-3 w-3" />
//                           {job.location}
//                         </div>
//                         <div className="flex items-center gap-1 text-sm backdrop-blur-xl bg-white/10 border border-white/10 rounded-full px-3 py-1">
//                           <Clock className="h-3 w-3" />
//                           {job.type}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-6">
//                       <div>
//                         <h4 className="text-lg font-semibold mb-2">Job Description</h4>
//                         <p className="text-muted-foreground">{job.description}</p>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
//                         <ul className="space-y-2">
//                           {job.responsibilities.map((item, index) => (
//                             <li key={index} className="flex items-start gap-2">
//                               <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-semibold mb-2">Requirements</h4>
//                         <ul className="space-y-2">
//                           {job.requirements.map((item, index) => (
//                             <li key={index} className="flex items-start gap-2">
//                               <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-semibold mb-2">Benefits</h4>
//                         <ul className="space-y-2">
//                           {job.benefits.map((item, index) => (
//                             <li key={index} className="flex items-start gap-2">
//                               <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="pt-4">
//                         <Button
//                           asChild
//                           className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 group"
//                         >
//                           <Link href="/careers/apply" className="flex items-center gap-2">
//                             Apply Now
//                             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                           </Link>
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             ))}
//           </Tabs>
//         ) : (
//           <div className="text-center py-12">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 max-w-lg mx-auto"
//             >
//               <h3 className="text-xl font-bold mb-2">No positions available</h3>
//               <p className="text-muted-foreground mb-4">
//                 We don't have any open positions in this department at the moment. Please check back later or explore
//                 other departments.
//               </p>
//               <Button
//                 onClick={() => setSelectedDepartment("All")}
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300"
//               >
//                 View All Departments
//               </Button>
//             </motion.div>
//           </div>
//         )}
//       </motion.div>

//       {/* Careers FAQs Section */}
//       <FAQSection
//         title="Careers FAQs"
//         description="Common questions about working with us"
//         faqs={careersFaqs}
//         className="mt-20"
//       />
//     </div>
//   )
// }



const departments = ["All", "Marketing", "Cybersecurity", "Development", "Design"]

const careersFaqs = [
  {
    question: "What is your hiring process like?",
    answer:
      "Our hiring process typically consists of 4-5 steps: 1) Initial application review, 2) Phone screening with HR, 3) Technical assessment or skills test relevant to the position, 4) Interview with the hiring manager and team members, and 5) Final interview with leadership for senior positions. The entire process usually takes 2-3 weeks, and we strive to provide timely feedback after each stage.",
  },
  {
    question: "Do you offer internship opportunities?",
    answer:
      "Yes, we offer internship programs for students and recent graduates in cybersecurity, web development, design, and marketing. Our internships typically run for 3-6 months and provide hands-on experience working alongside our professional teams. Many of our full-time employees started as interns with us. Internship opportunities are posted on our careers page seasonally, with summer internships being announced in early spring.",
  },
  {
    question: "What benefits do you offer to employees?",
    answer:
      "We offer a comprehensive benefits package that includes health, dental, and vision insurance; flexible work arrangements including remote and hybrid options; paid time off and holidays; professional development stipends; 401(k) matching; performance bonuses; and a collaborative, inclusive work environment. We also provide specialized benefits like cybersecurity training certifications for relevant roles and regular team-building activities.",
  },
  {
    question: "Is remote work an option for all positions?",
    answer:
      "Many of our positions offer remote or hybrid work options, though this varies by role and department. Some positions, particularly those requiring specialized equipment or high-security clearance, may require more on-site presence. Each job posting specifies the work arrangement (remote, hybrid, or on-site). We've built a strong remote work culture with effective collaboration tools and regular virtual team events to ensure all team members feel connected regardless of location.",
  },
  {
    question: "How do you support professional development?",
    answer:
      "We're committed to helping our team members grow professionally. We provide an annual professional development budget for each employee to use for courses, certifications, conferences, and workshops relevant to their role. We also offer internal mentorship programs, regular lunch-and-learn sessions, and a library of resources. For technical roles, we allocate dedicated time for learning new technologies and experimenting with innovative approaches.",
  },
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          We're looking for talented individuals who are passionate about security, innovation, and excellence to join
          our growing team.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 order-2 lg:order-1"
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Collaborative Culture</h3>
                    <p className="text-muted-foreground text-sm">
                      Work with a team of experts who are passionate about what they do.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Professional Growth</h3>
                    <p className="text-muted-foreground text-sm">
                      Continuous learning opportunities and career advancement paths.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Work-Life Balance</h3>
                    <p className="text-muted-foreground text-sm">
                      Flexible schedules and remote work options to support your lifestyle.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Impactful Work</h3>
                    <p className="text-muted-foreground text-sm">
                      Make a difference by helping clients protect their digital assets.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="order-1 lg:order-2"
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Application Review</h3>
                    <p className="text-muted-foreground text-sm">We review your application and resume.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Initial Interview</h3>
                    <p className="text-muted-foreground text-sm">A conversation to get to know you better.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Technical Assessment</h3>
                    <p className="text-muted-foreground text-sm">A skills assessment relevant to the position.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Final Interview</h3>
                    <p className="text-muted-foreground text-sm">Meet with the team and discuss next steps.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-medium shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium">Offer</h3>
                    <p className="text-muted-foreground text-sm">Welcome to the team!</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* No Job Opening Code starts from here */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        
        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        <div className="text-center py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 max-w-lg mx-auto"
          >
            <h3 className="text-xl font-bold mb-2">No positions are available at this time.</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We're not currently hiring, but feel free to check back later. You can also subscribe to our job alerts to be
              notified when we post new opportunities.
            </p>
            <Button className="w-full" variant="outline">
              Subscribe for Job Alerts
            </Button>
          </motion.div>
        </div>
      </motion.div>
      {/* No Job Opening Code ends here */}
    </div>
  )
}

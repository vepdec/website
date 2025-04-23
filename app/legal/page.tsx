"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileSignature,
  BookOpenCheck,
  ShieldCheck,
  Gavel,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import FAQSection from "@/components/sections/faq-section";

const legalFaqs = [
  {
    question: "What laws govern VepDec’s services?",
    answer:
      "Our services are primarily governed by the laws of Pakistan, including PECA 2016, Contract Act 1872, Electronic Transactions Ordinance 2002, and relevant international laws where applicable.",
  },
  {
    question: "Does VepDec offer NDAs or legal contracts?",
    answer:
      "Yes. We offer standard Non-Disclosure Agreements (NDAs), Service Level Agreements (SLAs), and other contracts upon project initiation. Custom contracts can also be arranged upon request.",
  },
  {
    question: "How does VepDec ensure data compliance?",
    answer:
      "We comply with PECA 2016, GDPR (for EU clients), and best global practices for information security. All customer data is encrypted and securely stored. We do not share or sell data to third parties.",
  },
  {
    question: "Can clients request a legal audit or due diligence report?",
    answer:
      "Yes, upon formal request and approval, VepDec can provide a due diligence package including certifications, contract templates, compliance policies, and audit trails for enterprise clients.",
  },
];

export default function LegalPage() {
  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center"
        >
          <ShieldCheck className="h-10 w-10 text-blue-400" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Legal Information
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Full legal policies, compliance details, and regulation adherence.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpenCheck className="h-6 w-6 text-blue-400" />
                Legal Framework
              </h2>
              <p className="text-blue-100 mb-4">
                VepDec operates under the jurisdiction of the Islamic Republic of Pakistan and abides by national and
                international legal standards, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>Pakistan Electronic Crimes Act (PECA 2016)</li>
                <li>Contract Act of 1872</li>
                <li>Electronic Transactions Ordinance 2002</li>
                <li>Copyright Ordinance 1962</li>
                <li>Consumer Protection Laws of Pakistan</li>
                <li>General Data Protection Regulation (GDPR) – where applicable</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileSignature className="h-6 w-6 text-blue-400" />
                Contracts & Agreements
              </h2>
              <p className="text-blue-100 mb-4">
                VepDec offers binding legal documents for client engagement including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>Non-Disclosure Agreements (NDAs)</li>
                <li>Service Level Agreements (SLAs)</li>
                <li>Memorandums of Understanding (MoUs)</li>
                <li>Custom Project Contracts</li>
                <li>Maintenance and Support Agreements</li>
              </ul>
              <p className="text-blue-100 mt-4">
                All legal contracts are drafted in compliance with Pakistani law and can be modified to suit client
                jurisdictions if needed.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Gavel className="h-6 w-6 text-blue-400" />
                Compliance & Liability
              </h2>
              <p className="text-blue-100 mb-4">
                VepDec assumes responsibility for the legality and security of its services. Any breach of
                confidentiality, data misuse, or unauthorized access will be handled under full legal accountability.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>Encrypted communications and secure data storage</li>
                <li>Security assessments conducted quarterly</li>
                <li>Real-time monitoring of systems</li>
                <li>Client reports available upon request</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-400" />
                Contact Us
              </h2>
              <p className="text-blue-100 mb-4">
                For any inquiries, legal notices, or document requests, contact our legal team:
              </p>
              <address className="not-italic text-blue-100 space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:support@vepdec.com"
                    className=" hover:text-blue-400"
                  >
                    support@vepdec.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a
                    href="wa.me/+923333720166"
                    className=" hover:text-blue-400"
                  >
                    +92 333 3720166
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <span>
                    VepDec Office,
                    <br />
                    Karachi, Sindh,
                    <br />
                    Pakistan
                  </span>
                </div>
              </address>
              <p className="text-blue-100 mt-4">Last updated: April 8, 2025</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <FAQSection
        title="Legal & Compliance FAQs"
        description="Explore common questions about our legal responsibilities and policies."
        faqs={legalFaqs}
        className="mt-16"
      />
    </div>
  );
}

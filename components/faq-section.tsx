'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity. A simple website takes 4-6 weeks, while larger applications take 8-16 weeks. We provide detailed timelines after our discovery phase.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes! All our projects include support. The duration depends on your plan. We offer monthly maintenance packages for ongoing optimization and updates.',
  },
  {
    question: 'Can you work with my existing technology stack?',
    answer:
      'Absolutely. We work with most technologies and can integrate with existing systems. During consultation, we&apos;ll assess your current setup and recommend the best approach.',
  },
  {
    question: 'What about SEO and performance?',
    answer:
      'SEO and performance optimization are built into every project. We follow best practices for page speed, mobile responsiveness, and search engine visibility.',
  },
  {
    question: 'Do you offer hosting solutions?',
    answer:
      'We recommend hosting solutions based on your needs and can help set you up. We work with providers like Vercel, AWS, and others to find the best fit.',
  },
  {
    question: 'What if I need to make changes after launch?',
    answer:
      'We include revision rounds during development. After launch, we offer maintenance packages that cover updates and modifications at reasonable rates.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Can&apos;t find the answer you&apos;re looking for? Reach out and we&apos;ll help.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full"
              >
                <div className="p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/30 transition-all text-left group">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === index ? 1 : 0,
                      height: openIndex === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 p-8 rounded-xl border border-primary/30 bg-primary/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Get in touch with our team, we&apos;re here to help.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

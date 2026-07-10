'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into understanding your business, goals, and target audience to create a solid strategy.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Beautiful wireframes and designs that bring your vision to life. We iterate until it&apos;s perfect.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Our team builds your solution using the latest technologies, best practices, and clean code.',
  },
  {
    number: '04',
    title: 'Testing & QA',
    description:
      'Rigorous testing across all devices and browsers. We catch bugs before your users do.',
  },
  {
    number: '05',
    title: 'Launch & Deploy',
    description:
      'Smooth deployment with zero downtime. We monitor everything to ensure a successful launch.',
  },
  {
    number: '06',
    title: 'Support & Growth',
    description:
      'Ongoing support, updates, and optimizations. Your success is our success.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven methodology that delivers results, every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex gap-8 items-start">
                {/* Step Number & Connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-8">
                  <div className="p-6 rounded-xl border border-border/50 bg-card/50 group-hover:bg-card/80 group-hover:border-primary/50 transition-all">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Guaranteed delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

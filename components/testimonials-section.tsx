'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Anderson',
    role: 'CEO, TechStart Co',
    content:
      'Corvin Web transformed our online presence. Our conversion rate increased by 150% within the first three months. Highly recommend!',
    avatar: '🧑‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Digital Ventures',
    content:
      'The team is professional, responsive, and delivers exactly what they promise. They built our entire platform and it runs flawlessly.',
    avatar: '👨‍💻',
  },
  {
    name: 'Jessica Rodriguez',
    role: 'Marketing Director, Growth Inc',
    content:
      'We partnered with Corvin Web for our redesign and the results speak for themselves. Best investment we made this year.',
    avatar: '👩‍💼',
  },
  {
    name: 'David Thompson',
    role: 'CTO, Innovation Labs',
    content:
      'Exceptional technical expertise combined with great communication. They understood our complex requirements and delivered beyond expectations.',
    avatar: '👨‍🔬',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
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
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We measure success by our client satisfaction and the results we deliver.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

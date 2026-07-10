'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Palette,
  Zap,
  BarChart3,
  Shield,
  Users,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Custom-built web applications using cutting-edge technologies. Scalable, secure, and built for performance.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful interfaces that users love. We combine aesthetics with usability for maximum impact.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Lightning-fast sites that load in milliseconds. SEO-optimized and conversion-focused.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Strategy',
    description:
      'Data-driven insights to make informed decisions. We measure what matters for your business.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description:
      'Enterprise-grade security built in from day one. GDPR, CCPA, and compliance standards covered.',
  },
  {
    icon: Users,
    title: 'Support & Maintenance',
    description:
      'Ongoing support and updates to keep your site running smoothly. We&apos;re here when you need us.',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
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
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            What We Do Best
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive web solutions designed to solve your business challenges and accelerate your growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 inline-flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-sm font-semibold">Learn more</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

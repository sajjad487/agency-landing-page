'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Development',
    description: 'Built a high-converting e-commerce platform with real-time inventory management.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Design & Development',
    description: 'Complete redesign and rebuild of a project management SaaS with 50k+ users.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Mobile App',
    category: 'Full Stack',
    description: 'Cross-platform mobile application with real-time notifications and offline support.',
    tags: ['React Native', 'Firebase', 'Redux'],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Marketing Website',
    category: 'Design & Development',
    description: 'High-performance marketing site that increased conversions by 150%.',
    tags: ['Next.js', 'Framer Motion', 'CMS'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Analytics Platform',
    category: 'Development',
    description: 'Real-time analytics dashboard processing millions of data points daily.',
    tags: ['React', 'D3.js', 'WebSockets'],
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    title: 'Community Portal',
    category: 'Full Stack',
    description: 'Social platform connecting 100k+ users with advanced matching algorithm.',
    tags: ['Node.js', 'MongoDB', 'Socket.io'],
    gradient: 'from-pink-500/20 to-purple-500/20',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background">
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
            Case Studies
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Work We&apos;re Proud Of
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to completion, here&apos;s a selection of projects we&apos;ve delivered.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="h-full rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/50 hover:bg-card/80">
                {/* Image Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['0%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all font-semibold group"
            onClick={() => {
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

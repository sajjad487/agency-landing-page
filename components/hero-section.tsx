'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background via-background to-card/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary">
                🚀 Welcome to the future of web
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-balance">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Digital Solutions That Drive Growth
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              We craft beautiful, high-performance web experiences that convert visitors into customers. From concept to launch, we&apos;ve got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2 rounded-lg"
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/30 text-foreground hover:bg-primary/10 font-semibold rounded-lg"
                  onClick={() => {
                    const element = document.querySelector('#portfolio')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View Our Work
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '8+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 backdrop-blur-sm overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block mb-4">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <span className="text-3xl font-bold text-primary-foreground">C</span>
                    </motion.div>
                  </div>
                  <p className="text-primary font-semibold">Corvin Web</p>
                  <p className="text-muted-foreground text-sm mt-2">Web Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

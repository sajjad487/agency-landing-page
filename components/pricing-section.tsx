'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: '$2,999',
    period: 'one-time',
    description: 'Perfect for small projects and MVPs',
    features: [
      'Single page or small site',
      'Responsive design',
      'Basic SEO',
      'Up to 2 revisions',
      '1 month support',
      'Performance optimization',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$7,999',
    period: 'one-time',
    description: 'Ideal for growing businesses',
    features: [
      'Multi-page website',
      'Full responsive design',
      'Advanced SEO',
      'Unlimited revisions',
      '3 months support',
      'CMS integration',
      'Analytics setup',
      'E-commerce ready',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'let\'s talk',
    description: 'For large-scale applications',
    features: [
      'Full custom application',
      'Advanced features',
      'API integrations',
      'Dedicated support',
      '12 months maintenance',
      'Scalability planning',
      'Team training',
      'Priority updates',
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
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
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 ring-1 ring-primary/20 scale-105 md:scale-100 lg:scale-105'
                  : 'border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/30'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="px-4 pt-4">
                  <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-xs font-semibold text-primary">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {plan.period === 'one-time' ? 'one-time investment' : plan.period}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 font-semibold rounded-lg transition-all ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border border-primary/30 text-foreground hover:bg-primary/10'
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get Started
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            All plans include hosting consultation, deployment, and initial analytics setup.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

interface StatProps {
  value: number
  suffix?: string
  label: string
  description: string
}

function Counter({ value, suffix = '', label, description }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="font-bold text-dark mt-1">{label}</div>
      <div className="text-muted text-sm mt-1">{description}</div>
    </div>
  )
}

export default function StatsCounter() {
  const stats = [
    { value: 500, suffix: '+', label: 'Réalisations', description: 'installations réussies' },
    { value: 10, suffix: '+', label: "Ans d'expérience", description: 'depuis 2015' },
    { value: 98, suffix: '%', label: 'Satisfaction', description: 'clients satisfaits' },
    { value: 10, suffix: ' ans', label: 'Garantie', description: 'sur tous nos produits' },
  ]

  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <Counter key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

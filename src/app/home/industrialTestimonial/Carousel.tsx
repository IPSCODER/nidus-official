'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote:
      'Nidus has been an invaluable partner in our digital transformation journey. Their expertise and commitment to excellence are unmatched.',
    author: 'Manish Kumar',
    title: 'CTO, Acelero Learning',
  },
  {
    id: 2,
    quote:
      'Nidus has been our trusted technology partner for years. Their expertise and dedication have transformed our software solution delivery, making us more efficient and secure. Their team goes above and beyond to ensure our success.',
    author: 'Sid Karkare',
    title: 'Director IT, CEVA Logistics',
  },
  // Add more if needed
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, 6000)
    }
    return () => clearTimeout(timeoutRef.current!)
  }, [current, isPaused])

  return (
    <section className="relative w-full pb-5 md:py-10 px-2 md:px-20 md:text-center">

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed text-surface">
              “{testimonials[current].quote}”
            </p>
            <p className="text-lg font-semibold text-primary italic">
              - {testimonials[current].author}, {testimonials[current].title}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex md:justify-center text-white md:items-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="bg-surface hover:bg-gray-200 p-2 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="bg-surface hover:bg-gray-200 p-2 rounded-full"
            aria-label="Toggle Autoplay"
          >
            {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
          </button>
          <button
            onClick={nextSlide}
            className="bg-surface hover:bg-gray-200 p-2 rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination */}
        <div className="mt-4 text-sm text-gray-500">
          {current + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  )
}

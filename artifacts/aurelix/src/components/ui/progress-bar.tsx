import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'wouter'
import { PAGE_TRANSITION_DURATION_MS } from '@/lib/page-transition'

export function ProgressBar() {
  const [location] = useLocation()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number | null>(null)
  const prevLocation = useRef(location)

  useEffect(() => {
    if (location === prevLocation.current) return
    prevLocation.current = location

    if (timerRef.current) clearTimeout(timerRef.current)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    setProgress(0)
    setVisible(true)

    let start: number | null = null
    // Exit + enter transition: 2 × PAGE_TRANSITION_DURATION_MS
    const totalDuration = PAGE_TRANSITION_DURATION_MS * 2

    const tick = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const raw = elapsed / totalDuration

      const eased = raw < 0.85
        ? raw / 0.85 * 0.9
        : 0.9 + (raw - 0.85) / 0.15 * 0.08

      setProgress(Math.min(eased, 0.98))

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    timerRef.current = setTimeout(() => {
      setProgress(1)
      timerRef.current = setTimeout(() => {
        setVisible(false)
        setProgress(0)
      }, 300)
    }, totalDuration)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [location])

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full transition-all ease-out"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, oklch(0.65 0.16 85), oklch(0.85 0.12 85), oklch(0.78 0.14 85))',
          boxShadow: '0 0 8px oklch(0.78 0.14 85 / 0.6)',
          transitionDuration: progress === 1 ? '200ms' : '80ms',
        }}
      />
    </div>
  )
}

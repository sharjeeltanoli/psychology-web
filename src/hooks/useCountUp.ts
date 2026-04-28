import { useEffect, useState, useRef } from "react"

export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const update = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out effect
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(update)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(update)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
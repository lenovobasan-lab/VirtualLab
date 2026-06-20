"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  /** ms per character */
  speed?: number
  /** ms to wait before typing starts */
  startDelay?: number
  className?: string
}

export default function TypewriterText({
  text,
  speed = 28,
  startDelay = 300,
  className = "",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let typingId: ReturnType<typeof setInterval>

    const startId = setTimeout(() => {
      typingId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(typingId)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startId)
      clearInterval(typingId)
    }
  }, [text, speed, startDelay])

  return (
    <span className={className}>
      {displayed}
      <span
        aria-hidden="true"
        className={`inline-block w-[2px] -mb-0.5 h-[1em] ml-0.5 bg-primary align-middle ${
          done ? "animate-pulse" : ""
        }`}
      />
    </span>
  )
}

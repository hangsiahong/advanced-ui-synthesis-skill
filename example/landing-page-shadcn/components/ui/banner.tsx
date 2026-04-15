"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number
  strokeWidth?: number
  patternOffset?: [number, number]
  className?: string
}) {
  const id = React.useId()

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-white/5",
        className,
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  )
}

interface BannerProps {
  show: boolean
  onHide: () => void
  icon?: React.ReactNode
  title: React.ReactNode
  action: {
    label: string
    onClick: () => void
  }
  learnMoreUrl?: string
}

export function Banner({
  show,
  onHide,
  icon,
  title,
  action,
  learnMoreUrl,
}: BannerProps) {
  if (!show) return null

  return (
    <div className="relative isolate flex flex-col justify-between gap-3 overflow-hidden rounded-full border border-claw-red/20 bg-white/5 backdrop-blur-xl py-2 pl-4 pr-12 sm:flex-row sm:items-center">
      <Grid
        cellSize={13}
        patternOffset={[0, -1]}
        className="text-claw-red/20 mix-blend-overlay [mask-image:linear-gradient(to_right,black,transparent)] md:[mask-image:linear-gradient(to_right,black_60%,transparent)]"
      />

      <div className="flex items-center gap-3 relative z-10">
        {icon && (
          <div className="hidden rounded-full border border-white/10 bg-white/5 p-1 sm:block">
            {icon}
          </div>
        )}
        <p className="text-xs md:text-sm text-white/80">
          {title}
          {learnMoreUrl && (
            <>
              {" "}
              <a
                href={learnMoreUrl}
                target="_blank"
                className="text-white underline transition-colors hover:text-claw-red"
              >
                Learn more
              </a>
            </>
          )}
        </p>
      </div>

      <div className="flex items-center sm:-my-1 relative z-10">
        <button
          type="button"
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] md:text-xs font-bold text-white transition-colors hover:bg-claw-red hover:text-white"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      </div>

      <button
        type="button"
        className="absolute inset-y-0 right-3 p-1 text-white/40 hover:text-white transition-colors"
        onClick={onHide}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

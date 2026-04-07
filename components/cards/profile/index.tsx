'use client'

import { clsx } from 'clsx'
import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Image } from '~/components/ui/image'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'
import { ProfileCardInfo } from './profile-info'

type ProfileCardVariant = 'spotlight' | 'glass' | 'spotlight-border'

interface ProfileCardProps {
  variant?: ProfileCardVariant
}

export function ProfileCard({ variant = 'spotlight' }: ProfileCardProps) {
  let ref = useRef<HTMLDivElement>(null)
  let [style, setStyle] = useState<React.CSSProperties>({})
  let [isHovered, setIsHovered] = useState(false)
  let [reducedMotion, setReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    let mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    let handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  let onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current || window.innerWidth < 1280 || reducedMotion) return

      let { clientX, clientY } = e
      let { x, y } = ref.current.getBoundingClientRect()
      let mouseX = clientX - x
      let mouseY = clientY - y

      // Update spotlight position for spotlight and spotlight-border variants
      if (variant === 'spotlight' || variant === 'spotlight-border') {
        setStyle({
          '--spotX': `${mouseX}px`,
          '--spotY': `${mouseY}px`,
        } as React.CSSProperties)
      }
    },
    [variant, reducedMotion],
  )

  let onMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  let onMouseLeave = useCallback(() => {
    setIsHovered(false)
    setStyle({})
  }, [])

  useEffect(() => {
    let { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseenter', onMouseEnter)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseenter', onMouseEnter)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove, onMouseEnter])

  // Determine wrapper classes based on variant
  let wrapperClasses = clsx(
    'relative z-10 mb-8 scale-100 transition-all ease-out md:mb-0',
    !reducedMotion && 'duration-200 xl:hover:scale-[1.15]',
    reducedMotion && 'duration-0',
    'hover:z-50',
  )

  // Glass variant: add hover lift
  let glassHoverStyle: React.CSSProperties =
    variant === 'glass' && isHovered && !reducedMotion
      ? { transform: 'translateY(-4px)' }
      : {}

  // Combine styles for the card
  let cardStyle: React.CSSProperties = {
    ...style,
    ...glassHoverStyle,
    transition: reducedMotion ? 'none' : undefined,
  }

  return (
    <div className={wrapperClasses} ref={ref}>
      {/* Conic border for spotlight-border variant - positioned outside card to avoid overflow clip */}
      {variant === 'spotlight-border' && (
        <div
          className={clsx(
            'pointer-events-none absolute -inset-[3px] rounded-xl',
            !reducedMotion && 'transition-opacity duration-300',
            isHovered && !reducedMotion && 'animate-spin-border opacity-100',
            (!isHovered || reducedMotion) && 'opacity-70',
          )}
          style={{
            background: `conic-gradient(
              from var(--border-angle, 0deg),
              #86efac,
              #3b82f6,
              #a855f6,
              #86efac
            )`,
          }}
        />
      )}

      <div
        style={cardStyle}
        className={clsx(
          'relative flex flex-col overflow-hidden transition-all ease-out md:rounded-lg',
          !reducedMotion && 'duration-200',
          reducedMotion && 'duration-0',
          // Base styles
          'outline-1 outline-gray-100 outline-solid dark:outline-gray-600',
          // Glass variant styles
          variant === 'glass' && [
            'bg-white/70 dark:bg-dark/80',
            'backdrop-blur-[8px]',
            'supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-dark/80',
            // Fallback for browsers without backdrop-filter
            'not-supports-[backdrop-filter]:bg-white not-supports-[backdrop-filter]:dark:bg-dark',
            isHovered &&
              !reducedMotion &&
              'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]',
          ],
          // Non-glass variants use original shadow
          variant !== 'glass' && [
            'shadow-demure dark:bg-dark dark:shadow-mondegreen bg-white',
          ],
        )}
      >
        {/* Spotlight gradient overlay */}
        {(variant === 'spotlight' || variant === 'spotlight-border') && (
          <div
            className={clsx(
              'pointer-events-none absolute inset-0 z-10',
              !reducedMotion && 'transition-opacity duration-300',
              isHovered && !reducedMotion ? 'opacity-100' : 'opacity-0',
            )}
            style={{
              background: `radial-gradient(
                circle at var(--spotX, 50%) var(--spotY, 50%),
                rgba(134, 239, 172, 0.15),
                rgba(59, 130, 246, 0.1) 40%,
                transparent 70%
              )`,
            }}
          />
        )}

        <Image
          src={SITE_METADATA.siteLogo}
          alt={SITE_METADATA.title}
          width={550}
          height={350}
          style={{
            objectPosition: '50% 15%',
            aspectRatio: '383/240',
          }}
          loading="eager"
        />
        <SpotifyNowPlaying
          className={clsx([
            'bg-gray-900 px-3 py-1.5 xl:px-5',
            '[--song-color:var(--color-gray-200)]',
            '[--artist-color:var(--color-gray-400)]',
          ])}
        />
        <ProfileCardInfo />
        <span className="h-1.5 bg-linear-to-r from-green-300 via-blue-500 to-purple-600" />
      </div>
    </div>
  )
}

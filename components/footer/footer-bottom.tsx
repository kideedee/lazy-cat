'use client'

import { clsx } from 'clsx'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'

export function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
      <SpotifyNowPlaying
        className="w-full justify-center truncate [--artist-color:var(--color-gray-500)] md:max-w-[50%] md:justify-start"
        songEffect="underline"
        showCover
      />
      <span className="text-gray-500 dark:text-gray-400">07/2026</span>
    </div>
  )
}

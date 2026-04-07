'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>I'm a Backend Developer based in Ha Noi, Viet Nam.</li>
        <li>I'm currently pursuing my Master's in Computer Science.</li>
        <li>I love vibe coding - building things with good music on.</li>
        <li>I work mostly with Node.js and Go.</li>
        <li>I'm a learner, builder, and freedom seeker.</li>
        <li>
          I love watching and playing soccer. <Twemoji emoji="soccer-ball" />
        </li>
        <li>
          I'm a bookworm - always reading something new.{' '}
          <Twemoji emoji="books" />
        </li>
        <li>
          I'm into custom keyboards - the thock is real.{' '}
          <Twemoji emoji="keyboard" />
        </li>
        <li>Code by day, blog by night.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

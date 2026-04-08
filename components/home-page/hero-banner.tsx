import Image from 'next/image'
import { Link } from '~/components/ui/link'

export function HeroBanner() {
  return (
    <Link href="/" className="block">
      <div className="relative h-[35vh] w-full bg-yellow-500 md:h-[40vh]">
        <Image
          src="/static/images/banners/lazy-cat-banner.png"
          alt="Lazy Cat Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </Link>
  )
}

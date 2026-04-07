import { BriefcaseBusiness, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Fragment } from 'react'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'
import XIcon from '~/icons/x.svg'

function getAccountHandle(url = '') {
  let lastPart = url.split('/').pop()
  if (lastPart) {
    return lastPart
  }
  return url
}

const SOCIALS = [
  {
    platform: 'github',
    handle: getAccountHandle(SITE_METADATA.github),
    href: SITE_METADATA.github,
    Icon: () => <Github size={20} strokeWidth={1.5} aria-hidden="true" />,
    umamiEvent: 'profile-card-github',
  },
  {
    platform: 'linkedin',
    handle: getAccountHandle(SITE_METADATA.linkedin),
    href: SITE_METADATA.linkedin,
    Icon: () => <Linkedin size={20} strokeWidth={1.5} aria-hidden="true" />,
    umamiEvent: 'profile-card-linkedin',
  },
  {
    platform: 'x',
    handle: getAccountHandle(SITE_METADATA.x),
    href: SITE_METADATA.x,
    Icon: () => (
      <XIcon
        className="h-4 w-4"
        fill="#fff"
        viewBox="0 0 1200 1227"
        aria-hidden="true"
      />
    ),
    umamiEvent: 'profile-card-x',
  },
]

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 md:block md:px-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        lazy-cat
      </h3>
      <h5 className="py-2 text-gray-500 dark:text-gray-400">
        back-end engineer
      </h5>
      <div className="mt-4 mb-2 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <BriefcaseBusiness strokeWidth={1.5} size={20} />
          <p className="px-2">Debugging with 9 lives</p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <MapPin strokeWidth={1.5} size={20} />
          <p className="px-2">
            Ha Noi,
            <span className="absolute ml-1 inline-flex pt-px">
              <Twemoji emoji="flag-vietnam" />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Mail strokeWidth={1.5} size={20} />
          <a
            className="px-2 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            href={`mailto:${SITE_METADATA.email}`}
          >
            {SITE_METADATA.email}
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
          {SOCIALS.map(({ platform, handle, href, Icon, umamiEvent }, idx) => (
            <Fragment key={platform}>
              <a
                target="_blank"
                href={href}
                rel="noreferrer"
                className="flex items-center rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                data-umami-event={umamiEvent}
              >
                <Icon />
                <span className="ml-px text-gray-500">/</span>
                <span className="ml-0.5">{handle}</span>
              </a>
              {idx !== SOCIALS.length - 1 && (
                <span className="text-gray-400 dark:text-gray-500">|</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

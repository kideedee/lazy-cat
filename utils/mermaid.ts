import { SITE_METADATA } from '~/data/site-metadata'

export function isMermaidEnabled(): boolean {
  const envVar = process.env.NEXT_PUBLIC_ENABLE_MERMAID

  if (envVar !== undefined) {
    return envVar === 'true'
  }

  return SITE_METADATA.features?.mermaid ?? true
}

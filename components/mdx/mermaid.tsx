'use client'

import { useEffect, useId, useState } from 'react'

interface MermaidProps {
  code: string
  enabled: boolean
}

type RenderState =
  | { status: 'loading' }
  | { status: 'success'; svg: string }
  | { status: 'error'; message: string }
  | { status: 'disabled' }

let mermaidInitialized = false

export function Mermaid({ code, enabled }: MermaidProps) {
  let id = useId()
  let [state, setState] = useState<RenderState>(
    enabled ? { status: 'loading' } : { status: 'disabled' },
  )

  useEffect(() => {
    if (!enabled) {
      setState({ status: 'disabled' })
      return
    }

    let cancelled = false

    async function render() {
      try {
        let mermaid = (await import('mermaid')).default

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
          })
          mermaidInitialized = true
        }

        let elementId = `mermaid-${id.replace(/:/g, '-')}`
        let { svg } = await mermaid.render(elementId, code)

        if (!cancelled) {
          setState({ status: 'success', svg })
        }
      } catch (error) {
        if (!cancelled) {
          let message = error instanceof Error ? error.message : 'Unknown error'
          setState({ status: 'error', message })
        }
      }
    }

    render()

    return () => {
      cancelled = true
    }
  }, [code, enabled, id])

  if (state.status === 'disabled') {
    return (
      <div className="relative overflow-hidden rounded-lg border border-gray-50 dark:border-gray-800">
        <div className="bg-amber-50 dark:bg-amber-900/20 px-3 py-1.5 text-sm text-amber-700 dark:text-amber-300 border-b border-amber-200 dark:border-amber-800">
          Mermaid diagrams disabled
        </div>
        <pre className="bg-solarized-light text-code-block dark:bg-github-dark-dimmed normal-case">
          <code className="language-mermaid">{code}</code>
        </pre>
      </div>
    )
  }

  if (state.status === 'loading') {
    return (
      <div className="relative overflow-hidden rounded-lg border border-gray-50 dark:border-gray-800">
        <pre className="bg-solarized-light text-code-block dark:bg-github-dark-dimmed normal-case">
          <code className="language-mermaid">{code}</code>
        </pre>
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="relative overflow-hidden rounded-lg border border-red-200 dark:border-red-800">
        <div className="bg-red-50 dark:bg-red-900/20 px-3 py-1.5 text-sm text-red-700 dark:text-red-300 border-b border-red-200 dark:border-red-800">
          Mermaid error: {state.message}
        </div>
        <pre className="bg-solarized-light text-code-block dark:bg-github-dark-dimmed normal-case">
          <code className="language-mermaid">{code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div
      className="mermaid-diagram my-4 flex justify-center overflow-x-auto"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: mermaid SVG output is trusted
      dangerouslySetInnerHTML={{ __html: state.svg }}
    />
  )
}

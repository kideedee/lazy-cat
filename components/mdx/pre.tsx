'use client'

import { type ReactElement, type ReactNode, isValidElement } from 'react'
import { isMermaidEnabled } from '~/utils/mermaid'
import { CopyCodeButton } from './copy-code-button'
import { Mermaid } from './mermaid'

interface CodeProps {
  className?: string
  children?: ReactNode
}

function getCodeContent(children: ReactNode): string {
  if (typeof children === 'string') return children
  if (isValidElement(children)) {
    let element = children as ReactElement<{ children?: ReactNode }>
    return getCodeContent(element.props.children)
  }
  if (Array.isArray(children)) {
    return children.map(getCodeContent).join('')
  }
  return ''
}

export function Pre({ children }: { children: ReactNode }) {
  if (isValidElement(children)) {
    let codeElement = children as ReactElement<CodeProps>
    let className = codeElement.props.className || ''

    if (className.includes('language-mermaid')) {
      let code = getCodeContent(codeElement.props.children).trim()
      let enabled = isMermaidEnabled()
      return <Mermaid code={code} enabled={enabled} />
    }
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-50 dark:border-gray-800">
      <CopyCodeButton
        parent="code-block"
        className="absolute top-3 right-3 hidden lg:inline-block"
      />
      <pre className="bg-solarized-light text-code-block dark:bg-github-dark-dimmed normal-case">
        {children}
      </pre>
    </div>
  )
}

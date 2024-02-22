import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'
import '@/styles/vsdark.css'
import { getCurrentLanguage } from '@/utils/syntax'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-javascript.min'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-tsx.min'
import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-yaml.min'

//prism-tomorrow 테마를 사용
export default function CodeBlock(props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) {
  const currentLanguage = getCurrentLanguage(props.className?.replace('language-', ''))
  const { children, node, className, ...rest } = props

  if (!Prism.languages[currentLanguage]) return <code {...rest}>{children}</code>

  const html = Prism.highlight(String(children), Prism.languages[currentLanguage], currentLanguage)
  return (
    <div className={`pre language-${currentLanguage}`}>
      <code className={`language-${currentLanguage}`} dangerouslySetInnerHTML={{ __html: html }} {...rest}></code>
    </div>
  )
}

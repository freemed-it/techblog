import { ClassAttributes, HTMLAttributes, ReactElement } from 'react'
import { ExtraProps } from 'react-markdown'

export default function Pre(props: ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLPreElement> & ExtraProps) {
  const language = (props?.children as ReactElement)?.props?.className?.replace('language-', '')
  if (!language) return <pre className="bg-[#F4F4F5] text-sm text-gray-900" {...props} />
  return (
    <div data-code="" className="flex flex-col rounded-lg bg-[#F4F4F5]">
      {props.children}
    </div>
  )
}

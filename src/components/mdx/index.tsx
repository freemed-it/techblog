import { MDXComponents } from 'mdx/types'
import { ImageMDX } from './Image'
import { ExternalLink } from './Link'

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: ImageMDX as any,
}

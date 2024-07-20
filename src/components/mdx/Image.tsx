import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
  className: string
}

export const ImageMDX = ({ src, alt, className }: ImageProps) => {
  return (
    <>
      <Image src={src} alt={alt} width={1000} height={1000} className={`mx-auto mb-0 mt-8 rounded-md ${className}`} />
      {alt && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">{alt}</span>
      )}
    </>
  )
}

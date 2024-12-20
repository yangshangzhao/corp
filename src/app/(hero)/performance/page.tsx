import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Performance'
}

export default function Page() {
  return (
    <Hero
      imgUrl="/performance.webp"
      altTxt="Performance"
      content="Performance."
    />
  )
}

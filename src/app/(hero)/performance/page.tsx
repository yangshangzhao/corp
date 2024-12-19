import Hero from '@/components/hero'
import { Metadata } from 'next'
import performanceSrc from '../../../../public/performance.webp'

export const metadata: Metadata = {
  title: 'Performance'
}

export default function Page() {
  return (
    <Hero imgUrl={performanceSrc} altTxt="Performance" content="Performance." />
  )
}

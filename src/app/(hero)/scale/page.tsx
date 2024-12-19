import Hero from '@/components/hero'
import { Metadata } from 'next'
import scaleSrc from '../../../../public/scale.webp'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Page() {
  return <Hero imgUrl={scaleSrc} altTxt="Scale" content="Scale." />
}

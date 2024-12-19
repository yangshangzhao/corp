import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Page() {
  return (
    <Hero imgUrl={require('/scale.webp')} altTxt="Scale" content="Scale." />
  )
}

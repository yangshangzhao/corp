import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Page() {
  return <Hero imgUrl={'/vercel.svg'} altTxt="Scale" content="Scale." />
}

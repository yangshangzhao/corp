import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliability'
}

export default function Page() {
  return (
    <Hero imgUrl={'/globe.svg'} altTxt="Reliability" content="Reliability." />
  )
}

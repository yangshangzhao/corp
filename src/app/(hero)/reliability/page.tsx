import Hero from '@/components/hero'
import { Metadata } from 'next'
import reliabilitySrc from '../../../../public/reliability.webp'

export const metadata: Metadata = {
  title: 'Reliability'
}

export default function Page() {
  return (
    <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="Reliability." />
  )
}

import Hero from '@/components/hero'
import { Metadata } from 'next'
import homeSrc from '../../../public/home.webp'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home" content="Welcome to our websit." />
  )
}

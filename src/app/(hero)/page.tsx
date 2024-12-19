import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Page() {
  return (
    <Hero
      imgUrl={'/home.webp'}
      altTxt="Home"
      content="Welcome to our websit."
    />
  )
}

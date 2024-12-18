'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const linkData = [
  { name: 'Performance', href: '/performance' },
  { name: 'Reliability', href: '/reliability' },
  { name: 'Scale', href: '/scale' }
]
export default function Header() {
  const pathname = usePathname()
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map(({ name, href }) => (
            <Link
              key={href}
              className={pathname === href ? 'text-purple-500' : ''}
              href={href}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { kumbhSans } from './assets/fonts'
import Menu from './components/menu'
import Contact from './components/contact'
import { ReactLenis } from './utils/lenis'

export const metadata: Metadata = {
  title: 'Sai Prasath',
  description:
    'Hello! I’m Sai Prasath, a web developer  based in Bangalore, Karnataka. I specialize in crafting  visually stunning websites with seamless user experiences',
  icons:{
    icon: '/sai prasath.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root>
        <body className={`${kumbhSans.className} text-ivory`}>
          <div className="w-screen h-screen bg-[url('/bg-noise.gif')] opacity-10 fixed -z-50"></div>
          <Menu />
          {children}
          <Contact />
        </body>
      </ReactLenis>
    </html>
  )
}

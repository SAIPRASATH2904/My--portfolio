'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Menu() {
  const path = usePathname()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <nav 
      className="fixed w-screen flex justify-between z-50 mt-8 px-8 lg:px-16 text-ivory text-lg mix-blend-difference"
      data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500"  
    >
      <Link href="/" className="font-semibold text-xl md:text-4xl">
        SP
      </Link>
      <div className="flex text-sm md:text-base">
        <ul className="mr-8">
          <Link href={path === '/allprojects' ? '/#about' : '#about'} className="hover:text-white transition-all duration-500">
            <li>About</li>
          </Link>
          <Link href={path === '/allprojects' ? '/#skills' : '#skills'} className="hover:text-white transition-all duration-500">
            <li>Skills</li>
          </Link>
          <Link href={path === '/allprojects' ? '/#works' : '#works'} className="hover:text-white transition-all duration-500">
            <li>Works</li>
          </Link>
          <Link href={path === '/allprojects' ? '/#contact' : '#contact'} className="hover:text-white transition-all duration-500">
            <li>Contact</li>
          </Link>
        </ul>
        <ul>
          <Link href="/" className="hover:text-white transition-all duration-500">
            <li>Home</li>
          </Link>
          <Link href="/allprojects" className="hover:text-white transition-all duration-500">
            <li>All Works</li>
          </Link>
          <Link href="/Sai prasath CV.pdf" target='_blank' className="hover:text-white transition-all duration-500">
            <li>My Resume</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
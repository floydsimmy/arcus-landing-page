'use client'
import { Link } from '@/i18n/routing'
import { EnvelopeSimple, List, X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Button } from './button'
import { LanguageSelector } from './lang-selector'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const t = useTranslations('Navbar')
  const menuItems = t.raw('menuItems')

  const contactButton = t('contactButton')

  return (
    <nav
      className={`flex fixed z-20 lg:top-4 lg:gap-56 justify-between max-lg:w-full lg:max-w-[80rem] lg:min-w-[80rem] items-center border-b lg:border border-blue-arc-100 ${open ? 'bg-white' : 'bg-white/85'}  backdrop-blur-md lg:rounded-[64px] max-md:h-20`}
    >
      <div className="logo flex items-center">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <ul
        className={`list-none flex gap-4 lg:gap-8 max-lg:absolute transition-all ease-in max-lg:z-[-1] max-lg:flex-col max-lg:h-screen ${open ? 'top-16 opacity-100 pt-8 pb-6 px-4 bg-white backdrop-blur-md' : 'top-[-1990px]'} max-lg:w-full`}
      >
        {menuItems.map(
          (item: { name: string; link: string }, index: number) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={transition}
              className={`relative cursor-pointer py-2 px-4 rounded-lg lg:rounded-[64px]  ${path === item.link ? 'bg-slate-arc-200' : 'bg-inherit'}`}
            >
              <Link href={item.link}>{item.name}</Link>
            </motion.li>
          ),
        )}
        <div className="lg:hidden w-full">
          <LanguageSelector />
        </div>
      </ul>

      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <X weight="bold" size={30} className="mr-3 lg:hidden" />
        ) : (
          <List weight="bold" size={30} className="mr-3 lg:hidden" />
        )}
      </button>
      <div className="hidden lg:flex justify-center items-center gap-3 mr-7">
        {/* <Dropdown /> */}
        <LanguageSelector />
        <Button
          className=""
          icon={<EnvelopeSimple />}
          content={contactButton}
        />
      </div>
    </nav>
  )
}

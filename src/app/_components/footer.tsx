/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { MapPin, Phone } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

import Image from 'next/image'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Footer = () => {
  const t = useTranslations('Footer')
  const menuItems = t.raw('menuItems')

  return (
    <footer
      className="bg-blue-arc-800 text-white mt-20 flex flex-col lg:justify-center
    lg:items-center h-[34.375rem] lg:h-[16.5rem]"
    >
      <div className=" flex flex-col lg:items-center gap-8 ">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-[12.43rem]">
          <Image
            src="/logoWhite.png"
            className=""
            alt="Logo"
            width={250}
            height={50}
          />
          <div>
            <ul className="list-none flex max-md:px-9  max-md:flex-col gap-8 mb-12">
              {menuItems.map((item: any, index: any) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  // transition={transition}
                  className="cursor-pointer"
                >
                  <Link href={item.link}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col  max-md:px-9 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:items-center">
            <span className="flex items-center gap-2">
              <Phone className="" weight="fill" /> +258 87 313 3920
            </span>
            <span className="flex items-center gap-2">
              <Image
                src="/mail.svg"
                className=""
                alt="Mail Icon"
                width={20}
                height={20}
              />{' '}
              info@arcus.co.mz
            </span>
            <span className="flex items-center gap-2 col-span-2">
              <MapPin weight="fill" />{' '}
              <Link target="_blank" href={'https://g.co/kgs/54yy8Fp'}>
                Avenida Friedrich Engels, nº 555, Maputo
              </Link>
            </span>
          </div>
        </div>
        <hr className="border-t-[1px] w-full" />
        <div className="flex  max-md:px-9 max-md:flex-col justify-between w-full text-base leading-6">
          <span>© 2024 Arcus</span>
          <span className="">{t(`credits`)}</span>
        </div>
      </div>
    </footer>
  )
}

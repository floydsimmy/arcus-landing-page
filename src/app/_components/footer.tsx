
"use client";
import { MapPin, Phone } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", link: "/" },
  { name: "Sobre nós", link: "/about" },
  { name: "Projectos", link: "/projects" },
];

export const Footer = () => {
  return (
    <footer className="bg-blue-arc-800 text-white flex flex-col justify-center
    items-center  h-[16.5rem]">
      <div className=" flex flex-col items-center gap-8">
        <div className="flex justify-center items-center gap-[12.43rem]">
          <Image src="/logoWhite.png" className="" alt="Logo" width={250} height={50} />
          <div>
            <ul className="list-none flex gap-8">
              {menuItems.map((item, index) => (
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
          <div className="grid grid-cols-2 grid-rows-2 gap-4 items-center">
            <span className="flex items-center gap-2">
              <Phone className="" weight="fill" /> +258 87 313 3920
            </span>
            <span className="flex items-center gap-2">
              <Image src="/mail.svg" className="" alt="Mail Icon" width={20} height={20} /> info@arcus.co.mz
            </span>
            <span className="flex items-center gap-2 col-span-2">
            <MapPin weight="fill" /> <Link href={"https://g.co/kgs/54yy8Fp"}>Museu
            </Link>
            </span>
          </div>
        </div>
        <hr className="border-t-[1px] w-full" />
        <div className="flex justify-between w-full text-base leading-6"><span>© 2024 Arcus</span><span className="">Feito pela: Digital View</span></div>
      </div>
    </footer>
  )
}
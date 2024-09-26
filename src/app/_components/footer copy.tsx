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
    <footer className="bg-blue-arc-800 text-white mt-20 py-10 px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-8">
          <Image src="/logoWhite.png" alt="Logo" width={150} height={50} className="mb-4 sm:mb-0" />
          
          <ul className="list-none flex flex-col sm:flex-row gap-4 sm:gap-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full text-left">
          <span className="flex items-center gap-2">
            <Phone weight="fill" /> +258 87 313 3920
          </span>
          <span className="flex items-center gap-2">
            <Image src="/mail.svg" alt="Mail Icon" width={20} height={20} /> info@arcus.co.mz
          </span>
          <span className="flex items-center gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
            <MapPin weight="fill" /> <Link href="https://g.co/kgs/54yy8Fp">Museu</Link>
          </span>
        </div>

        <hr className="border-t-[1px] w-full" />
        <div className="flex flex-col sm:flex-row justify-between w-full text-base leading-6 text-left">
          <span>© 2024 Arcus</span>
          <span className="mt-2 sm:mt-0">Feito pela: Digital View</span>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const menuItems = [
  { name: "Inicio", link: "/" },
  { name: "Sobre nós", link: "/about" },
  { name: "Projectos", link: "/services" },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-between  max-w-[75rem] items-center border border-blue-arc-200 rounded-[64px] mt-4 p-8">
      <div className="logo flex items-center">

        <Image src="/logo.png" className="absolute left-14" alt="Logo" width={100} height={50} />
        <span className="relative left-10" >ARCUS</span>
      </div>
      <ul className="list-none flex gap-8">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={transition}
            className="cursor-pointer"
          >
            <Link href={item.link}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>
      <Button icon={<EnvelopeSimple />} content="Contacte-nos" />
    </nav>
  );
};
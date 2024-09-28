
"use client";
import { EnvelopeSimple, List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  { name: "Projectos", link: "/projects" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`flex fixed z-20 lg:top-4 gap-64 lg:pr-[1.375rem] lg:max-w-[80rem] items-center border-b lg:border border-blue-arc-100 ${open ? "bg-white" : "bg-white/85" }  backdrop-blur-md lg:rounded-[64px] h-20`}>
      <div className="logo max-md:ml-3 flex items-center">
        <Image src="/logo.png" className="max-md:scale-150" alt="Logo" width={150} height={150} />
        {/*  <span className="text-lg text-slate-700 leading-7 font-medium" >ARCUS</span> */}
      </div>
      <ul className={`list-none flex gap-8 max-md:absolute transition-all ease-in max-md:z-[-1] max-md:flex-col max-md:h-screen ${open ? "top-16 opacity-100 pt-8 pb-6 px-4 bg-white backdrop-blur-md" : "top-[-990px]"} max-md:w-full`}>
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

      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        {
          open ? (
            <X weight="bold" size={30} className="mr-3 lg:hidden" />
          ) : (
            <List weight="bold" size={30} className="mr-3 lg:hidden" />
          )
        }
      </button>
      <Button className="hidden lg:flex" icon={<EnvelopeSimple />} content="Contacte-nos" />
    </nav>
  );
};
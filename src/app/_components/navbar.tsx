
"use client";
import { EnvelopeSimple, List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { usePathname } from "next/navigation";
import { Button } from "./button";
import { Dropdown } from "./dropdown";

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
  const path = usePathname();
  console.log(path);

  return (
    <nav className={`flex fixed z-20 lg:top-4 lg:gap-56 max-lg:justify-between  max-lg:w-full lg:max-w-[80rem] items-center border-b lg:border border-blue-arc-100 ${open ? "bg-white" : "bg-white/85"}  backdrop-blur-md lg:rounded-[64px] max-md:h-20`}>
      <div className="logo flex items-center">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <ul className={`list-none flex gap-4 lg:gap-8 max-lg:absolute transition-all ease-in max-lg:z-[-1] max-lg:flex-col max-lg:h-screen ${open ? "top-16 opacity-100 pt-8 pb-6 px-4 bg-white backdrop-blur-md" : "top-[-1990px]"} max-lg:w-full`}>
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={transition}
            className={`relative cursor-pointer py-2 px-4 rounded-lg lg:rounded-[64px]  ${path === item.link ? "bg-slate-arc-200" : "bg-inherit"}`}
          >
            <Link href={item.link}>{item.name}</Link>
          </motion.li>
        ))}
        <div className="lg:hidden w-full"><Dropdown/></div>
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
      <div className="hidden lg:flex gap-3 mr-7">
        <Dropdown />
        <Button className="" icon={<EnvelopeSimple />} content="Contacte-nos" />
      </div>
    </nav>
  );
};
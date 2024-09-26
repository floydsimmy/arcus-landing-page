
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
    <nav className="flex fixed z-20 lg:top-4 gap-64 pr-[1.375rem]  max-w-[80rem] items-center border border-blue-arc-100 lg:rounded-[64px] bg-white">
      <div className="logo flex items-center">

        <Image src="/logo.png" className="" alt="Logo" width={150} height={150} />
        {/*  <span className="text-lg text-slate-700 leading-7 font-medium" >ARCUS</span> */}
      </div>
      <ul className={`max-md:absolute transition-all duration-200 ease-in z-[-1] list-none flex max-md:flex-col w-full  h-screen gap-8 ${open ? "top-11 opacity-100 pt-8 pb-6 px-4" : "top-[-690px]"} bg-white`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer"
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button className=" " onClick={() => setOpen(!open)}>
        {
          open ? (
            <X weight="bold"/>
          ) : (
            <List weight="bold" className="lg:hidden" />
          )
        }
      </button>
      <Button className="hidden lg:flex" icon={<EnvelopeSimple />} content="Contacte-nos" />
    </nav>
  );
};
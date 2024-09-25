"use client";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space, Typography } from "antd";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Portuguese",
    },
    {
      key: "3",
      label: "English",
    },
  ];
  return (
    <nav className="flex fixed top-4 w-full px-4 sm:px-8 lg:px-16 max-w-[80rem] items-center border border-blue-arc-100 rounded-[64px] bg-white">
      <div className="logo flex items-center">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      <div className="flex-grow hidden lg:flex justify-center">
        <ul className="list-none flex gap-8">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={transition}
              className="cursor-pointer text-slate-arc-800 hover:text-blue-arc-600"
            >
              <Link href={item.link}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["3"],
          }}
          className="border rounded-3xl p-4"
        >
          <Typography.Link>
            <Space>
              PT/EN
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <Button icon={<EnvelopeSimple />} content="Contacte-nos" />
      </div>

      <div className="flex lg:hidden items-center ">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["3"],
          }}
        >
          <Typography.Link>
            <Space>
              PT/EN
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
        <Button
          icon={<EnvelopeSimple />}
          content="Contacte-nos"
          className="text-sm"
        />
        <button onClick={toggleMenu} className="p-2 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border border-blue-arc-100 rounded-lg shadow-lg lg:hidden">
          <ul className="list-none flex flex-col gap-2 p-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-slate-arc-800 hover:text-blue-arc-600 hover:bg-gray-200 rounded p-2 transition-colors duration-200"
                onClick={toggleMenu}
              >
                {" "}
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

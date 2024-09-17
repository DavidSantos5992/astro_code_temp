'use client'
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Importando ícones para o menu

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[96px] bg-[#123880] p-4 flex items-center justify-between">

      <Image
        src="/images/logo.svg"
        className="w-auto h-full"
        width={150}
        height={40}
        alt="Logo"
      />

      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      <nav
        className={`${isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center md:space-x-8 absolute md:static bg-[#133881] mt-[5%] md:mt-0 w-full md:w-auto top-16 left-0 p-4 md:p-0 md:top-auto z-10`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
          <li className="capitalize text-white text-2xl">início</li>
          <li className="capitalize text-white text-2xl">sobre</li>
          <li className="capitalize text-white text-2xl">serviços</li>
        </ul>

        <button className="h-10 p-5 bg-white rounded-[30px] flex items-center justify-center shadow-md hover:bg-[#e7eaf8] text-2xl text-[#133881] mt-4 md:mt-0">
          Contratar
        </button>
      </nav>
    </header>
  );
}

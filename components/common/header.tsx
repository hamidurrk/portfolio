import Image from "next/image";
import { useState } from "react";
import Menu from "@/components/common/menu";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 ">
      <div className="w-full fixed top-0 py-4 select-none z-49 bg-gradient-to-b from-black to-transparent"></div>
      <div className="flex justify-between section-container">
        <a href="#home" 
        className="link" 
        rel="noreferrer"
        target="_blank">
          <Image
            src="/logo.svg"
            alt="Logo - Hamidur"
            width={30}
            height={30}
          />
        </a>
        <nav className={`outer-menu cursor-none ${menuVisible ? "menu-visible" : ""}`}>
          <button
            className="hamburger w-6 h-6 flex items-center justify-center link relative"
            onClick={setmenuVisible.bind(null, !menuVisible)}
          >
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
          </button>
          <Menu setmenuVisible={setmenuVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Header;

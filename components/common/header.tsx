import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from 'next/router';
import Menu from "@/components/common/menu";
import Lenis from "@studio-freight/lenis";

const Header = () => {
  const router = useRouter();
  const [menuVisible, setmenuVisible] = useState(false);
    const animDuration = 4;
    const lenisRef = useRef<Lenis | null>(null);
    const durationRef = useRef<number>(animDuration);
    const handleClick = () => {
      if (!lenisRef.current) {
        const lenis = new Lenis({
          duration: animDuration,
          easing: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
        });
  
        lenisRef.current = lenis;
  
        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
  
        requestAnimationFrame(raf);
      }
      const element = document.getElementById("home");
      if (element && lenisRef.current) {
        lenisRef.current.scrollTo(element);
  
        setTimeout(() => {
          if (lenisRef.current) {
            lenisRef.current.destroy();
            lenisRef.current = null;
          }
        }, durationRef.current * 1000); 
      }
    };

    const handleLogoClick = () => {
      if (router.pathname === '/projects') {
        router.push('/');
      } else {
        handleClick();
      }
    };
  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 ">
      {/* <div className="w-full fixed top-0 py-20 lg:py-4 z-49 bg-gradient-to-b from-black to-transparent"></div> */}
      <div className="flex justify-between section-container">
        <div
        className="link" 
        onClick={handleLogoClick}>
          <Image
            src="/logo.svg"
            alt="Logo - Hamidur"
            width={30}
            height={30}
          />
        </div>
        <nav className={`outer-menu cursor-none ${menuVisible ? "menu-visible" : ""}`}>
          <button
            className="hamburger w-6 h-6 flex items-center justify-center link relative cursor-none"
            onClick={setmenuVisible.bind(null, !menuVisible)}
          >
            <div className="relative flex-none w-full bg-white duration-300 flex items-center cursor-none justify-center"></div>
          </button>
          <Menu setmenuVisible={setmenuVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Header;

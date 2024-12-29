import { Dispatch, SetStateAction, useRef } from "react";
import { MENULINKS } from "../../constants";
import Lenis from "@studio-freight/lenis";

const Menu = ({
  setmenuVisible,
}: {
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const animDuration = 4;
  const lenisRef = useRef<Lenis | null>(null);
  const durationRef = useRef<number>(animDuration);
  
  const handleMenuClick = (id: string) => {
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
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element);

      // Destroy Lenis instance after the animation duration
      setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
      }, durationRef.current * 1000); // Convert duration to milliseconds
    }
  };
  
  return (
    <section
      className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
      style={{ visibility: "hidden" }}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
          <ul
            className="list-none py-4 px-0 m-0 block max-h-screen"
            role="menu"
          >
            {MENULINKS.map((el) => (
              <li
                className="p-0 m-6 text-2xl block"
                key={el.name}
                role="menuitem"
                onClick={() => handleMenuClick(el.ref)}
              >
                <div
                  className="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                  onClick={setmenuVisible.bind(null, false)}
                >
                  {el.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;

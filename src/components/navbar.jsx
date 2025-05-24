import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Image/Header.png";
import { navigation } from "../constants.js";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button.jsx";
import MenuSvg from "./menuSvg.jsx";

const NavBar = () => {
  const { hash } = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    open ? enablePageScroll() : disablePageScroll();
  };

  const closeMenu = () => {
    if (open) {
      setOpen(false);
      enablePageScroll();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-n-6 ${
        open ? "bg-n-8" : "bg-n-8/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="block w-[10rem] xl:w-[12rem]">
          <img src={Header} alt="Logo" className="w-full h-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={closeMenu}
              className={`font-code text-sm uppercase tracking-wider transition-all duration-200 hover:text-color-1 ${
                item.url === hash
                  ? "font-bold text-color-1"
                  : "text-n-1/60 hover:text-n-1"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/maenalnjar/"
            className="text-sm text-n-1/50 hover:text-n-1 transition-colors"
          >
            LinkedIn
          </a>
          <Button href="https://github.com/MaenAlNjar">GitHub</Button>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <Button px="px-3" onClick={toggleMenu}>
            <MenuSvg openNavigation={open} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[4.5rem] left-0 right-0 bg-n-8 overflow-hidden transition-all duration-300 ${
          open ? "h-[100vh]" : "h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 mt-10">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={closeMenu}
              className="font-code text-base text-n-1 uppercase tracking-widest hover:text-color-1"
            >
              {item.title}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/maenalnjar/"
            className="text-n-1/50 hover:text-n-1 transition-colors"
          >
            LinkedIn
          </a>
          <Button href="https://github.com/MaenAlNjar">GitHub</Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

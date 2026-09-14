import { useState } from "react";
import LogoText from "../assets/logo-text.png";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white py-5">
      <div className="container mx-auto flex justify-between items-center text-[#475569]">
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <img src={LogoText} alt="" />

        <ul className="hidden lg:flex gap-7 items-center font-arimo">
          <li className="text-[#DB2777] font-semibold">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-5">
          <button className="hidden sm:block">Sign in</button>
          <button className="bg-[#D91B7E] text-white px-5 py-2.5 rounded-3xl">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[#F1F5F9] shadow-md">
          <ul className="flex flex-col gap-4 p-6 font-arimo">
            <li className="text-[#DB2777] font-semibold">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

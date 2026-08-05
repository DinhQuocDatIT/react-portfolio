import { AnimatePresence, motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import { sections } from "../../constants/sections";
import { profile } from "../../constants/profile";
import { avatar } from "../../assets";

function Header({ activeSection, isMenuOpen, toggleMenu, handleScrollTo }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          className="flex items-center justify-between gap-3 cursor-pointer"
          onClick={() => handleScrollTo("hero")}
        >
          <img
            className="w-14 h-14 rounded-full object-cover shadow-lg ring-2 ring-white [image-rendering:-webkit-optimize-contrast]"
            src={avatar}
            alt="avatar"
          />
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 tracking-wide uppercase ">
              {profile.name}
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
              Software Developer
            </span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-1.5">
          {sections.map((sect) => {
            return (
              <button
                key={sect.id}
                onClick={() => handleScrollTo(sect.id)}
                className={` cursor-pointer px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-205 ${
                  activeSection === sect.id
                    ? "text-primary bg-indigo-50/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                } `}
              >
                {sect.label}
              </button>
            );
          })}
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className=" cursor-pointer p-2 text-slate-600 hover:text-slate-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-slate-100 overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-2.5">
              {sections.map((sect) => (
                <button
                  key={sect.id}
                  onClick={() => handleScrollTo(sect.id)}
                  className={`cursor-pointer w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all 
                    ${
                      activeSection === sect.id
                        ? "text-primary bg-indigo-50/50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    } `}
                >
                  {sect.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;

"use client";

import { navItems } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import DisruptLegalLogo from "../icons/disrupt-legal-white";

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="flex flex-col relative z-999 backdrop-blur-[20px]">
      <motion.nav
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="hidden lg:flex mw items-center py-2 px-[30px] lg:px-20 w-full justify-between"
      >
        <Link href={"/"}>
          <DisruptLegalLogo />
        </Link>

        <div className="flex items-center gap-8 text-[17px] text-white font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${pathname === item.href ? "uppercase" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href={"/contact-us"}>
          <button
            className="py-4 px-[18px] rounded-[5px] text-sm/[140%] font-semibold tracking-[-2%] bg-cta-btn text-white w-[204px]"
            title="contact us"
            aria-label="contact us"
          >
            Contact Us
          </button>
        </Link>
      </motion.nav>
      <motion.nav
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="flex lg:hidden items-center py-3 px-4 w-full justify-between"
      >
        <Link href={"/"}>
          <DisruptLegalLogo className="w-[92px] h-[65px]" />
        </Link>

        <button onClick={toggleMenu}>
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8984 0.930892L1.89844 0.9375"
              stroke="white"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
            <path
              d="M16.9004 5.43089L1.90039 5.4375"
              stroke="white"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
            <path
              d="M16.9023 9.93089L1.90234 9.9375"
              stroke="white"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex flex-col h-screen bg-white px-4 pt-6"
            >
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="text-black cursor-pointer"
                  type="button"
                >
                  <IoCloseOutline size={28} />
                </button>
              </div>

              {/* mobile menu items */}
              <div className="my-auto">
                <div className="flex flex-col text-center gap-6 font-semibold text-black text-base">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={toggleMenu}
                      className={`${pathname === item.href ? "uppercase" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-12 text-center">
                  <Link href="/contact-us">
                    <button
                      className="py-4 px-[18px] rounded-[5px] text-sm/[140%] font-semibold tracking-[-2%] bg-cta-btn text-white w-[204px]"
                      title="contact us"
                      aria-label="contact us"
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

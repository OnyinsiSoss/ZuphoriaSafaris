"use client";
import { Button, } from "@/components/elements";
import headerData from "@/data/header.json";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import useDetectScroll from "@smakss/react-scroll-direction";
import cx from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";


export const Header = () => {
  const { scrollDir } = useDetectScroll();

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };


  const size = useWindScreenowSize();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);

  return (
    <header
      className={cx(
        "z-50  duration-300 bg-transparent fixed w-full ",
        scrollDir === "down"
          ? "-translate-y-full bg-slate-300"
          : "translate-y-0 "
      )}
    >
      <div className="w-screen px-12 flex justify-between items-center">
        <div className="w-screen flex justify-between items-center">
          <Link href="/" className="z-20">
            <Image
              src="/images/logo.png"
              width={120}
              height={60}
              alt="Zuphoria"
            />
          </Link>
          <nav
            onClick={toggleMenu}
            className={cx(
              "list-none backdrop-blur-xl sm:bg-transparent duration-300 sm:translate-y-0 absolute h-screen top-0 left-0 w-screen justify-center flex-col sm:relative sm:h-fit sm:w-fit sm:flex-row flex items-center text-white gap-2",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header.map((item, index) => {
              return (
                <li key={index} className="">
                  <Link
                    className="Uppercase hover:text-amber-100"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <Link rel="stylesheet" href="/contacts">
              <Button variant="secondary" className="p-px uppercase">
                {" "}
                Get in touch
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex h-fit z-10">
          <button
            onClick={toggleMenu}
            className="p-3 flex items-center justify-center w-fit sm:hidden"
          >
            {showMenu ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

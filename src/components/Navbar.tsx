"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

const NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

type navItemProps = {
  name: string;
  path: string;
};
const NavItem = ({ name, path }: navItemProps) => {
  const pathName = usePathname();
  return (
    <li
      className={`before:ease-[cubic-bezier(.03,.86,.49,1.32)] 
         hover:text-blue-500 flex justify-center relative before:bg-blue-500  before:h-[1.5px] before:absolute  hover:before:w-full before:bottom-0 before:transition-all before:duration-500 
      ${
        pathName === path
          ? "text-blue-500 before:w-full"
          : "text-gray-600 dark:text-gray-200 before:w-0"
      }`}
    >
      <Link href={path}>{name}</Link>
    </li>
  );
};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("dark", !isDark ? "true" : "false");
  };

  useEffect(() => {
    setIsDark(localStorage.getItem("dark") === "true");
    if (localStorage.getItem("dark") === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap w-full  py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <div className="md:order-1 flex-none text-2xl font-bold">
          <Link href={"/"}>
            Satish.
            <span className="text-blue-500">dev</span>
          </Link>
        </div>
        <div className="md:order-3 flex items-center gap-x-2">
          <button
            type="button"
            onClick={() => toggleDarkMode()}
            title="Toggle Dark Mode"
            className={`inline-flex items-center gap-x-2 text-sm font-medium rounded-lg borde shadow-sm disabled:opacity-50 disabled:pointer-events-none text-gray-800 dark:text-gray-200`}
          >
            {!isDark ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"  
              viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="md:hidden p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg shadow-sm disabled:opacity-50 disabled:pointer-events-none text-gray-800 dark:text-gray-200"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow md:grow-0 md:basis-auto md:block md:order-2`}
        >
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:mt-0 md:ps-5">
            {NavLinks.map((navItem) => (
              <NavItem
                key={navItem.name}
                name={navItem.name}
                path={navItem.path}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

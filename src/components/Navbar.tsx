"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      className={`before:ease-[cubic-bezier(.03,.86,.49,1.32)] hover:text-blue-500 flex justify-center relative before:bg-blue-500  before:h-[1.5px] before:absolute  hover:before:w-full before:bottom-0 before:transition-all before:duration-500 
      ${
        pathName === path ? "text-blue-500 before:w-full" : "before:w-0"
        }`}
    >
      <Link href={path}>{name}</Link>
    </li>
  );
}

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`shadow-sm p-4 bg-white flex justify-between items-center md:flex-row  top-0 flex-col 
    `}>
      <div className="flex justify-between w-full items-center space-x-4">
        <h1 className={`text-2xl font-bold `}>
          <Link href={"/"}>Satish.
          <span className="text-blue-500">dev</span>
          </Link>
        </h1>
        <div className={`block md:hidden `}>
          <button
            name="Three dot menu"
            className={`flex items-center px-3 py-2 rounded ${isOpen? "text-blue-500":""}   hover:text-blue-500 hover:border-blue-500 `}
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
      </div>
      <ul
        className={`space-x-4 ${
          isOpen ? "block" : "hidden"
        } md:flex text-center`}
      >
        {NavLinks.map((navItem) => (
          <NavItem key={navItem.name} name={navItem.name} path={navItem.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    icon: "/icons/home.svg",
    title: "Home",
    link: "/",
  },
  {
    icon: "/icons/discover.svg",
    title: "Discover",
    link: "/discover",
  },
  {
    icon: "/icons/microphone.svg",
    title: "Create Podcast",
    link: "/create-podcast",
  },
  {
    icon: "/icons/profile.svg",
    title: "My Profile",
    link: "/my-profile",
  },
];

function ListNav() {
  const pathName = usePathname();
  return (
    <>
      <ul className="mt-16">
        {navItems.map(({ icon, title, link }) => {
          const isActive = pathName === link || pathName.startsWith(`${link}/`);
          return (
            <li
              className={cn(
                "relative py-4 my-8 pl-8",
                isActive && "gradient-nav"
              )}
              key={title}
            >
              <Link href={link} className="flex items-center gap-4">
                <Image src={icon} height={28} width={28} alt={title} />
                <p className="text-lg font-medium text-dark">{title}</p>
              </Link>
              {isActive && (
                <span className="absolute rounded-tl-sm rounded-bl-md h-full w-1.5 bg-red-500 right-0 top-0"></span>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListNav;

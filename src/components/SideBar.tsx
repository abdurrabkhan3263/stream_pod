import Image from "next/image";
import Link from "next/link";
import React from "react";
import ListNav from "./ListNav";

function SideBar() {
  return (
    <div className=" flex-col justify-between h-screen text-white bg-[#15171C] py-8 hidden md:flex">
      <nav>
        <Link href={"/"} className="flex items-center pl-8 gap-4">
          <Image src="/icons/logo.svg" alt="logo" width={28} height={28} />
          <h1 className="text-2xl font-extrabold">StreamPod</h1>
        </Link>
        <ListNav />
      </nav>
    </div>
  );
}

export default SideBar;

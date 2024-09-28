import React from "react";
import SideBar from "@/components/SideBar";
import RightBar from "@/components/RightBar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <div className="main__screen">
        <SideBar />
        <section className="min-h-screen ">
          <div className="flex flex-col  w-full max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src={"/icons/logo.svg"}
                height={30}
                width={30}
                alt="logo"
              />
              <MobileNav />
            </div>
            <div>{children}</div>
          </div>
        </section>
        <RightBar />
      </div>
    </main>
  );
}

export default layout;

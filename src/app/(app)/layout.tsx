import React from "react";
import SideBar from "@/components/SideBar";
import RightBar from "@/components/RightBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <div className="main__screen">
        <SideBar />
        <section>{children}</section>
        <RightBar />
      </div>
    </main>
  );
}

export default layout;

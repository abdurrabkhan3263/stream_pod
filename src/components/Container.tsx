import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mt-9 px-8">{children}</div>;
}

export default Container;

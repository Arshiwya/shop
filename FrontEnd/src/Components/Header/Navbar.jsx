import React from "react";
import RightSectionHeader from "./RightSectionHeader";
import LeftSectionHeader from "./LeftSectionHeader";
import BottonHeader from "./BottonHeader";

export default function Navbar() {
  return (
    <>
      <nav className="dark:bg-darker pt-7">
        {/* Top Haeder */}
        <div className="container flex items-center justify-between dark:bg-darker">
          <RightSectionHeader />
          <LeftSectionHeader />
        </div>
        {/* Bottom Header */}
        <div className="mt-6">
          <BottonHeader />
        </div>
      </nav>
    </>
  );
}

import React from "react";
import RightSectionHeader from "./RightSectionHeader";
import LeftSectionHeader from "./LeftSectionHeader";
import BottonHeader from "./BottonHeader";

export default function Navbar() {
  return (
    <>
    {/* Top Haeder */}
      <div className="container flex items-center justify-between mt-7">
        <RightSectionHeader />
        <LeftSectionHeader />
      </div>
    {/* Bottom Header */}
    <BottonHeader/>
    </>
  );
}

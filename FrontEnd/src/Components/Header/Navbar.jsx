import React from "react";
import RightSectionHeader from "./RightSectionHeader";
import LeftSectionHeader from "./LeftSectionHeader";

export default function Navbar() {
  return (
    <>
      <div className="container flex items-center justify-between mt-7">
        <RightSectionHeader />

        <LeftSectionHeader />
      </div>
    </>
  );
}

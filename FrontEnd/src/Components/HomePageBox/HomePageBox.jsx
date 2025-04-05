import React from "react";
import PageBox from "./PageBox";

export default function HomePageBox() {
  return (
    <>
      <div className="container mt-20">
        <div className="flex items-center justify-evenly">
          <PageBox src={"/img/skin.webp"} title={"مراقبت پوستی"} />
          <PageBox src={"img/Sunscreen.webp"} title={" ضد آفتاب"} />
          <PageBox src={"/img/Eye makeup.webp"} title={" آرایش چشم"} />
          <PageBox src={"/img/Hair care.webp"} title={"مراقبت مو"} />
          <PageBox src={"/img/Lip makeup.webp"} title={" آرایش لب"} />
        </div>
      </div>
    </>
  );
}

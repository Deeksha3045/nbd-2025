"use client";
import React from "react";
import Image from "next/image";
import Bannerimage from "../../public/images/banner-img.png";

export default function BannerVideo() {
  return (
    <div
      className="bannervideo"
      style={{
        background:
          "linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 36.71%), #F0F2FA",
      }}
    >
      <div className="container">
        <Image src={Bannerimage} alt="" className="w-full"></Image>
      </div>
    </div>
  );
}

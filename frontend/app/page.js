import Header from "@/component/common/Header";
import BannerVideo from "@/component/pages/Bannervideo";
import Expertise from "@/component/pages/Expertise";
import ExploreNBD from "@/component/pages/ExploreNBD";
import HomePageBanner from "@/component/pages/Homebanner";
import SoftwarePartners from "@/component/pages/Partners";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <HomePageBanner />
      <BannerVideo />
      <Expertise />
      <SoftwarePartners />
      <ExploreNBD />
    </>
  );
}

import Header from "@/component/common/Header";
import BannerVideo from "@/component/pages/Bannervideo";
import Expertise from "@/component/pages/Expertise";
import ExploreNBD from "@/component/pages/ExploreNBD";
import HomePageBanner from "@/component/pages/Homebanner";
import SoftwarePartners from "@/component/pages/Partners";
import Footer from "@/component/common/Footer";
import Client from "@/component/pages/Client";
import Teamnbd from "@/component/pages/Teamnbd";
import Review from "@/component/pages/Review";
import React from "react";
import Ourwork from "@/component/pages/Ourwork";
export default function page() {
  return (
    <>
      <Header />
      <HomePageBanner />
      <BannerVideo />
      <Client />
      <Ourwork />
      <Expertise />
      <SoftwarePartners />
      <Review />
      <Teamnbd />
      <ExploreNBD />
      <Footer />
    </>
  );
}

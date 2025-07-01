import { Banner } from "@/components/banner";
import { BannerTwo } from "@/components/banner-2";
import { Partners } from "@/components/partners";
import { Reviews } from "@/components/reviews";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <BannerTwo />
      <WhyUs />
      <Reviews />
      <Partners />
    </>
  );
}

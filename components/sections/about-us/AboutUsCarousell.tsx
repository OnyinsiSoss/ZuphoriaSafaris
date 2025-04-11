"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AboutUsCarousell() {
  return (
    <Carousel
      swipeable
      stopOnHover
      showStatus={false}
      interval={3000}
      showArrows={false}
      useKeyboardArrows={true}
      emulateTouch
      infiniteLoop
      autoPlay
      centerSlidePercentage={90}
      className="h-full  cursor-grabbing "
    >
      <div className="w-full h-[250px] rounded-xl  sm:h-[450px]">
        <Image
          src="/images/Pic-312.JPG"
          alt="About Us Image"
          quality={100}
          width={420}
          className="object-cover "
          height={530}
        />
      </div>
      <div className="w-full h-[250px] rounded-xl  sm:h-[450px]">
        <Image
          src="/images/Pic-67.JPG"
          alt="About Us Image"
          quality={100}
          width={420}
          className="w-full object-cover h-full "
          height={530}
        />
      </div>
      <div className="w-full h-[250px] rounded-xl sm:h-[450px]">
        <Image
          src="/images/Pic-257.JPG"
          alt="About Us Image"
          quality={100}
          width={420}
          className="w-full object-cover h-full "
          height={530}
        />
      </div>
    </Carousel>
  );
}

export default AboutUsCarousell;

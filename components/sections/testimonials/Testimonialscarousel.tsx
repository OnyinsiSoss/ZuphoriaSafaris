"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Section } from "@/components/layouts";
import { Heading, SubTitle } from "@/components/elements";

export const Testimonialscarousel = () => {
  const size = useWindScreenowSize();
  console.log(size.width);

  return (
    <Section className="rounded-3xl overflow-hidden">
      <Container className="flex flex-col gap-4 rounded-3xl overflow-hidden">
        <SubTitle subTitle="Testimonials" />
        <div className="flex w-full">
          <Heading as="h2" className="text-3xl leading-none text-slate-500">
            What our customers say{" "}
          </Heading>
        </div>
        <div>
          <Carousel
            swipeable
            stopOnHover={false}
            showStatus={false}
            interval={2000}
            showArrows={false}
            useKeyboardArrows={true}
            emulateTouch
            infiniteLoop
            autoPlay
            centerSlidePercentage={100}
            className="rounded-3xl overflow-hidden cursor-pointer "
          >
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, .8),  rgba(0, 0, 0, .3), rgba(0, 0, 0, .7))",
              }}
              className="relative w-full h-[450px] rounded-xl ob md:h-[550px]"
            >
              <Image
                src="/images/Pic-312.JPG"
                alt="About Us Image"
                quality={100}
                width={420}
                className="relative -z-1 w-full  rounded-3xl object-cover grayscale-50 h-full "
                height={530}
              />
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, .8),  rgba(0, 0, 0, .3), rgba(0, 0, 0, .7)",
              }}
              className="relative w-full h-[450px] rounded-xl ob md:h-[550px]"
            >
              <Image
                src="/images/Pic-67.JPG"
                alt="About Us Image"
                quality={100}
                width={420}
                className="relative -z-1 w-full rounded-3xl object-cover h-full "
                height={530}
              />
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, .8),  rgba(0, 0, 0, .3), rgba(0, 0, 0, .7)",
              }}
              className="flex relative w-full h-[450px] overflow-hidden rounded-xl ob md:h-[550px]"
            >
              <Image
                src="/images/Pic-257.JPG"
                alt="About Us Image"
                quality={100}
                width={420}
                className="absolute -z-50 w-full rounded-3xl object-cover h-full "
                height={530}
              />
              <div className="p-5 m-auto">
                <div className="flex items-center flex-col gap-7">
                  <p className="p-5 sm:text-md text-stone-100 text-center">
                    “I have used Explorateur for two trips and both were
                    absolutely impeccable. We just returned from a ten day tour
                    through Italy with the first group travel expedition called
                    Eating Italy.they have real relationships with families in
                    Italy that gave us private winery tours, winery dinners,The
                    tours are exquisite and curated perfectly to give us the
                    true Italian experience. It was a trip of a lifetime we’ll
                    never forget.”
                  </p>
                  <Heading
                    as="h1"
                    className="text-3xl text-center text-stone-100 leading-none "
                  >
                    Harriet tubman
                  </Heading>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

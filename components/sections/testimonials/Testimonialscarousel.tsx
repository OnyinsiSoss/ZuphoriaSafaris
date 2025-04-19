"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Section } from "@/components/layouts";
import { Heading, } from "@/components/elements";

export const Testimonialscarousel = () => {
  const size = useWindScreenowSize();
  console.log(size.width);

  return (
    <Section className="bg-slate-300 rounded-3xl overflow-hidden">
      <Container className="flex flex-col gap-10 rounded-3xl overflow-hidden">
        <div className="flex w-full">
          <Heading
            as="h2"
            className="text-emerald-900 md:text-5xl lg:text-8xl text-3xl font-[angella] leading-none "
          >
            What our customers say{" "}
          </Heading>
        </div>
        <div>
          <Carousel
            swipeable
            stopOnHover={false}
            showStatus={false}
            interval={6000}
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
              className="flex relative w-full h-[450px] overflow-hidden rounded-xl ob md:h-[550px]"
            >
              <Image
                src="/images/Pic-312.JPG"
                alt="About Us Image"
                quality={100}
                width={420}
                className="absolute -z-50 w-full rounded-3xl object-cover h-full "
                height={530}
              />
              <div className="p-5 m-auto">
                <div className="flex items-center flex-col gap-7">
                  <p className="p-5 lg:text-xl text-white text-center">
                    “I have used Zuphoria Safaris for two trips and both were
                    absolutely impeccable. We just returned from a ten day tour
                    through Maasain mara with the Migration travel expedition
                    .they have real relationships with families in Kenya that
                    gave us private tours, dinners,The tours are exquisite and
                    curated perfectly to give us the Best africa safaris. It was
                    a trip of a lifetime we’ll never forget.”
                  </p>
                  <Heading
                    as="h1"
                    className="font-[angella] text-xl md:text-3xl lg:text-5xl text-white leading-none  "
                  >
                    Beatrice Luntstra
                  </Heading>
                </div>
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, .8),  rgba(0, 0, 0, .3), rgba(0, 0, 0, .7)",
              }}
              className="flex relative w-full h-[450px] overflow-hidden rounded-xl ob md:h-[550px]"
            >
              <Image
                src="/images/Pic-67.JPG"
                alt="About Us Image"
                quality={100}
                width={420}
                className="absolute -z-50 w-full rounded-3xl object-cover h-full "
                height={530}
              />
              <div className="p-5 m-auto">
                <div className="flex items-center flex-col gap-7">
                  <p className="p-5 lg:text-xl text-white text-center">
                    “I have used Zuphoria Safaris for two trips and both were
                    absolutely impeccable. We just returned from a ten day tour
                    through Maasain mara with the Migration travel expedition
                    .they have real relationships with families in Kenya that
                    gave us private tours, dinners,The tours are exquisite and
                    curated perfectly to give us the Best africa safaris. It was
                    a trip of a lifetime we’ll never forget.”
                  </p>
                  <Heading
                    as="h1"
                    className="font-[angella] text-xl md:text-3xl lg:text-5xl text-white leading-none  "
                  >
                    Beatrice Luntstra
                  </Heading>
                </div>
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, .8),  rgba(0, 0, 0, .5), rgba(0, 0, 0, .7)",
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
                  <p className="p-5 lg:text-xl text-white text-center">
                    “I have used Zuphoria Safaris for two trips and both were
                    absolutely impeccable. We just returned from a ten day tour
                    through Maasain mara with the Migration travel expedition
                    .they have real relationships with families in Kenya that
                    gave us private tours, dinners,The tours are exquisite and
                    curated perfectly to give us the Best africa safaris. It was
                    a trip of a lifetime we’ll never forget.”
                  </p>
                  <Heading
                    as="h1"
                    className="font-[angella] text-xl md:text-3xl lg:text-5xl text-white leading-none  "
                  >
                    Beatrice Luntstra
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

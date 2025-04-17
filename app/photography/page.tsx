/* eslint-disable react/no-unescaped-entities */
import { Container, Heading, NewLetter, Section, SubTitle } from "@/components";
import AboutUsCarousel from "@/components/sections/about-us/AboutUsCarousel";
import AboutUsCarousell from "@/components/sections/about-us/AboutUsCarousell";
import Image from "next/image";
import React from "react";

const Photography = () => {
  return (
    <React.Fragment>
      <div className="m-auto">
        <div
          style={{
            height: "100vh",
            zIndex: -40,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))",
          }}
        >
          <Image
            alt="about-us"
            src="/images/Pic-41.JPG"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              position: "absolute",
              zIndex: -50,
            }}
          />
          <div className="flex flex-col justify-center items-center h-full ">
            <Heading
              as="h1"
              className=" flex md:text-7xl lg:text-8xl text-5xl font-[angella] capitalize text-white"
            >
              Through our Lenses
            </Heading>
          </div>
        </div>
      </div>
      <Section className="bg-slate-300 w-full py-32 ">
        <div className="flex justify-center items-center flex-col gap-8">
          <Heading
            as="h2"
            className="text-grey-950 md:text-3xl text-center lg:text-7xl text-xl font-[angella] leading-none capitalize"
          >
            Expert in African photography safari drive
          </Heading>
            <p className="text-slate-800 text-center text-2xl px-6 sm:px-60 py-8  ">
              Our Photography safari drive combines the thrill of a traditional
              safari drive with a focus on capturing stunning wildlife
              photographs. It is designed specifically for photographers who want
              to enhance their skills and capture memorable images of wildlife in
              their natural habitat.
            </p>

            <div className="p-6 sm:px-60">
              <AboutUsCarousell />
            </div>

            <p className="text-slate-800 text-center text-2xl px-6 sm:px-60 py-8  ">
              During a photography safari drive, you'll typically be accompanied
              by experienced guides or professional wildlife photographers who
              have a deep understanding of animal behavior and photography
              techniques. They can provide valuable insights and tips to help you
              make the most of your photographic opportunities
            </p>
        </div>
      </Section>
      <div
        style={{
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .5),rgba(0, 0, 0, .7))",
        }}
        className="flex flex-col relative"
      >
        <Image
          alt="Photographic safari highlights"
          src="/images/Pic-42.JPG"
          quality={100}
          fill
          sizes="100vw"
          style={{
            zIndex: -1,
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <Section className="">
          <Container className=" text-center text-white">
            <SubTitle
              subTitle="Highlights"
              className="text-white text-7xl mb-12 "
            />
            <div className="grid md:grid-rows justify-items-center gap-4 sticky">
              <div className="grid gap-5 py-12 relative p-4 rounded-xl">
                <div>
                  <Heading
                    as="h2"
                    className="text-white md:text-3xl text-center lg:text-7xl text-xl font-[angella] capitalize leading-none"
                  >
                    Access to prime wildlife areas:
                  </Heading>
                </div>
                <p className="text-xl">
                  Photography safari drives often take place in renowned
                  national parks or private reserves known for their diverse and
                  abundant wildlife populations. These locations offer excellent
                  opportunities to encounter a wide range of species and capture
                  captivating images
                </p>
              </div>
              <div className="grid gap-5 py-12 relative p-4 rounded-xl">
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-7xl text-xl font-[angella] capitalize leading-none"
                  >
                    Patient and strategic approach:
                  </Heading>
                </div>
                <p className="text-xl">
                  Guides on a photography safari drive understand the importance
                  of patience and positioning to achieve optimal photo
                  opportunities. They will often spend time observing animal
                  behavior and choose the best vantage points for capturing
                  unique shots.
                </p>
              </div>
              <div className="grid gap-5 py-12 relative p-4 rounded-xl">
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-7xl text-xl font-[angella] capitalize leading-none"
                  >
                    Optimal lighting conditions:
                  </Heading>
                </div>
                <p className="text-xl">
                  Guides aim to schedule safari drives during the times of day
                  when lighting conditions are most favorable for photography.
                  Early morning and late afternoon/early evening are known as
                  the golden hours, when the light is softer, warmer, and
                  creates a beautiful ambiance for photography.
                </p>
              </div>
              <div className="grid gap-5 py-12 relative p-4 rounded-xl">
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-7xl text-xl font-[angella] capitalize leading-none"
                  >
                    Vehicle customization:
                  </Heading>
                </div>
                <p className="text-xl">
                  Photography safari vehicles may be specially adapted to
                  accommodate photographers. They may have features like camera
                  mounts, bean bags, and equipment storage to provide stability
                  and convenience while capturing images.
                </p>
              </div>
              <div className="grid gap-5 py-12 relative p-4 rounded-xl">
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-7xl text-xl font-[angella] capitalize leading-none"
                  >
                    Photography workshops:
                  </Heading>
                </div>
                <p className="text-xl">
                  Some photography safari drives include workshops or sessions
                  led by professional photographers. These workshops can cover
                  various aspects of wildlife photography, including
                  composition, lighting, camera settings, and post-processing
                  techniques.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Section className="bg-slate-300   ">
        <Container className="flex flex-col lg:flex-row gap-10">
          <div>
            <AboutUsCarousel />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-slate-800 text-center text-2xl  ">
              Remember, wildlife conservation and ethical practices should
              always be a priority during a photography safari drive. Respect
              the animals, adhere to park regulations, and avoid disrupting
              their natural behavior or habitats. Additionally, be mindful of
              your impact on the environment and follow responsible photography
              guidelines to ensure the well-being of both the wildlife and their
              ecosystems.
            </p>
          </div>
        </Container>
      </Section>
      <div className="">
        <NewLetter />
      </div>
    </React.Fragment>
  );
};

export default Photography;

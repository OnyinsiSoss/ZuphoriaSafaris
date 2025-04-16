 import {
  Container,
  Heading,
  NewLetter1,
  Section,
} from "@/components";
import Image from "next/image";
import React from "react";
import Link from "next/link";


const Services = () => {
  return (
    <React.Fragment>
      <div className="m-auto ">
        <div className="">
          <div
            style={{
              height: "100vh",
              zIndex: -40,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .5))",
            }}
          >
            <Image
              alt="about-us"
              src="/images/Pic-60.JPG"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                position: "absolute",
                zIndex: -50,
              }}
            />
            <div className="flex flex-col font-[angella] justify-center items-center h-full md:text-7xl lg:text-8xl text-5xl  text-white">
              <Heading as="h1" className="capitalize">
                Safari experiences
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <Section className="bg-white">
        <Container className="m-auto p-5 sm:px-18 md:px-12 lg:px-36">
          <div className=" ">
            <Heading
              as="h2"
              className="text-3xl m-12 text-center text-emerald-900 "
            >
              Our Collected Safaris Experiences
            </Heading>
          </div>
          <div className="grid sm:mt-24 grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-xl overflow-hidden h-[200px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/Pic-9.jpg"
                    alt="Blog A"
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-emerald-900 text-2xl mb-4">
                    <Link href="/service/a">Bird Watching</Link>
                  </Heading>
                  <p className="text-neutral-900 text-xl">
                    come see the epic widerbeast migration from the serengeti to
                    the mara through the mara river, at the jaws of the mara
                    crocodile and the big cats.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-xl overflow-hidden h-[200px] ">
                <Image
                  src="/images/Pic-9.jpg"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-emerald-900 text-2xl mb-4">
                    Hot air Ballon
                  </Heading>
                  <p className="text-neutral-900 text-xl">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-xl overflow-hidden h-[200px] ">
                <Image
                  src="/images/Pic-9.jpg"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-emerald-900 text-2xl mb-4">
                    Night Game-Drives
                  </Heading>
                  <p className="text-neutral-900 text-xl">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-xl overflow-hidden h-[200px] ">
                <Image
                  src="/images/Pic-9.jpg"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-emerald-900 text-2xl mb-4">
                    Mountain Climbing
                  </Heading>
                  <p className="text-neutral-900 text-xl">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-xl overflow-hidden h-[200px] ">
                <Image
                  src="/images/Pic-9.jpg"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-emerald-900 text-2xl mb-4">
                    Geothermal Natural Spas
                  </Heading>
                  <p className="text-neutral-900 text-xl">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-xl overflow-hidden h-[200px] ">
                <Image
                  src="/images/Pic-9.jpg"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-emerald-900 text-2xl mb-4">
                    Cultural Encounters
                  </Heading>
                  <p className="text-neutral-900 text-xl">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <div className="">
        <NewLetter1 />
      </div>
      {/* <Section className="bg-slate-300 w-full ">
        <div className="flex justify-center items-center flex-col gap-8">
          <Heading as="h2" className="md:px-32 px-8 text-5xl xl:text-5xl leading-none text-gray-900 text-center capitalize">
            Let us build your dream vacation
          </Heading>
          <p className="text-slate-800 text-center text-2xl px-6 sm:px-60  ">
           Let Zuphoria Safaris guide you through an extraordinary safari adventure in Africa.
          </p>
         </div>
      </Section>       */}
    </React.Fragment>
  );
};

export default Services;
 
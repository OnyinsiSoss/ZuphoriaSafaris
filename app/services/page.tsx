 import {
  Container,
  Heading,
  NewLetter,
  Section,
} from "@/components";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Features2 } from "@/components/sections/features/Features2";


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
              src="/images/Pic-23.JPG"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                position: "absolute",
                zIndex: -50,
              }}
            />
            <div className="flex font-[angella] justify-center items-center h-full lg:text-8xl sm:text-6xl text-4xl text-white">
              <Heading as="h1" className="">
                Our Safaris
              </Heading>
            </div>
          </div>
        </div>
      </div>
        <Section className="lg:p-20 w-full ">
          <div className="flex justify-center items-center flex-col gap-8">
            <Heading
              as="h2"
              className="md:px-32 px-8 text-5xl xl:text-5xl leading-none text-gray-900 text-center capitalize"
            >
              Let us build your dream vacation
            </Heading>
            <p className="text-slate-800 text-center text-2xl px-6  ">
              Zuphoria Safaris will guide you through an extraordinary safari
              adventure in Africa.
            </p>
          </div>
        </Section>
        <Features2/>

        <Container className="m-auto p-10 ">
          <div>
            <div className="w-full flex justify-between items-center">
              <Heading
                as="h2"
                className="text-3xl leading-none text-emerald-900 "
              >
                Safaris Destination
              </Heading>
              <button className="border px-6 py-3 rounded-full border-emerald-900 text-emerald-900">
                <Link href="/services/destination">See More</Link>
              </button>
            </div>
            <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
                  <Link href="/services/destination">
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
                      <Link href="/service/a">Masaai Mara</Link>
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Come see the epic widerbeast migration from the serengeti
                      to the mara through the mara river, at the jaws of the
                      mara crocodile and the big cats.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Solar energy is revolutionizing the way we power our
                      world. In this blog post,sustainable energy source for a
                      brighter future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Solar energy is revolutionizing the way we power our
                      world. In this blog post,sustainable energy source for a
                      brighter future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      <Section className="bg-slate-200">
        <Container className="m-auto p-6">
          <div>
            <div className="w-full flex justify-between items-center">
              <Heading
                as="h2"
                className="text-3xl leading-none text-emerald-900"
              >
                Safaris Accomodations
              </Heading>
              <button className="border px-6 py-3 rounded-full border-emerald-900 text-merald-900">
                <Link href="/services/accomodation">See More</Link>
              </button>
            </div>
            <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      <Link href="/blog/a">
                        Harnessing the Power of the Sun: Exploring the World of
                        Solar Energy
                      </Link>
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      <Link href="/blog/a">
                        Solar energy is revolutionizing the way we power our
                        world. In this blog post,sustainable energy source for a
                        brighter future.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Solar energy is revolutionizing the way we power our
                      world. In this blog post,sustainable energy source for a
                      brighter future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Solar energy is revolutionizing the way we power our
                      world. In this blog post,sustainable energy source for a
                      brighter future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-200">
        <Container className="m-auto p-6">
          <div>
            <div className="w-full flex justify-between items-center">
              <Heading
                as="h2"
                className="text-3xl leading-none text-emerald-900"
              >
                Experiences
              </Heading>
              <button className="border px-6 py-3 rounded-full border-emerald-900 text-emerald900">
                <Link href="/services/experiences">See More</Link>
              </button>
            </div>
            <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      <Link href="/blog/a">
                        Harnessing the Power of the Sun: Exploring the World of
                        Solar Energy
                      </Link>
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Solar energy is revolutionizing the way we power our
                      world. In this blog post,sustainable energy source for a
                      brighter future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Solar energy is revolutionizing the way we power our
                      world. In this blog post,sustainable energy source for a
                      brighter future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[360px] ">
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
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Heading>
                    <p className="text-neutral-900 text-xl">
                      Solar energy is revolutionizing the way we power our
                      world. In this blog post,sustainable energy source for a
                      brighter future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* <Section className="bg-emerald-900 ">
        <Container className="m-auto px-38">
          <Heading
            as="h2"
            className="text-emerald-200 text-3xl leading-none capitalize mb-24"
          >
            our work philosophy
          </Heading>
          <div className="grid gap-4 sticky">
            <div className="grid md:grid-cols-2 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid md:grid-cols-2 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid md:grid-cols-2 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
            <div className="grid md:grid-cols-2 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>Culture</span>
                <Heading as="h4" className="text-features leading-none">
                  Curiosity & Creativity
                </Heading>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum numquam laboriosam fugit sequi blanditiis deserunt at
                illum veniam vero impedit, non quia nisi, repellendus
                voluptatum? Nobis at omnis eos temporibus.
              </p>
            </div>
          </div>
        </Container>
             </Section> */}

      <NewLetter />
    </React.Fragment>
  );
};

export default Services;
 
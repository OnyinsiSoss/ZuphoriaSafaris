/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Heading,
  LindkedlnFooter,
  NewLetter,
  Section,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="m-auto">
        <div className="" >          
          <div style={{ height:"100vh", zIndex:-40 , background:'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .51802), rgba(0, 0, 0, .3))'}}>
                <Image
                  alt="about-us"
                  src="/images/pic-31.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                      objectFit: 'cover', position:"absolute" , zIndex:-50 ,
                      }}
                />  
            <div className="flex flex-col justify-center items-center h-full " >
              <Heading as="h1" className=" flex text-6xl text-white">
              About Us 
            </Heading>
            </div>
          </div>
          {/* <div className="grid md:grid-cols-4 mt-4 md:grid-rows-4 md:h-screen gap-4">
            <div className="col-span-2 gap-4 h-full grid grid-rows-2 grid-cols-2 row-span-4">
              <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden">
                <Image
                  src="https://cdn.dribbble.com/userupload/14360068/file/original-ba1ed7bf3a14c47e57943f30b8b7b141.png?resize=1024x768"
                  alt="About us 1"
                  width={450}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 grid  grid-rows-2 gap-4">
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 bg-black text-white flex flex-col justify-between p-4 rounded-3xl">
                <Heading as="h3" className="text-title">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p className="text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam reprehenderit culpa vero omnis ullam
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-2 gap-4 h-full grid grid-rows-2 grid-cols-2 row-span-4">
              <div className="col-span-2 md:row-start-3 row-span-1 rounded-3xl overflow-hidden">
                <Image
                  src="https://cdn.dribbble.com/users/6942141/screenshots/15943214/media/8263cbe0693a7922ece383adcd701991.png?resize=450x338&vertical=center"
                  alt="About us 1"
                  width={450}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 grid  grid-rows-2 gap-4">
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                  <Heading as="h3" className="text-title">
                    100%
                  </Heading>
                  <div>
                    <Heading as="h4" className="text-label font-bold">
                      Dedication
                    </Heading>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 row-span-2 bg-black text-white flex flex-col justify-between p-4 rounded-3xl">
                <Heading as="h3" className="text-title">
                  100%
                </Heading>
                <div>
                  <Heading as="h4" className="text-label font-bold">
                    Dedication
                  </Heading>
                  <p className="text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam reprehenderit culpa vero omnis ullam
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Section className="bg-slate-300 w-full py-32 ">
                <div className="flex justify-center items-center flex-col gap-8">
                  <Heading as="h2" className="md:px-32 px-8 text-5xl xl:text-5xl leading-none text-gray-900 text-center capitalize">
                    Expert in tailored African adventures
                  </Heading>
                  <p className="text-slate-800 text-center text-2xl px-6 sm:px-60 py-8  ">
                  “Karibu! to Zuphoria, a travel companion rooted in the heart of Africa, Kenya. Our journey began with a simple yet profound idea: to share the beauty, diversity, and rich cultural tapestry of this incredible continent with the world.
                  </p>
                 
                </div>
          </Section>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="text-section leading-none capitalize mb-24"
          >
            our work philosophy
          </Heading>
          <div className="grid gap-4 sticky">
            <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
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
            <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
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
            <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
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
            <div className="grid md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
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
      </Section>
      <div className="">
        <NewLetter />
      </div>
      <Section className="bg-white">
        <Container className="m-auto">
          <Heading
            as="h2"
            className="text-emerald-900 text-5xl leading-none mb-24"
          >
            Our Team of Energy Experts
          </Heading>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-10.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Bruno Truong
                    </Heading> 
                    <span>CTO</span>
                    <Link href="/">
                      <LindkedlnFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-10.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Bruno Truong
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LindkedlnFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-10.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Bruno Truong
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LindkedlnFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-10.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Bruno Truong
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LindkedlnFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-10.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Bruno Truong
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LindkedlnFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-10.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-label font-semibold leading-none"
                    >
                      Bruno Truong
                    </Heading>
                    <span>CTO</span>
                    <Link href="/">
                      <LindkedlnFooter />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default AboutUs;
 
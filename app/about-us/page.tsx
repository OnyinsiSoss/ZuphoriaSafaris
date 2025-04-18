import { Container, Heading, NewLetter, Section } from "@/components";
import AboutUsCarousel from "@/components/sections/about-us/AboutUsCarousel";
import AboutUsCarousell from "@/components/sections/about-us/AboutUsCarousell";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="sm:h-screen h-1/2">
        <div className="">
          <div
            className="h-[70vh], sm:h-screen, object-cover"
            style={{
              height: "100vh",
              zIndex: -40,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))",
            }}
          >
            <Image
              alt="about-us"
              src="/images/Pic-6.JPG"
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
                className=" flex font-[angella] md:text-7xl lg:text-8xl text-5xl text-white"
              >
                About Us
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <Section className="">
        <Container className="">
          <div className="flex justify-center items-center flex-col gap-16">
            <Heading
              as="h2"
              className="text-emerald-950 md:text-5xl text-center lg:text-7xl text-3xl font-[angella] leading-none"
            >
              “Karibu! to Zuphoria
            </Heading>
            <p className="text-slate-800 text-center text-xl md:text-2xl">
              a travel companion rooted in the heart of Africa, Kenya. Our
              journey began with a simple yet profound idea: to share the
              beauty, diversity, and rich cultural tapestry of this incredible
              continent with the world.
            </p>

            <p className="text-slate-800 text-center text-xl md:text-2xl ">
              Nestled in the vibrant landscapes of Kenya, we are more than just
              a tourism company; we are storytellers, weaving the tales of
              Africa’s wonders. From the majestic savannahs teeming with
              wildlife to the pristine beaches along the Indian Ocean, our
              mission is to showcase the unparalleled beauty that East Africa,
              and specifically Kenya, has to offer.
            </p>

            <div className="">
              <AboutUsCarousell />
            </div>

            <p className="text-slate-800 text-center align-middle text-xl md:text-2xl  ">
              What sets us apart is our commitment to responsible and
              sustainable travel. We believe in leaving a positive impact on the
              places we visit, supporting local communities, and preserving the
              natural beauty that makes Kenya a jewel in Africa’s crown.
            </p>
          </div>
        </Container>
      </Section>
      <div
        style={{
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .5),rgba(0, 0, 0, .5))",
        }}
        className="flex flex-col relative"
      >
        <Image
          alt="Picture of the author"
          src="/images/Pic-79.JPG"
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
          <Container className="text-center text-white">
            <Heading
              as="h2"
              className="text-white md:text-3xl text-center lg:text-7xl text-xl font-[angella] leading-none  mb-12 lg:mb-24"
            >
              Highlights of our African Safari Drive:
            </Heading>
            <div className="grid md:grid-cols-3 gap-4 sticky">
              <div
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(180deg,rgba(0, 0, 0, .4),rgba(0, 0, 0, .4))",
                }}
                className="grid md:grid-cols-1 py-12 p-4 rounded-3xl"
              >
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none  mb-6"
                  >
                    Expert Guides
                  </Heading>
                </div>
                <p>
                  Our experienced and knowledgeable guides will accompany you
                  throughout the safari, sharing their insights and expertise
                  about the wildlife, culture, and history of the region. They
                  will ensure your safety and enhance your understanding and
                  appreciation of the African wilderness.
                </p>
              </div>
              <div
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4))",
                }}
                className="grid md:grid-cols-1 py-12 p-4 rounded-3xl"
              >
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none  mb-6"
                  >
                    Game Drives:
                  </Heading>
                </div>
                <p>
                  Prepare to witness the wonders of the African savannah as you
                  embark on thrilling game drives in open-top safari vehicles.
                  Traverse the vast landscapes, spotting magnificent wildlife
                  such as lions, elephants, giraffes, zebras, and a variety of
                  bird species. Our guides will take you to the best viewing
                  spots, maximizing your chances of encountering the Big Five
                  (lions, elephants, buffalos, leopards, and rhinoceroses)
                </p>
              </div>
              <div
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, .4),rgba(0, 0, 0, .4))",
                }}
                className="grid md:grid-cols-1 py-12 p-4 rounded-3xl"
              >
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none  mb-6"
                  >
                    National Parks and Reserves:
                  </Heading>
                </div>
                <p>
                  Explore renowned national parks and game reserves, such as the
                  Serengeti National Park in Tanzania, Maasai Mara Reserve in
                  Kenya, Kruger National Park in South Africa, Chobe National
                  Park in Botswana, and Etosha National Park in Namibia. Each
                  park offers a unique ecosystem and an abundance of wildlife,
                  ensuring an awe-inspiring safari experience.
                </p>
              </div>
              <div
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .5),rgba(0, 0, 0, .7))",
                }}
                className="grid md:grid-cols-1 py-12 p-4 rounded-3xl"
              >
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none  mb-6"
                  >
                    Cultural Encounters:
                  </Heading>
                </div>
                <p>
                  Immerse yourself in the rich cultural heritage of Africa by
                  visiting local communities and engaging with the indigenous
                  people. Learn about their traditions, customs, and way of
                  life, gaining a deeper understanding of the local culture.
                </p>
              </div>
              <div
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .5),rgba(0, 0, 0, .7))",
                }}
                className="grid md:grid-cols-1 py-12 p-4 rounded-3xl"
              >
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none  mb-6"
                  >
                    Optional Activities:
                  </Heading>
                </div>
                <p>
                  Enhance your safari experience with optional activities such
                  as hot air balloon rides over the savannah, guided bush walks,
                  night game drives, and visits to conservation projects or
                  wildlife sanctuaries
                </p>
              </div>
              <div
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .5),rgba(0, 0, 0, .7))",
                }}
                className="grid md:grid-cols-1 py-12 p-4 rounded-3xl"
              >
                <div>
                  <Heading
                    as="h4"
                    className="text-white md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none  mb-6"
                  >
                    Accommodations:
                  </Heading>
                </div>
                <p>
                  Enjoy comfortable accommodations that range from luxury lodges
                  and tented camps to eco-friendly safari resorts. These
                  accommodations are strategically located within or near the
                  national parks, offering stunning views and an authentic
                  safari atmosphere.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Section className="bg-white">
        <Container className="m-auto">
          <Heading
            as="h2"
            className="text-emerald-950 md:text-5xl text-center lg:text-7xl text-2xl font-[angella] leading-none mb-16"
          >
            Our Team of Travel Experts
          </Heading>

          <div className="grid text-white sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-1  group relative h-[450px] rounded-xl overflow-hidden ">
              <Image
                src="/images/brian.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-110 duration-300"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2 greyscale-100 backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-15 h-0 duration-300 p-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <Heading as="h4" className="text-xl leading-none">
                        Brian Mwaura
                      </Heading>
                      <span className=" leading-none">Safari Advisor</span>
                    </div>
                    <a
                      className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                      href="https://instagram.com/zuphoriazurusafaris"
                      target="blank"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  {/* <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Senior </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-span-1 group relative h-[450px] rounded-xl overflow-hidden ">
              <Image
                src="/images/kim.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-110 duration-300"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-15 h-0 duration-300 p-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <Heading as="h4" className="text-xl leading-none">
                        Kimani Mwaura
                      </Heading>
                      <span className=" leading-none">Safari Director</span>
                    </div>

                    <a
                      className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                      href="https://instagram.com/zuphoriazurusafaris"
                      target="blank"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  {/* <ul className="h-0 text-white translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Senior Travel Advisor</li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-span-1 group relative h-[450px] rounded-xl overflow-hidden">
              <Image
                src="/images/james.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-110 duration-300"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-15 h-0 duration-300 p-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <Heading as="h4" className="text-xl leading-none">
                        James Mwaura
                      </Heading>
                      <span className=" leading-none">Safari Co-ordinator</span>
                    </div>
                    <a
                      className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                      href="https://instagram.com/zuphoriazurusafaris"
                      target="blank"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  {/* <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Senior Travel Advisor</li>
                  </ul> */}
                </div>
              </div>
            </div>{" "}
            <div className="col-span-1 group relative h-[450px] rounded-xl overflow-hidden">
              <Image
                src="/images/mumbi.jpg"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover group-hover:scale-110 duration-300"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-15 h-0 duration-300 p-2 flex gap-1 justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <Heading as="h4" className="text-xl leading-none">
                        Mumbi Wanjohi
                      </Heading>
                      <span className=" leading-none">Safari Advisor</span>
                    </div>
                    <a
                      className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                      href="https://instagram.com/zuphoriazurusafaris"
                      target="blank"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  {/* <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">Senior </li>
                  </ul> */}
                </div>
              </div>
            </div>{" "}
          </div>
        </Container>
      </Section>
      <Section className=" bg-slate-300">
        <Container className="flex flex-col lg:flex-row gap-10">
          <div>
            <AboutUsCarousel />
          </div>
          <div className="flex flex-col m-auto gap-16">
            <p className="text-slate-800 text-center align-middle text-xl  ">
              We don’t just organize trips; we craft experiences. Whether you
              dream of embarking on a safari, exploring ancient cultures, or
              unwinding in the tranquility of nature, we are here to turn those
              dreams into reality. Our team, comprised of passionate locals and
              seasoned travelers, is dedicated to ensuring your journey is not
              just a vacation but a transformative adventure.
            </p>
            <p className="text-slate-800 text-center align-middle text-xl  ">
              Join us as we unlock the secrets of Kenya, revealing a world of
              warmth, hospitality, and awe-inspiring landscapes.
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

export default AboutUs;

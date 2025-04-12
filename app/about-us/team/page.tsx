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

const Team = () => {
  return (
    <React.Fragment>
      <div className="sm:h-screen h-1/2">
        <div className="" >          
          <div className="h-[70vh], sm:h-screen, object-cover" style={{ height:"100vh", zIndex:-40 , background:'linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'}}>
                <Image
                  alt="about-us"
                  src="/images/Pic-6.JPG"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                      objectFit:'cover', position:"absolute" , zIndex:-50 ,
                      }}
                />  
            <div className="flex flex-col justify-center items-center h-full " >
              <Heading as="h1" className=" flex text-6xl text-white">
              Our Team 
            </Heading>
            </div>
          </div>
        </div>
      </div>
      <Section className=" w-full py-8 sm:py-32 ">
                <div className="flex justify-center items-center flex-col gap-8">
                  <Heading as="h2" className="md:px-32 px-8 text-2xl md:text-5xl xl:text-5xl leading-none text-gray-900 text-center capitalize">
                    Expert in tailored African adventures
                  </Heading>
                  <p className="text-slate-800 text-center text-2xl px-6 sm:px-60 py-8  ">
                  “Karibu! to Zuphoria, a travel companion rooted in the heart of Africa, Kenya. Our journey began with a simple yet profound idea: to share the beauty, diversity, and rich cultural tapestry of this incredible continent with the world.
                  </p>
                 
                </div>
      </Section>

      

 <Section className="bg-emerald-900 px-6 ">
        <Container className="m-auto md:px-38">
          <Heading
            as="h2"
            className="text-emerald-200 text-3xl leading-none capitalize mb-24"
          >
            Highlights of our African Safari Drive:
          </Heading>
          <div className="grid md:grid-cols-3 gap-4 sticky">
            <div className="grid md:grid-cols-1 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>1.</span>
                <Heading as="h4" className="text-features leading-none">
                  Expert Guides
                </Heading>
              </div>
              <p>
               Our experienced and knowledgeable guides will accompany you throughout the safari, sharing their insights and expertise about the wildlife, culture, and history of the region. They will ensure your safety and enhance your understanding and appreciation of the African wilderness.
              </p>
            </div>
            <div className="grid md:grid-cols-1 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>2.</span>
                <Heading as="h4" className="text-features leading-none">
                  Game Drives:
                </Heading>
              </div>
              <p>
                Prepare to witness the wonders of the African savannah as you embark on thrilling game drives in open-top safari vehicles. Traverse the vast landscapes, spotting magnificent wildlife such as lions, elephants, giraffes, zebras, and a variety of bird species. Our guides will take you to the best viewing spots, maximizing your chances of encountering the Big Five (lions, elephants, buffalos, leopards, and rhinoceroses)
              </p>
            </div>
            <div className="grid md:grid-cols-1 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>3.</span>
                <Heading as="h4" className="text-features leading-none">
                  National Parks and Reserves:
                </Heading>
              </div>
              <p>
                Explore renowned national parks and game reserves, such as the Serengeti National Park in Tanzania, Maasai Mara Reserve in Kenya, Kruger National Park in South Africa, Chobe National Park in Botswana, and Etosha National Park in Namibia. Each park offers a unique ecosystem and an abundance of wildlife, ensuring an awe-inspiring safari experience.
              </p>
            </div>
            <div className="grid md:grid-cols-1 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>4.</span>
                <Heading as="h4" className="text-features leading-none">
                  Cultural Encounters:
                </Heading>
              </div>
              <p>
                 Immerse yourself in the rich cultural heritage of Africa by visiting local communities and engaging with the indigenous people. Learn about their traditions, customs, and way of life, gaining a deeper understanding of the local culture.
              </p>
            </div>
            <div className="grid md:grid-cols-1 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>5.</span>
                <Heading as="h4" className="text-features leading-none">
                  Optional Activities:
                </Heading>
              </div>
              <p>
                 Enhance your safari experience with optional activities such as hot air balloon rides over the savannah, guided bush walks, night game drives, and visits to conservation projects or wildlife sanctuaries
              </p>
            </div>
            <div className="grid md:grid-cols-1 py-12 bg-lime-300 p-4 rounded-3xl">
              <div>
                <span>6.</span>
                <Heading as="h4" className="text-features leading-none">
                  Accommodations: 
                </Heading>
              </div>
              <p>
                  Enjoy comfortable accommodations that range from luxury lodges and tented camps to eco-friendly safari resorts. These accommodations are strategically located within or near the national parks, offering stunning views and an authentic safari atmosphere.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      
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
            <div className="">
        <NewLetter />
      </div>
    </React.Fragment>
  );
};

export default Team;
 
import { Container, Heading, NewLetter1, Section } from "@/components";
import Image from "next/image";
import React from "react";
// import Link from "next/link";
import ExperienceData from "@/data/experiences.json";

const Services = () => {
  return (
    <React.Fragment>
      <div className="m-auto ">
        <div className="">
          <div
            style={{
              height: "100vh",
              zIndex: -40,
              overflow: "hidden",
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
        <Container className="">
          <div className=" flex flex-col gap-8">
            <Heading
              as="h2"
              className="text-emerald-900 text-center lg:text-7xl text-5xl font-[angella] leading-none "
            >
              Our Collected Safaris Experiences
            </Heading>
            <p className="text-slate-800 text-xl">
              &quot;We offer a full range of travel experiences for every type
              of traveler. From luxurious two-week safaris to short stay
              safaris, from gorilla trekking to beach holidays and everything in
              between, Zuphoria Safaris draws on our deep local knowledge and
              expert staff to bring you a once-in-a-lifetime experience. Our
              customizable, interest-driven packages can include any of the
              following experiences.
            </p>
          </div>
        </Container>
        <Container className="grid sm:mt-24 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ExperienceData.experiences.map((item, index) => {
            return (
              <div key={index} className="flex group flex-col gap-8">
                <div className="aspect-video rounded-xl overflow-hidden h-[200px] ">
                    <Image
                      src={item.expimg}
                      alt={item.label}
                      width={330}
                      height={330}
                      className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <Heading
                        as="h3"
                        className="text-emerald-900 text-2xl mb-4"
                      >
                        {item.label}
                      </Heading>
                      <p className="text-neutral-900 text-xl">{item.brief}</p>
                    </div>
                 </div>
              </div>
            );
          })}
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

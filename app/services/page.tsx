/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Heading,
  NewLetter,
  Section,
} from "@/components";
import Image from "next/image";
import React from "react";

const Services = () => {
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
              Our Services 
            </Heading>
            </div>
          </div>
        </div>
      </div>
      <Section className="bg-slate-300 w-full py-32 ">
                <div className="flex justify-center items-center flex-col gap-8">
                  <Heading as="h2" className="md:px-32 px-8 text-5xl xl:text-5xl leading-none text-gray-900 text-center capitalize">
                    Let us build your dream vacation
                  </Heading>
                  <p className="text-slate-800 text-center text-2xl px-6 sm:px-60 py-8  ">
                 Let Zuphoria Safaris guide you through an extraordinary safari adventure in Africa.
                  </p>
                 
                </div>
          </Section>
      <Section className="bg-emerald-900 ">
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
      </Section>
      <div className="">
        <NewLetter />
      </div>
    </React.Fragment>
  );
};

export default Services;
 
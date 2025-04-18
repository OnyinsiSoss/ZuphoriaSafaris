import {  Section, Container, Heading, Button, } from "@/components";
import AboutUsCarousel from "./AboutUsCarousel";
import Link from "next/link";

export const AboutUs2 = () => {
  return (
    <Section className="bg-slate-300 ">
      <Container className="flex flex-col lg:flex-row gap-12">
        <AboutUsCarousel />
        <div className="m-auto flex items-center flex-col gap-12">
          {/* <SubTitle
            subTitle="Expert in tailored African adventures"
            className=" "
          /> */}
          <Heading
            as="h2"
            className="text-emerald-950 text-3xl md:text-5xl text-center lg:text-7xl font-[angella] leading-none"
          >
            Experts in tailored African Adventures
          </Heading>
          <p className="text-slate-800 text-center text-xl  ">
            Nestled in the vibrant landscapes of Kenya, we are more than just a
            tourism company; we are storytellers, weaving the tales of Africa’s
            wonders. From the majestic savannahs teeming with wildlife to the
            pristine beaches along the Indian Ocean, our mission is to showcase
            the unparalleled beauty that East Africa, and specifically Kenya,
            has to offer.
          </p>
          <p className="text-slate-800 text-center text-xl  ">
            Join us as we unlock the secrets of Kenya, revealing a world of
            warmth, hospitality, and awe-inspiring landscapes.
          </p>
          <Link rel="stylesheet" href="/about-us">
            <Button
              className="uppercase p-8"
              variant="primary"
            >
              About us
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

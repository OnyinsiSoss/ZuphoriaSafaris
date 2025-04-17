import {  Section, Container, Heading, } from "@/components";
import AboutUsCarousel from "./AboutUsCarousel";

export const AboutUs2 = () => {
  return (
    <Section className="w-full ">
      <Container className="flex flex-col lg:flex-row gap-16">
        <div className="m-auto flex flex-col gap-16">
          {/* <SubTitle
            subTitle="Expert in tailored African adventures"
            className=" "
          /> */}
          <Heading
            as="h2"
            className="text-emerald-950 md:text-3xl text-center lg:text-5xl text-xl font-[angella] leading-none"
          >
            Experts in tailored African Adventures
          </Heading>
          <p className="text-slate-800 text-center align-middle text-xl  ">
            Nestled in the vibrant landscapes of Kenya, we are more than just a
            tourism company; we are storytellers, weaving the tales of Africa’s
            wonders. From the majestic savannahs teeming with wildlife to the
            pristine beaches along the Indian Ocean, our mission is to showcase
            the unparalleled beauty that Africa, and specifically Kenya, has to
            offer.
          </p>
          <p className="text-slate-800 text-center align-middle text-xl  ">
            Join us as we unlock the secrets of Kenya, revealing a world of
            warmth, hospitality, and awe-inspiring landscapes. Asante sana –
            thank you for choosing us as your gateway to the magic of Africa.
          </p>
        </div>

        <AboutUsCarousel />
      </Container>
    </Section>
  );
};

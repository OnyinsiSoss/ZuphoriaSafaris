import {  Section, Container, } from "@/components";

export const AboutUs = () => {
  return (
    <Section className="w-full bg-slate-300 ">
      <Container className="flex justify-center items-center flex-col ">
        {/* <Heading as="h2" className=" text-5xl xl:text-5xl leading-none text-gray-900 text-center capitalize">
              Expert in tailored African adventures
            </Heading> */}
        {/* <SubTitle subTitle="Expert in tailored African adventures" className=" " />           */}
        <p className="text-slate-800 text-center text-2xl md:text-3xl  ">
          “Karibu! to Zuphoria, your travel companion rooted in the heart of
          Africa, Kenya. Our journey began with a simple yet profound idea: to
          share the beauty, diversity, and rich cultural tapestry of this
          incredible continent with the world.
        </p>
      </Container>
    </Section>
  );
};

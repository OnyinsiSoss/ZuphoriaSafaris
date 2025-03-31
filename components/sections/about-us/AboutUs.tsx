import { Heading, Section, Button, } from "@/components";
// import AboutUsCarousel from "./AboutUsCarousel";

export const AboutUs = () => {
  return (
    <Section className="bg-slate-300 w-full py-32 ">
          <div className="flex justify-center items-center flex-col gap-8">
            <Heading as="h2" className="md:px-32 px-8 text-5xl xl:text-5xl leading-none text-gray-900 text-center capitalize">
              Expert in tailored African adventures
            </Heading>
            <p className="text-slate-800 text-center text-2xl px-6 sm:px-60 py-8  ">
            “Karibu! to Zuphoria, a travel companion rooted in the heart of Africa, Kenya. Our journey began with a simple yet profound idea: to share the beauty, diversity, and rich cultural tapestry of this incredible continent with the world.
            </p>
            <p className="text-gray-400 text-center text-5xl">
              About Us
            </p>
            <Button className="bg-gray-900 w-fit items-center uppercase" variant="primary">Learn More</Button>
          </div>
    </Section>
  );
};

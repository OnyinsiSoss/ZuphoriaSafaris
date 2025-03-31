import { Button, Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import Image from "next/image";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <Section className="bg-secondary-950 h-screen flex flex-col gap-32 justify-center items-center">
      <Container >
        <div className="grid  grid-rows-1 xl:grid-rows-2">
          <Image
            src="images/157.JPG"
            alt="Member"
            fill
            sizes="100vw"
            className="-z-10 object-cover absolute"
          />
          <div className="text-white">
            <Heading as="h1" className="text-8xl text-center leading-none ">
              Zuphoria Safaris
            </Heading>
          </div>
          <div className="flex flex-col mt-8 xl:mt-5 items-center justify-center ">
            <p className="text-2xl text-white mb-8 text-center capitalize">
              Turning dreams into destinations
            </p>
            <Button className="w-fit items-center uppercase" variant="secondary">Explore our Safari collection.</Button>
          </div>
        </div>
      </Container>
      {/* <div className="w-full col-span-2 h-1/2">
        <Marquee autoFill>
          <div className="flex justify-center gap-6 items-start mx-3">
            <Image
              src="/images/hero1.png"
              alt="Hero Image"
              width={450}
              height={250}
            />
            <Image
              src="/images/hero2.png"
              alt="Hero Image"
              width={450}
              height={250}
            />
            <Image
              src="/images/hero3.png"
              alt="Hero Image"
              width={450}
              height={250}
            />
          </div>
        </Marquee>
      </div> */}
    </Section>
  );
};

export { Hero };

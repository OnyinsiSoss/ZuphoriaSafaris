import { Button, Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";

const Hero = () => {
  return (
    <Section className="bg-secondary-950 h-screen flex flex-col gap-32 justify-center items-center">
      <Container className="overflow-hidden" >
        <div className="grid  grid-rows-1 xl:grid-rows-2">
          <Image
            src="/images/157.JPG"
            alt="Member"
            fill
            sizes="100vw"
            className="-z-10 object-cover absolute"
          />
          <div className="text-white">
            <Heading as="h1" className="text-5xl lg:text-8xl text-center leading-none ">
              Zuphoria Safaris
            </Heading>
          </div>
          <div className="flex flex-col mt-3 xl:mt-3 items-center justify-center ">
            <p className="text-xl w-2/3 sm:w-full text-3xl lg:text-3xl text-white mb-5 text-center capitalize">
              Turning dreams into destinations
            </p>
            <Link href="/services">
            <Button className="w-fit items-center uppercase" variant="secondary">Explore our Safari collection.</Button>
            </Link>
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

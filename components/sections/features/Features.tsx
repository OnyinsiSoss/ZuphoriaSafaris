import { Container, Heading, Section, SubTitle, Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Features = () => {
  return (
    <Section className="">
      <Container className=" ">
        <SubTitle subTitle="Services" className=" " />
        <div>
          <div className="mb-6 sm:mb-14 pb-4">
            <Heading
              as="h2"
              className="text-emerald-900 text-2xl md:text-5xl leading-none"
            >
              Let us build your dream vacation
            </Heading>
          </div>
          <div className="flex flex-col justify-center  lg:flex-row gap-10 m-auto ">
            <div
              style={{
                height: "450px",
                overflow: "hidden",
                background: "rgba(0, 0, 0, .5)",
              }}
              className="flex group relative rounded-xl overflow-hidden   "
            >
              <Image
                src="/images/Pic-10.JPG"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-fit group-hover:scale-110 duration-300 absolute -z-10 object-cover bg-center "
              />
              <div className="flex flex-col justify-between overflow-hidden p-8 ">
                <Heading
                  as="h2"
                  className="text-6xl font-[angella] items-center m-autotext-center leading-none text-white"
                >
                  Safaris
                </Heading>
                <div className="flex flex-col gap-4 text-white ">
                  <p>
                    Are you ready to go? We have created many experiences for
                    you, with our Safari Experts and Tour Leaders. Choose the
                    trip thats right for you!
                  </p>
                  <Button variant="secondary" className="p-px  uppercase">
                    <Link href="/services/destination">learn more</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div
              style={{
                height: "450px",
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, .4), rgba(0, 0, 0, .9))",
              }}
              className="flex group relative rounded-xl  overflow-hidden "
            >
              <Image
                src="/images/Pic-50.JPG"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-fit group-hover:scale-110 duration-300 absolute -z-10 object-cover "
              />
              <div className="flex justify-between flex-col overflow-hidden p-8">
                <Heading
                  as="h2"
                  className="text-6xl  font-[angella] leading-none text-white"
                >
                  Accomodation
                </Heading>
                <div className="flex flex-col text-white justify-between gap-4  ">
                  <p>
                    Are you ready to go? We have created many experiences for
                    you, with our Safari Experts and Tour Leaders. Choose the
                    trip thats right for you!
                  </p>
                  <Button variant="secondary" className="p-px  uppercase">
                    <Link href="/services/accomodation">learn more</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div
              style={{
                height: "450px",
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))",
              }}
              className="flex group relative rounded-xl  overflow-hidden "
            >
              <Image
                src="/images/Pic-209.JPG"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-fit group-hover:scale-110 duration-300 absolute -z-10 object-cover overflow-hidden "
              />
              <div className="flex flex-col justify-between overflow-hidden p-8 ">
                <Heading
                  as="h2"
                  className="text-6xl  font-[angella] overflow-hidden  leading-none text-white"
                >
                  Experiences
                </Heading>
                <div className="flex flex-col text-white justify-between gap-4 cursor-pointer">
                  <p>
                    Are you ready to go? We have created many experiences for
                    you, with our Safari Experts and Tour Leaders. Choose the
                    trip thats right for you!
                  </p>
                  <Button variant="secondary" className="p-px  uppercase">
                    <Link href="/services/experiences">learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Heading
          as="h2"
          className="text-slate-600 text-8xl font-[angella] leading-none "
        >
          <ul className="mt-36 md:flex-row gap-24 flex flex-col items-center justify-center  ">
            <li className="flex items-center gap-3 ">Explore</li>
            <li className="flex items-center gap-3 ">Discover</li>
            <li className="flex items-center gap-3 ">Experience</li>
          </ul>
        </Heading>
      </Container>
    </Section>
  );
};

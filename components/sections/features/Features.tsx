import { Container, Heading, Section, Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Features = () => {
  return (
    <Section className="">
      <Container className=" ">
        <div className=" flex flex-col gap-16">
          <div className=" flex flex-col gap-8">
            <Heading
              as="h2"
              className="text-emerald-900 md:text-5xl lg:text-8xl text-3xl font-[angella] leading-none "
            >
              Explore Our Safari Collections
            </Heading>
            <p className="text-slate-800 text-xl">
              We create personalised safaris in Kenya and across Eastern Africa,
              designed just for you. From your first inquiry to the end of your
              adventure, our expert team will be with you all the way!
            </p>
          </div>
          <div className="flex flex-col justify-center  lg:flex-row gap-2 m-auto ">
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
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover bg-center "
              />
              <div className="flex flex-col justify-between overflow-hidden p-4 ">
                <Heading
                  as="h2"
                  className="text-6xl font-[angella] leading-none text-white"
                >
                  Kenya Safaris
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
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover "
              />
              <div className="flex justify-between flex-col overflow-hidden p-4">
                <Heading
                  as="h2"
                  className="text-6xl  font-[angella] leading-none text-white"
                >
                  East Africa Safaris
                </Heading>
                <div className="flex flex-col text-white justify-between gap-4  ">
                  <p>
                    Are you ready to go? We have created many experiences for
                    you, with our Safari Experts and Tour Leaders. Choose the
                    trip thats right for you!
                  </p>
                  <Button variant="secondary" className="p-px  uppercase">
                    <Link href="/services/EastAfrica">learn more</Link>
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
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover overflow-hidden "
              />
              <div className="flex flex-col justify-between overflow-hidden p-4 ">
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
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover overflow-hidden "
              />
              <div className="flex flex-col justify-between overflow-hidden p-4 ">
                <Heading
                  as="h2"
                  className="text-6xl  font-[angella] overflow-hidden  leading-none text-white"
                >
                  Beyond East Africa
                </Heading>
                <div className="flex flex-col text-white justify-between gap-4 cursor-pointer">
                  <p>
                    Are you ready to go? We have created many experiences for
                    you, with our Safari Experts and Tour Leaders. Choose the
                    trip thats right for you!
                  </p>
                  <Button variant="secondary" className="p-px  uppercase">
                    <Link href="/services/beyond">learn more</Link>
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

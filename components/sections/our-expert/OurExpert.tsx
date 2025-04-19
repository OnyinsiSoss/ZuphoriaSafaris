import { Heading, SubTitle } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

export const OurExpert = () => {
  return (
    <Section className="bg-white">
      <Container className="">
        <div>
          <div className="flex flex-col gap-4">
            <SubTitle
              className="text-emerald-900 md:text-5xl lg:text-8xl text-3xl font-[angella] leading-none capitalize"
              subTitle="Meet our Team"
            />

            <p className="text-stone-800 text-xl">
              Our team boasts top safari enthusiasts, driving innovation in
              sustainability.
            </p>
          </div>
          <div className="mt-20">
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[150px] w-[150px] shrink-0 relative">
                <Image
                  src="/images/brian.jpg"
                  alt="Expert Image"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-xl text-emerald-950">
                    Nyahe Mwaura
                  </Heading>
                  <p className="text-neutral-800">Senior Travel Consultant</p>
                </div>
                <a
                  className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                  href="https://instagram.com/zuphoriazurusafaris"
                  target="blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/kim.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-xl text-emerald-950">
                    Mwaura Kimani
                  </Heading>
                  <p className="text-neutral-800">
                    Senior Photographic Safari Consultant
                  </p>
                </div>
                <a
                  className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                  href="https://instagram.com/zuphoriazurusafaris"
                  target="blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/james.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-xl text-emerald-950">
                    Thomi Mwaura
                  </Heading>
                  <p className="text-neutral-800">
                    Senior Safari Experience Consultant
                  </p>
                </div>
                <a
                  className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                  href="https://instagram.com/zuphoriazurusafaris"
                  target="blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="py-8 border-b flex gap-12 items-center border-neutral-700">
              <div className="h-[90px] w-[90px] shrink-0 relative">
                <Image
                  src="/images/mumbi.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-white flex flex-col sm:flex-row sm:gap-32">
                  <Heading as="h3" className="text-xl text-emerald-950">
                    Mumbi Wanjohi
                  </Heading>
                  <p className="text-neutral-800">
                    Senior Destination Consultant
                  </p>
                </div>
                <a
                  className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"
                  href="https://instagram.com/zuphoriazurusafaris"
                  target="blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

import { Container,  Heading, Section, SubTitle , } from "@/components";
import Image from "next/image";
import Link from "next/link";


export const Features = () => {
  return (
    <Section className="bg-emerald-900 px-16">
      <Container className="m-auto">
        <SubTitle subTitle="Services" className="text-primary-950 text-7xl" />
        <div>
          <div className="mb-12 sm:mb-24">
            <Heading as="h2" className="text-emerald-200 text-5xl leading-none">
              Let us build your dream vacation
            </Heading>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-10.jpg"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h2"
                      className="text-3xl font-semibold leading-none text-emerald-900"
                    >
                      Tailored Safaris
                    </Heading> 
                    <Link href="Services/Safaris">
                    Learn More
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 years in tourism Industry
                    </li>
                    <li className="text-sub-title">
                      4 years in tourism Industry
                    </li>
                    <li className="text-sub-title">
                      4 years in tourism Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-11.jpg"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-3xl font-semibold leading-none text-emerald-900"
                    >
                      Accomodation
                    </Heading> 
                    <Link href="Services/Lodges">
                    Learn More
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Tourism Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Tourism Industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/pic-209.jpg"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <Heading
                      as="h4"
                      className="text-3xl font-semibold leading-none text-emerald-900"
                    >
                      Experiences
                    </Heading> 
                    <Link href="Services/Experiences">
                    Learn More
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>
                    <li className="text-sub-title">
                      4 year in Energy Industry
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Heading as="h2" className="text-emerald-200 text-5xl leading-none ">
<ul className="mt-15 md:flex-row gap-8 flex flex-col items-center justify-center  ">  
              <li className="flex items-center gap-3 ">
                Explore
              </li>
              <li className="flex items-center gap-3 ">
                Experience
              </li>
              <li className="flex items-center gap-3 ">
                Discover
              </li>
            </ul>        </Heading>
      </Container>     
    </Section>
  );
};

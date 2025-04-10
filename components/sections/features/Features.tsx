import { Container,  Heading, Section, SubTitle , Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Features = () => {
  return (
    <Section className="px-5">
      <Container className="m-auto">
        <SubTitle subTitle="Services" className="" />
        <div>
          <div className="mb-6 sm:mb-14 pb-4">
            <Heading as="h2" className="text-emerald-900 text-2xl md:text-5xl leading-none">
              Let us build your dream vacation
            </Heading>
          </div>
          <div className="flex flex-col justify-center  lg:flex-row gap-10 m-auto ">
            <div style={{height:"450px", overflow:"hidden", background: 'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'}} className="flex group relative rounded-xl overflow-hidden   ">
              <Image
                src="/images/Pic-10.JPG"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-fit group-hover:scale-110 duration-300 absolute -z-10 object-cover bg-center "
              />
              <div className="flex flex-col justify-between items-center overflow-hidden ">
                <Heading as="h2" className="text-3xl items-center m-auto font-semibold text-center leading-none text-white">
                      Safaris
                </Heading>
                <div className="flex flex-col text-white   gap-10 m-auto px-5 items-center">
                  <p>
                    Are you ready to go? We have created many experiences for you, with
                    our Safari Experts and Tour Leaders. Choose the trip thats right
                    for you!
                  </p>                  
                  <Link rel="stylesheet" href="/services" > 
                       <Button variant="secondary" className="p-px uppercase z-10"> Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div style={{height:"450px", background: 'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'}} className="flex group relative rounded-xl  overflow-hidden ">
              <Image 
                src="/images/Pic-50.JPG"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover "
              />
              <div className="flex flex-col items-center overflow-hidden ">
                <Heading as="h2"className="text-3xl items-center m-auto font-semibold text-center leading-none text-white">
                      Accomodation
                </Heading>
                <div className="flex flex-col text-white justify-between gap-10  p-5 ">
                  <p>
                    Are you ready to go? We have created many experiences for you, with
                    our Safari Experts and Tour Leaders. Choose the trip thats right
                    for you!
                  </p>                  
                  <Link rel="stylesheet" href="/services" > 
                       <Button variant="secondary" className="p-px uppercase "> Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div style={{height:"450px", background: 'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'}} className="flex group relative rounded-xl  overflow-hidden ">
              <Image
                src="/images/Pic-209.JPG"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-fit group-hover:scale-110 duration-300 absolute -z-10 object-cover overflow-hidden " 
              />
              <div className="flex flex-col justify-between items-center overflow-hidden ">
                <Heading as="h2"className="text-3xl items-center m-auto overflow-hidden font-semibold text-center leading-none text-white">
                      Experiences
                </Heading>
                <div className="flex flex-col text-white justify-around gap-10 m-auto px-5 items-center z-10 relative cursor-pointer">
                  <p>
                    Are you ready to go? We have created many experiences for you, with
                    our Safari Experts and Tour Leaders. Choose the trip thats right
                    for you!
                  </p>                  
                  <Button variant="secondary" className="p-px  uppercase">
                    <Link href="/services" >
                    learn more
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Heading as="h2" className="text-slate-400 text-5xl leading-none ">
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
            </ul>        
        </Heading>
      </Container>     
    </Section>
  );
};

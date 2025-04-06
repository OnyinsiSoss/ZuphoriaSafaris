import { Container,  Heading, Section, SubTitle , Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Features = () => {
  return (
    <Section className=" px-16">
      <Container className="m-auto">
        <SubTitle subTitle="Services" className="text-primary-950 text-7xl" />
        <div>
          <div className="">
            <Heading as="h2" className="text-emerald-200 text-5xl leading-none">
              Let us build your dream vacation
            </Heading>
          </div>
          <div className="flex h-600px justify-center p-20 flex-row gap-10 m-auto ">
            <div style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'}} className="flex group relative rounded-xl overflow-hidden   ">
              <Image
                src="/images/Pic-10.JPG"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover bg-center "
              />
              <div className="flex flex-col justify-between items-center overflow-hidden ">
                <Heading as="h2" className={"text-3xl items-center m-auto font-semibold text-center leading-none text-white  "}>
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

            <div style={{height:"100vh" , background: 'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'}} className="flex group relative rounded-xl  overflow-hidden ">
              <Image 
                src="/images/Pic-10.JPG"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover "
              />
              <div className="flex flex-col justify-between items-center overflow-hidden ">
                <Heading as="h2"className="text-3xl items-center m-auto font-semibold text-center leading-none text-white">
                      Accomodation
                </Heading>
                <div className="flex flex-col text-white justify-around gap-10 m-auto px-5 items-center">
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

            <div style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))'}} className="flex group relative rounded-xl  overflow-hidden ">
              <Image
                src="/images/Pic-10.JPG"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full group-hover:scale-110 duration-300 absolute -z-10 object-cover overflow-hidden " 
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
            {/* <div className="group col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/Pic-11.JPG"
                alt="Member"
                width={320} 
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group top-2 overflow-hidden px-2  w-full">
               <div className="flex justify-between items-center">
                <div className="bg-primary-300 flex-col group-hover:h-[240px]  min-h-60 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
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
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 backdrop-blur-2xl group-hover:h-full duration-300">
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
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/Pic-209.JPG"
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
            </div> */}
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
            </ul>        
        </Heading>
      </Container>     
    </Section>
  );
};

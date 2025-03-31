import { Button, Heading } from "@/components/elements";
import Image from "next/image";


export const NewLetter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <Image
            src="/images/pic-503.jpg"
            alt="Member"
            fill
            sizes="100vw"
            className="-z-10 relative object-cover "
          />
      <div className="container m-auto">
        <div className="grid sm:grid-row-2 gap-7">
          <Heading as="h1" className="text-5xl text-center text-stone-50 leading-none ">
            Your Safari starts here,         
          </Heading>
          <p className="text-2xl text-stone-100 text-center">
            subscribe for updates and deals
          </p>
            
          <div className="flex sm:flex-col flex-col sm:gap-3 sm:items-center justify-center">
            <input 
              placeholder="Your e-mail"
              className="py-3 px-6  rounded-md sm:w-[330px] mb-3 sm:mb-7 bg-white text-emerald-950 border"
            />  
            <Button className="uppercase" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

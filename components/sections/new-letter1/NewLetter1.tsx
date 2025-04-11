import { Button, Heading } from "@/components/elements";
import Image from "next/image";
import Link from "next/link";


export const NewLetter1 = () => {
  return (
    <section  >
      <div style={{ height:"100%", background:'linear-gradient(180deg, rgba(0, 0, 0, .7),rgba(0, 0, 0, .7))'}}  className="lg:my-30 lg:mx-60 md:mx-40 sm:m-10 m-10 px-5 py-20 rounded-xl sm:p-10 relative  md:py-20 overflow-hidden">
      <Image
            src="/images/Pic-85.JPG"
            alt="Member"
            fill
            sizes="100vw"
            className="-z-50 relative object-cover "
          />
      <div className=" m-auto">
        <div className="flex items-center flex-col gap-7">
          <Heading as="h1" className="text-5xl text-center text-stone-50 leading-none ">
            Are you ready to go?         
          </Heading>
          <p className=" sm:text-md text-stone-100 text-center">
            Get in touch and one of our travel designers will be in touch with you.
          </p>
            
           <Link rel="stylesheet" href="/contacts">
              <Button className="uppercase" variant="secondary">
                Get in touch
                </Button>
            </Link>
        </div>
      </div>
      </div>

    </section>
  );
};

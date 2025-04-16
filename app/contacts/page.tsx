import { ContactForm, Heading,  } from "@/components";
import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="m-auto">
      <div
        style={{
          height: "100vh",
          zIndex: -40,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .51802), rgba(0, 0, 0, .3))",
        }}
      >
        <div />
        <Image
          alt="about-us"
          src="/images/Pic-581.JPG"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
            zIndex: -50,
          }}
        />
        <div className="flex flex-col justify-center items-center h-full ">
          <Heading
            as="h1"
            className=" flex font-[angella] md:text-7xl lg:text-8xl text-5xl text-white"
          >
            Talk to us
          </Heading>
        </div>
      </div>
      <div className="p-2 sm:p-4 bg-neutral-50">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

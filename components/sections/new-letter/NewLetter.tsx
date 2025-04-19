import { Button, Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";

export const NewLetter = () => {
  return (
    <Section className=" ">
      <Container >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, .7),rgba(0, 0, 0, .7))",
          }}
          className="rounded-xl sm:p-10 relative  overflow-hidden"
        >
          <Image
            src="/images/Pic-85.JPG"
            alt="Member"
            fill
            sizes="100vw"
            className="-z-50 relative object-cover "
          />
          <div className=" m-auto">
            <div className="flex items-center p-8 flex-col gap-5">
              <Heading
                as="h1"
                className="md:text-5xl lg:text-8xl text-5xl text-white font-[angella] leading-none "
              >
                Subscribe
              </Heading>
              <p className="w-2/3 md:w-full sm:text-2xl text-md text-stone-100 text-center">
                for updates, special offers, and travel inspiration
                {/* Enquire now and one of our travel designers will be in touch with you shortly */}
              </p>

              <div className="flex  md:flex-row flex-col gap-5 sm:items-center ">
                <input
                  placeholder="Your First Name"
                  className="py-3 px-3 rounded-md  bg-white text-emerald-950"
                />
                <input
                  placeholder="Your e-mail"
                  className="py-3 px-3 rounded-md  bg-white text-emerald-950"
                />
                <Link rel="stylesheet" href="/contacts">
                  <Button className="uppercase " variant="secondary">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

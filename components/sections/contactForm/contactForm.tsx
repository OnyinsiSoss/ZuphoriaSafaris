import React from 'react'
import { Button, Heading } from "@/components/elements";
import { Container } from '@/components/layouts';


export const ContactForm = () => {
  return (
    <section className="rounded-xl bg-slate-200">
      <Container className="flex flex-col items-center rounded-xl m-auto shadow-xl/40 w-screen">
        <div className=" sm:w-2/3 flex justify-center items-center">
          <form className="p-5 md:p-20 flex items-center flex-col gap-20 rounded-4xl">
            <Heading
              as="h1"
              className="flex text-4xl text-center text-emerald-900 "
            >
              Get in Touch, and Our Expert Will Reach Out to You
            </Heading>
            <div className="flex  flex-col   sm:flex-row md:justify-between gap-20">
              <input
                type="text"
                placeholder="First Name"
                className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"
              />
            </div>
            <div className="flex  flex-col   sm:flex-row md:justify-between gap-20">
              <input
                type="number"
                placeholder="Number of Travellers"
                className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"
              />
              <input
                type="text"
                placeholder="Counrty of origin"
                className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"
              />
            </div>

            <div className="flex  flex-col   sm:flex-row md:justify-between gap-20">
              <input
                type="email"
                placeholder="Email"
                className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"
              />
            </div>
            <textarea
              placeholder="Message"
              className="py-3 px-6 rounded-md w-full bg-white text-emerald-950 border"
            ></textarea>
            <div className="flex items-center gap-5">
              <input type="checkbox" />
              <p className="text-xl text-emerald-900">
                I declare that I have read and accepted the information on
                Privacy and Cookie Policy and I authorize Zuphoria Safaris to
                process my personal data,
              </p>
            </div>
            <Button className="uppercase" variant="primary">
              REquest information
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

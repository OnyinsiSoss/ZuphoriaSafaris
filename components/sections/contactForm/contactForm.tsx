import React from 'react'
import { Button, Heading } from "@/components/elements";
import { Container } from '@/components/layouts';


export const ContactForm = () => {
  return (
    <section className='flex items-center w-full min-h-4/5 m-auto box-border px-24'>
        <Container className='flex items-center m-auto py-18 w-screen'>
          <div className='flex justify-center items-center text-white gap-2 h-4/5 '>
             <div className='w-1/2 flex gap-4 flex-col'>
                <Heading as="h1" className="text-5xl text-white ">
                Get in Touch, and Our Expert Will Reach Out to You          
                    </Heading>
              <p className='text-2xl text-white'>
                Our team is always available and ready to assist you with any
                inquiries. Thank you for your patience and for trusting our
                dedicated specialists to support you.
              </p>                          
              </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <form className='p-20 flex flex-col gap-20 rounded-4xl bg backdrop-blur-20px'>
              <Heading as="h1" className="text-center text-4xl text-white ">
                Contact us            
                </Heading>                
                <div className='flex  justify-between gap-20'>
                  <input type="text" placeholder="First Name" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border" />
                  <input type="text" placeholder="Last Name" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"/>
                </div>
                <div className='flex  justify-between gap-20'>
                  <input type="email" placeholder="Email" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"/>
                  <input type="text" placeholder="Phone Number" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"/>
                </div>
                <textarea placeholder="Message" className="py-3 px-6  rounded-md w-full bg-white text-emerald-950 border"></textarea>
                <div className='flex items-center gap-5'>
                  <input type="checkbox" />
                  <p className='text-xl text-emerald-200'>
                    By clicking on the SUBMIT button, I accept the terms of
                    processing of my personal data.
                  </p>
                </div>
                <Button className="uppercase" variant="secondary">
                    Submit
                </Button>
              </form>
            </div>
        </Container>
    </section>
  )
}

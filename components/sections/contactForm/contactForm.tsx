import React from 'react'
import { Button, Heading } from "@/components/elements";
import { Container } from '@/components/layouts';


export const ContactForm = () => {
  return (
    <section className='flex items-center w-full m-auto box-border '>
        <Container className='flex flex-col bg-white items-center m-40 border-2 w-screen'>
             <div className='w-2/3 p-20 '>
                <Heading as="h1" className="text-center uppercase text-4xl text-emerald-900 ">
                 Contact us            
                </Heading>                           
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <form className='pb-20 flex flex-col gap-20 rounded-4xl'>
                <Heading as="h1" className="text-4xl text-center text-emerald-900 ">
                  Get in Touch, and Our Expert Will Reach Out to You          
                 </Heading>
                <div className='flex  justify-between gap-20'>
                  <input type="text" placeholder="First Name" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border" />
                  <input type="text" placeholder="Last Name" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"/>
                </div>
                <div className='flex  justify-between gap-20'>
                  <input type="number" placeholder="Number of Travellers" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border" />
                  <input type="text" placeholder="Counrty of origin" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"/>
                </div>


                <div className='flex  justify-between gap-20'>
                  <input type="email" placeholder="Email" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"/>
                  <input type="text" placeholder="Phone Number" className="py-3 px-6  rounded-md w-fit bg-white text-emerald-950 border"/>
                </div>
                <textarea placeholder="Message" className="py-3 px-6  rounded-md w-full bg-white text-emerald-950 border"></textarea>
                <div className='flex items-center gap-5'>
                  <input type="checkbox" />
                  <p className='text-xl text-emerald-900'>
                    By clicking on the SUBMIT button, I accept the terms of
                    processing of my personal data.
                  </p>
                </div>
                <Button className="uppercase" variant="primary">
                    Submit
                </Button>
              </form>
            </div>
        </Container>
    </section>
  )
}

import { ContactForm, Heading } from '@/components'
import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
<div className="m-auto" >      
         <div style={{ height:"100vh", zIndex:-40 , background:'linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .51802), rgba(0, 0, 0, .3))'}}>
            <div/>
              <Image
                alt="about-us"
                src="/images/pic-31.jpg"
                quality={100}
                fill
                sizes="100vw"
                 style={{
                    objectFit: 'cover', position:"absolute" , zIndex:-50 ,
                    }}              
                />  
          <div className="flex flex-col justify-center items-center h-full " >
            <Heading as="h1" className=" flex text-6xl text-white">
             Talk to us.. 
              </Heading>
          </div>
    </div>
<ContactForm/>
</div>

  )
}

export default ContactPage
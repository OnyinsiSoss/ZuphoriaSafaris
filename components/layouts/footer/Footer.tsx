
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { LiaTripadvisor } from "react-icons/lia";


export const Footer = () => {
  return (
    <div className="p-2 sm:p-4">
      <footer className="m-auto bg-emerald-900 rounded-3xl">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2  gap-5 sm:flex-cols-2 lg:flex-row justify-around ">
          <div className="flex justify-center">
            <Link href="/" className="z-20 object-cover shrink flex items-center ">
                <Image
                  src="/images/logo.png"
                  width={350} height={300} alt="Zuphoria"
                />           
            </Link>            
          </div>
          <div className="flex  items-center justify-center capitalize">
            <ul className="text-xl text-amber-100">
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-300"><a href="/about-us">about us</a></li>
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-300"><a href="/services">Our Safaris</a></li>
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-300"><a href="">Our Experiences</a></li>
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-300"><a href="#">Through Our Eyes</a></li>
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-300"><a href="#">Enquire more</a></li>
            </ul>
          </div>          
          <div className="flex items-center gap-10 flex-col justify-center">
            <ul className="text-xl  gap-10 text-amber-100">
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-500"><a href="tel:+254716605815">(123) 456-7890</a></li>
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-500"><a href="#">123 Lanet road, Nakuru</a></li>
              <li className="transition-all ease-in-out hover:scale-110 hover:text-amber-500"><a href="mailto:samuelonyinsi@gmail.com"> zuphoriasafaris@gmail.com</a></li>
            </ul>
          </div>
          <div className="flex items-center justify-center  ">
          <ul className="flex gap-5" >
            <li className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"><a href="#">< FaYoutube/></a></li>
            <li className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"><a href="https://www.facebook.com/Zuphoria-Safaris-61571774026027/" target='blank'>< FaFacebook/></a></li>
            <li className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"><a href="https://instagram.com/zuphoriazurusafaris" target='blank'>< FaInstagram/></a></li>
            <li className="w-[40px] hover:bg-amber-100 bg-stone-500 h-[40px] flex items-center justify-center rounded-full transition-all ease-in-out hover:scale-110 text-xl hover:text-stone-500 text-amber-100"><a href="#">< LiaTripadvisor/></a></li> 
          </ul>
          </div>
        </div>
        <div className="text-amber-100 text-md text-center py-10  ">
          <p>&copy; 2025 Zuphoria Safaris. All rights reserved.</p>
        </div>
      </footer>
    </div>

  );
};
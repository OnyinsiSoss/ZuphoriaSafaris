import {
  Facebook,
  Instagram,
  LindkedlnFooter,
} from "@/components/elements";
import Link from "next/link";
import Image from "next/image";


export const Footer = () => {
  return (
    <div className="mt-15">
      <footer className=" sm:py-12 relative overflow-hidden">
        <div className=" relative">
          <div className="grid sm:grid-cols-6 xl:grid-cols-12 gap-8">
            <div className="col-span-6 items-center object-cover flex top-0 justify-center h-fit ">
              <Link href="/" className="z-20 object-cover flex items-center ">
                <Image
                  src="/images/logo.png"
                  width={350} height={300} alt="Zuphoria"
                />          
              </Link>            
            </div>
            <div className="col-span-6 grid sm:grid-cols-6 gap-2">
              <div className="col-span-4 w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-2 grid sm:col-span-3  justify-center">
                <ul className="list-none text-white flex align-middle flex-col gap-10 ">
                  <label className="text-white font-semibold">Quick Links</label>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">How it works</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
                <ul className="list-none text-white flex flex-col gap-10">
                  <label className="text-white font-semibold">Resources</label>
                  <li>
                    <Link href="/">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/">How it works</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row gap-4 items-center  w-fit h-fit duration-300">
                <div className="flex items-center gap-4 p-3 bg-white/25 rounded-full hover:bg-white duration-300 ">
                  <span className="bg-primary-300 p-3 flex items-center justify-center rounded-full">
                    <Facebook />
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/25 rounded-full hover:bg-white duration-300">
                  <span className="bg-primary-300 p-3 flex items-center justify-center rounded-full">
                    <Instagram />
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/25 rounded-full hover:bg-white duration-300">
                  <span className="bg-primary-300 p-3 flex items-center justify-center rounded-full">
                    <LindkedlnFooter />
                  </span>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

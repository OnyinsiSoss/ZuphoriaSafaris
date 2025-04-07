import {
  Container,
  Heading,
  LindkedlnFooter,
  Linkedln,
  SubTitle,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="m-auto bg-secondary-950">
      <div className="">
        <div className="" >          
          <div style={{ height:"100vh", zIndex:-40 , background:'linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .5))'}}>
                <Image
                  alt="about-us"
                  src="/images/Pic-23.JPG"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                      objectFit: 'cover', position:"absolute" , zIndex:-50 ,
                      }}
                />  
            <div className="flex  justify-center items-center h-full lg:text-6xl sm:text-6xl text-4xl text-white" >
              <Heading as="h1" className= "">
              THe Great Mara Migration 
            </Heading>
            </div>
          </div>
      </div>
      </div>
      <Container className="m-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-2 flex flex-col gap-4 items-start justify-between">
            <Link href="/blog" className="text-slate-900">
              Back to blog
            </Link>
            <div className="flex flex-col">
              <div className="">
                <Image
                  src="/images/brian.jpg"
                  alt="Brian"
                  height={40}
                  width={40}
                  className="h-[40px] object-cover rounded-full"
                />
                <span className="text-slate-900">Nyahe Mwaura</span>
              </div>
              <span className="text-slate-900">Safari advisor</span>
            </div>
          </div>
          <div className="col-span-4 flex flex-col my-8 gap-8 items-start md:text-center md:items-center">
            <span className="bg-white rounded-full px-2 py-1">Destination</span>
            <Heading as="h1" className="text-section text-slate-900 leading-none">
              The Great Widerbeast mogration
            </Heading>
            <div className="flex gap-3 text-slate-900">
              <span>9 min read</span>
              <span>Dec 11, 2023</span>
            </div>
          </div>
          <div className="col-span-2 text-slate-900 flex flex-col md:items-end justify-end">
            <span className="mb-3">Share</span>
            <div className="flex gap-3">
              <Linkedln />

            </div>
          </div>
        </div>
        <div className="rounded-3xl my-4 md:my-8 flex flex-col items-center">
          <Image
            src="/images/Pic-41.JPG"
            alt="Blog A"
            width={330}
            height={330}
            className="rounded-3xl w-full h-full object-cover"
          />
          <div className="max-w-3xl text-slate-900 my-8 md:my-16 flex flex-col md:gap-16 gap-8">
            <p>
             The Migration Safari and Adventure in the Mara is one of our most popular Safari sold! It occurs during the Annual Great Migration of wildebeest (July to November) in the world-famous Maasai Mara Game Reserve. Get up close and personal with hundreds of thousands of wildebeest and zebras, roaming the plains of the Mara and crossing the Mara River with spectacular hunting scenes of Big Cats and Crocodiles. Your accommodation is in a boutique & intimate luxury camp in an excellent location close to the various migration points. In addition, you will visit the bird paradise of Lake Naivasha, one of Kenya’s scenic Great Rift Valley Lakes

            
            </p>
            <div className="flex flex-col items-start">
              <h3 className="text-title">The Basics of Solar Energy</h3>
              <ul className="list-decimal pl-6">
                <li>
                  Photovoltaic Cells
                  <ul className="list-disc pl-6">
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis, quidem. Facilis at facere quasi molestias hic.
                      Doloribus quae maiores laboriosam modi id. Voluptatibus,
                      dolorem quaerat rerum rem sunt accusantium molestiae!
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus, inventore nisi. Laboriosam corrupti, expedita
                      alias asperiores assumenda perspiciatis porro dignissimos
                      quam repellat in sit harum beatae. Molestias consectetur
                      labore ipsa.
                    </li>
                  </ul>
                </li>
                <li>
                  Photovoltaic Cells
                  <ul className="list-disc pl-6">
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis, quidem. Facilis at facere quasi molestias hic.
                      Doloribus quae maiores laboriosam modi id. Voluptatibus,
                      dolorem quaerat rerum rem sunt accusantium molestiae!
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus, inventore nisi. Laboriosam corrupti, expedita
                      alias asperiores assumenda perspiciatis porro dignissimos
                      quam repellat in sit harum beatae. Molestias consectetur
                      labore ipsa.
                    </li>
                  </ul>
                </li>
                <li>
                  Photovoltaic Cells
                  <ul className="list-disc pl-6">
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis, quidem. Facilis at facere quasi molestias hic.
                      Doloribus quae maiores laboriosam modi id. Voluptatibus,
                      dolorem quaerat rerum rem sunt accusantium molestiae!
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus, inventore nisi. Laboriosam corrupti, expedita
                      alias asperiores assumenda perspiciatis porro dignissimos
                      quam repellat in sit harum beatae. Molestias consectetur
                      labore ipsa.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-primary-300 p-10 rounded-3xl">
              <div className="grid gap-3">
                <h2 className="text-title text-black leading-none">
                  Your Source for Green Energy Updates
                </h2>

                <div className="flex sm:flex-row flex-col sm:gap-3 sm:items-center justify-center">
                  <input
                    placeholder="Your e-mail"
                    className="py-3 px-6 rounded-full flex-grow mb-3 sm:mb-0"
                  />
                  <button className="px-6 py-3 bg-primary-950 rounded-full text-slate-900">
                    Get in touch
                  </button>
                </div>
              </div>
            </div>
            {/* Quote */}
            <div className=" shrink-0  sm:col-span-1 p-10 rounded-3xl">
              <p className="text-left text-slate-900 text-sub-title min-h-[140px]">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Earum magnam non, repellendus ab commodi, expedita fugit
                minima maxime autem doloribus ratione similique odit quo fugiat
                nostrum soluta sint temporibus itaque.!”
              </p>
              <div className="flex gap-6 md:items-center sm:flex-row mt-3 md:mt-0 ">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                  <Image
                    src="/images/bruno.jpg"
                    alt="Expert Image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                  <div className="text-white flex flex-col ">
                    <h3 className="text-sub-title">Jenny Wilson</h3>
                    <p className="text-slate-900 text-sm opacity-90">
                      Solar energy service{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="text-title">The Basics of Solar Energy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus atque maiores, ducimus nulla corporis, sed rem quod vel
                ut ad quaerat eaque molestias eveniet recusandae amet itaque?
                Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Possimus atque maiores, ducimus nulla corporis, sed rem
                quod vel ut ad quaerat eaque molestias eveniet recusandae amet
                itaque? Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo.
              </p>
            </div>
            <Image
              src="/images/Pic-9.jpg"
              alt="Blog A"
              width={330}
              height={330}
              className="w-full h-full group-hover:scale-110 duration-300 rounded-3xl  object-cover"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-title">The Basics of Solar Energy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus atque maiores, ducimus nulla corporis, sed rem quod vel
                ut ad quaerat eaque molestias eveniet recusandae amet itaque?
                Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Possimus atque maiores, ducimus nulla corporis, sed rem
                quod vel ut ad quaerat eaque molestias eveniet recusandae amet
                itaque? Perferendis, iste mollitia! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nesciunt praesentium quisquam a
                magni voluptatem nisi repudiandae facilis sunt eum provident
                error tenetur, culpa fuga doloremque iusto asperiores architecto
                modi illo.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8 p w-full px-10 py-8  rounded-3xl bg-beige-primary text-black">
              <div className="h-[56px] w-[56px] shrink-0 relative">
                <Image
                  src="/images/bruno.jpg"
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-full">
                <div className=" flex flex-col ">
                  <h3 className="text-sub-title font-bold">Jenny Wilson</h3>
                  <p className=" text-sm opacity-90">Solar energy service </p>
                </div>
                <p className="">
                  Leslie Alexander is a distinguished Solar Energy Specialist at
                  the forefront of the renewable energy revolution. With a
                  passion for sustainable technology and a commitment to
                  addressing the global energy crisis, Leslie has dedicated her
                  career to advancing the field of solar energy.
                </p>
                <LindkedlnFooter />
              </div>
            </div>
          </div>
        </div>

        <div>
          <SubTitle className="" subTitle="More like this" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/Pic-9.jpg"
                    alt="Blog A"
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-slate-900 text-sub-title mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Link>
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/brian.jpg"
                      alt="Brian"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-slate-900">Leslie Alexander</span>
                  </div>
                  <span className="text-slate-900">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/Pic-9.jpg"
                    alt="Blog A"
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-slate-900 text-sub-title mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Link>
                  </Heading>
                  <p className="text-neutral-400">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/brian.jpg"
                      alt="Brian"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-slate-900">Leslie Alexander</span>
                  </div>
                  <span className="text-slate-900">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px] ">
                <Link href="/blog/a">
                  <Image
                    src="/images/Pic-9.jpg"
                    alt="Blog A"
                    width={330}
                    height={330}
                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-slate-900 text-sub-title mb-4">
                    <Link href="/blog/a">
                      Harnessing the Power of the Sun: Exploring the World of
                      Solar Energy
                    </Link>
                  </Heading>
                  <p className="text-slate-900">
                    Solar energy is revolutionizing the way we power our world.
                    In this blog post,sustainable energy source for a brighter
                    future.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/brian.jpg"
                      alt="Brian"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-slate-900">Leslie Alexander</span>
                  </div>
                  <span className="text-slate-900">9 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailPage;

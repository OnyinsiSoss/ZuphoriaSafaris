import { Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";

export const Blog = () => {
  return (
    <Section className="">
      <Container className="m-auto px-24">
        <div>
          <div className="w-full flex justify-between items-center">
            <Heading as="h2" className="text-section leading-none text-white">
              Blog
            </Heading>
            <button className="border px-6 py-3 rounded-full text-white">
              <Link href="/blog">
              See More
              </Link>            
            </button>
          </div>
          <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
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
                  <Heading as="h3" className="text-white text-sub-title mb-4">
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
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                <Image
                  src="/images/Pic-9.jpg"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
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
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
            <div className="flex group flex-col gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                <Image
                  src="/images/Pic-9.jpg"
                  alt="Blog A"
                  width={330}
                  height={330}
                  className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                />
              </div>
              <div>
                <div>
                  <Heading as="h3" className="text-white text-sub-title mb-4">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
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
                      alt="Bruno"
                      height={40}
                      width={40}
                      className="h-[40px] object-cover rounded-full"
                    />
                    <span className="text-white">Leslie Alexander</span>
                  </div>
                  <span className="text-white">9 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

import { Container, Heading, } from "@/components";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="bg-secondary-950">
      <div className="">
        <div
          style={{
            height: "100vh",
            zIndex: -40,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .7), rgba(0, 0, 0, .3))",
          }}
        >
          <Image
            alt="about-us"
            src="/images/Pic-31.JPG"
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
              className=" flex font-[angella] text-7xl text-white"
            >
              Safari Blog
            </Heading>
          </div>
        </div>
      </div>
      <Container className="m-auto p-24">
        <div className="text-white">
          <Heading as="h1" className="text-hero leading-none">
            Our Latest Posts
          </Heading>
          <p className="max-w-md mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque
            eum in aspernatur, placeat saepe aut quidem sit sunt officia iure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12 mt-24">
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
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post,sustainable energy source for a brighter
                  future.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/bruno.jpg"
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
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post,sustainable energy source for a brighter
                  future.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/bruno.jpg"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex group flex-col gap-8">
            <div className="aspect-video rounded-3xl overflow-hidden h-[360px] md:h-[250px] ">
              <Link href="/blog/b">
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
                  <Link href="/blog/b">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </Link>
                </Heading>
                <p className="text-neutral-400">
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post,sustainable energy source for a brighter
                  future.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/bruno.jpg"
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
                <Heading as="h3" className="text-white text-sub-title mb-4">
                  <Link href="/blog/a">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </Link>
                </Heading>
                <p className="text-neutral-400">
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post,sustainable energy source for a brighter
                  future.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/bruno.jpg"
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
                <Heading as="h3" className="text-white text-sub-title mb-4">
                  <Link href="/blog/a">
                    Harnessing the Power of the Sun: Exploring the World of
                    Solar Energy
                  </Link>
                </Heading>
                <p className="text-neutral-400">
                  Solar energy is revolutionizing the way we power our world. In
                  this blog post,sustainable energy source for a brighter
                  future.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/bruno.jpg"
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
      </Container>
    </div>
  );
};

export default BlogPage;

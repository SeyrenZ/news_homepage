import { Logo, MenuIcon } from "@/public";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewsPage = () => {
  return (
    <div className="w-auto max-w-[1440px] sm:w-full h-auto px-32 py-20 sm:px-5 sm:py-7 rounded-xl shadow-xl bg-white flex flex-col gap-y-14">
      {/* Navbar */}

      <nav className="flex justify-between items-center ">
        <Logo />
        <MenuIcon className="lg:hidden md:hidden" />
        <div className="flex gap-x-10 sm:hidden">
          <Link
            href="/"
            className="text-md font-medium text-[#5d5f79] hover:text-[#f15e50]"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-md font-medium text-[#5d5f79] hover:text-[#f15e50]"
          >
            New
          </Link>
          <Link
            href="/"
            className="text-md font-medium text-[#5d5f79] hover:text-[#f15e50]"
          >
            Popular
          </Link>
          <Link
            href="/"
            className="text-md font-medium text-[#5d5f79] hover:text-[#f15e50]"
          >
            Trending
          </Link>
          <Link
            href="/"
            className="text-md font-medium text-[#5d5f79] hover:text-[#f15e50]"
          >
            Categories
          </Link>
        </div>
      </nav>
      {/* Content */}
      <div className=" grid grid-cols-3 sm:grid-cols-1 gap-x-8">
        <div className="h-[300px] col-span-2 sm:col-span-1">
          <Image
            className=""
            src="/image-web-3-desktop.jpg"
            width={1460}
            height={600}
            alt="web3"
          ></Image>
        </div>
        <div className="p-7 py-8 bg-[#00001a] row-span-2 sm:row-span-2">
          <div className="flex flex-col gap-y-8 sm:gap-y-2">
            <div className="text-[#e9ab53] text-5xl sm:text-xl font-bold">
              New
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="text-2xl sm:text-lg font-semibold text-[#fffdfa] hover:text-[#e9ab53] hover:cursor-pointer">
                Hydrogen VS Eletric Cars
              </div>
              <div className="text-md sm:text-sm font-normal text-[#c5c6ce]">
                Will hydrogen-fueled cars ever catch up
                <br /> to EVs?
              </div>
            </div>
            <hr className=" opacity-25" />
            <div className="flex flex-col gap-y-3">
              <div className="text-2xl  sm:text-lg font-semibold text-[#fffdfa] hover:text-[#e9ab53] hover:cursor-pointer">
                The Downsides of AI Artistry
              </div>
              <div className="text-md sm:text-sm font-normal text-[#c5c6ce]">
                What are the possible adverse effects of
                <br /> on-demand AI image generation?
              </div>
            </div>
            <hr className=" opacity-25" />
            <div className="flex flex-col gap-y-3">
              <div className="text-2xl sm:text-lg font-semibold text-[#fffdfa] hover:text-[#e9ab53] hover:cursor-pointer">
                Is VC Funding Dryng Up?
              </div>
              <div className="text-md sm:text-sm font-normal text-[#c5c6ce]">
                Private funding by VC firms is down 50%
                <br />
                YOY. We take a look at thwat that means.
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto text-6xl sm:text-xl font-extrabold">
          The Bright
          <br />
          Future of
          <br />
          Web 3.0?
        </div>
        <div className="flex flex-col items-start justify-between">
          <div className="text-md text-[#5d5f79] font-medium">
            We dive unto the next evoluiton of the web that claims to put the
            power of the platforms back into the hands of the people.But is it
            really
            <br /> fulfilling its promise?
          </div>
          <button className="w-52 p-3 rounded-sm bg-[#f15e50] hover:bg-[#00001a] text-white font-medium uppercase text-lg tracking-widest">
            READ MORE
          </button>
        </div>
        {/* Content 2 */}
        <div className="flex gap-x-4 mt-16 sm:mt-0">
          <Image
            className="sm:w-[90px] sm:h-[142px]"
            src="/image-retro-pcs.jpg"
            width={100}
            height={154}
            alt="retro pcs"
          />
          <div className="flex flex-col justify-between">
            <div className="text-4xl text-[#c5c6ce] font-semibold">01</div>
            <div className="flex flex-col gap-y-2">
              <div className="text-[#00001a] hover:text-[#f15e50] text-xl font-bold">
                Reviving Retro PCs
              </div>
              <div className="text-md text-[#5d5f79] font-normal">
                What happens when old PCs <br />
                are given modern upgrades?
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 mt-16 sm:mt-0">
          <Image
            className="sm:w-[90px] sm:h-[142px]"
            src="/image-top-laptops.jpg"
            width={100}
            height={154}
            alt="top laptops"
          />
          <div className="flex flex-col justify-between">
            <div className="text-4xl text-[#c5c6ce] font-semibold">02</div>
            <div className="flex flex-col gap-y-2">
              <div className="text-[#00001a] hover:text-[#f15e50] text-xl font-bold">
                Top 10 Laptops of 2022
              </div>
              <div className="text-md text-[#5d5f79] font-normal">
                Our best pick for various
                <br />
                needs and budgets
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 mt-16 sm:mt-0">
          <Image
            className="sm:w-[90px] sm:h-[142px]"
            src="/image-gaming-growth.jpg"
            width={100}
            height={154}
            alt="gaming growth"
          />
          <div className="flex flex-col justify-between">
            <div className="text-4xl text-[#c5c6ce] font-semibold">03</div>
            <div className="flex flex-col gap-y-2">
              <div className="text-[#00001a] hover:text-[#f15e50] text-xl font-bold">
                Reviving Retro PCs
              </div>
              <div className="text-md text-[#5d5f79] font-normal">
                How the pandemic has sparked <br />
                fresh opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

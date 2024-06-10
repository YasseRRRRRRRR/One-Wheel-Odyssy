import MaxWidthWrapper from "@/components/maxWidthWrapper";
import CascadingAvalanch from "@/components/cascadingAvalanch";
// import Phone from "@/components/phone";
// import { X } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:ob-52">
          <div className="col-span-1 p-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  width={70}
                  height={70}
                  src="/snake-1.png"
                  alt="LOGo thingy I need to change"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your image on a{" "}
                <span className="bg-red-600 px-2 text-white">Custom</span> Phone
                Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your worst nightmares with your own money{" "}
                <span className="font-semibold">bitch</span> One-Wheel-Odyssy is
                not only a useless one time purchase that you probably
                won&apos;t ever use, it will also make you look like a complete
                nonce, I mean who the fuck buys unicycles anymore
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  {/* <X /> */}
                  <li className="flex gap-1.5 items-center text-left">
                    Low-quality, cheap material
                  </li>
                </div>
                <div className="space-y-2">
                  {/* <X /> */}
                  <li className="flex gap-1.5 items-center text-left">
                    4 year print nongarantee
                  </li>
                </div>
                <div className="space-y-2">
                  {/* <X /> */}
                  <li className="flex gap-1.5 items-center text-left">
                    human legs not supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 ">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-5.jpg"
                    alt="unhappy customer's face"
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-1.png"
                    alt="unhappy customer's face"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-5.jpg"
                    alt="unhappy customer's face"
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-1.png"
                    alt="unhappy customer's face"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start ">
                  <div className="flex gap-0.5">
                    <div className="h-4 w-4 bg-red-600" />
                    <div className="h-4 w-4 bg-red-600" />
                    <div className="h-4 w-4 bg-red-600" />
                    <div className="h-4 w-4 bg-red-600" />
                    <div className="h-4 w-4 bg-red-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> unhappy
                    customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full h-[1500px] lg:col-span-1 w-full hidden lg:flex items-start justify-around px-4 sm:px-16 md:px-0  lg:mx-0 l ">
            <CascadingAvalanch />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

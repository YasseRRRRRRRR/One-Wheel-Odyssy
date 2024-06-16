import MaxWidthWrapper from "@/components/maxWidthWrapper";
import CascadingAvalanch from "@/components/cascadingAvalanch";
import { X, Star, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Icons } from "@/components/icon";
import Reviews from "@/components/reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:ob-52">
          <div className="col-span-1 p-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <Image
                  width={200}
                  height={200}
                  src="/cat.jpg"
                  alt="the cutest illustration of cat on a unicycle afore a red background"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-6xl">
                Unleash your inner{" "}
                <span className="bg-red-600 px-2 text-white">adventurer</span>{" "}
                on one wheel
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Have you ever looked to yourself and thought <br />
                <span className="italic font-semibold">
                  --Huh, you know what would really make me feel really good
                  right now... a unicycle--
                </span>{" "}
                <br />
                No, well that doesn&apos;t matter, here in one-wheel-odyssy
                <span>&trade;</span> we believe in overconsumption, and
                indulging your darkest impulses.
              </p>
              <span className="mt-6 text-base">
                Yes, You simply need it, and must have, go on, let us rest on
                your shelf and collect dust.
              </span>
              <div className="mt-8 flex justify-center gap-2">
                <Link
                  href="/configure/collections"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  Get Started
                  {/* not sure if i should leave it or take it away */}
                  {/* <ArrowRight />  */}
                </Link>
              </div>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <X className="h-5 w-5 shrink-0 text-red-600" />
                    Low-quality, cheap material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <X className="h-5 w-5 shrink-0 text-red-600" />4 year
                    garantee (maybe)
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <X className="h-5 w-5 shrink-0 text-red-600" />
                    human legs not supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 ">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-1.png"
                    alt="unhappy customer's face"
                    className="inline-block object-cover object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-3.jpg"
                    alt="unhappy customer's face"
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-2.jpg"
                    alt="unhappy customer's face"
                    className="inline-block object-cover object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img
                    src="/users/user-4.jpg"
                    alt="unhappy customer's face"
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start ">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-red-600 fill-red-600" />
                    <Star className="h-4 w-4 text-red-600 fill-red-600" />
                    <Star className="h-4 w-4 text-red-600 fill-red-600" />
                    <Star className="h-4 w-4 text-red-600 fill-red-600" />
                    <Star className="h-4 w-4 text-red-600 fill-red-600" />
                  </div>
                  <p>
                    <span className="font-semibold">3.250</span> unhappy
                    customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full h-[800px] lg:col-span-1 w-full hidden lg:flex items-start justify-around px-4 sm:px-16 md:px-0  lg:mx-0 l ">
            <CascadingAvalanch />
          </div>
        </MaxWidthWrapper>
      </section>
      {/* testimonials*/}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers
                {/* cahnge this imediatly it looks out of place in a unicycle website */}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-red-500" />
              </span>{" "}
              said
            </h2>
            <Image
              width={200}
              height={200}
              src="/circus.png"
              alt="illustration of a man juggling somesort of bowling pins while on unicycle afore a red background, very on theme if I do say so myself"
              className="order-0 lg:order-2 h-auto"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;Personally I didn&apos;t see the point of owning a
                  unicycle, the whole bipedle thing for a start is not really my
                  thing but I have to say, it has really made me{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    instantly much more interesting
                  </span>
                  , and got me out of the adoption agency in minutes, would
                  highly recommend&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-3.jpg"
                  alt="unhappy customer's face, now much larger with a rounded edges"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Elmer</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-red-600" />
                    <p className="text-sm">Verified good boy</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;What, What are you talking about, I would never make
                  such a frivoulous purchase, w.what, who even are you{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    how did you even get here,
                  </span>{" "}
                  what are you doing in my house&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-2.jpg"
                  alt="unhappy customer's face, now much larger with a rounded edges"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">lillith</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-red-600" />
                    <p className="text-sm">Prefers the name Lilly</p>
                  </div>
                </div>
              </div>
            </div>
            {/* third review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
                <Star className="h-5 w-5 text-red-600 fill-red-600 " />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;Renting a unicycle from One-Wheel Odyssey was an amazing
                  experience. The staff was friendly and helpful, and the
                  unicycle was in great condition.{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    I had a blast
                  </span>{" "}
                  exploring the city on one wheel!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-1.png"
                  alt="unhappy customer's face, now much larger with a rounded edges"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Joshua</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-red-600" />
                    <p className="text-sm">Unverified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* not reviews just some products gotta change that component name ASAP */}
      <section className="bg-slate-100 py-24">
        <Reviews />
      </section>
    </div>
  );
}

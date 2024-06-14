"use client";

import React, { useRef } from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Reviews = () => {
  // Gotta be a better way to do this
  const firstContainerRef = useRef(null);
  const isfirstInView = useInView(firstContainerRef);

  const secondContainerRef = useRef(null);
  const isSecondInView = useInView(secondContainerRef);
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        {/* <p>[section n. 03]</p>
        <p>something about the quiz then the call to action</p> */}
        <motion.div
          ref={firstContainerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isfirstInView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-screen-xl"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded  p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className=" mt-2 tracking-tight text-balance !leading-tight font-bold text-4xl md:text-5xl text-gray-900">
                    Whether you are a{" "}
                    <span className="bg-red-600 px-2 text-white">hobbiest</span>
                  </h2>
                </header>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block overflow-hidden">
                    <div className="relative h-[450px] ">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/unpaid-models-pleaseforgiveme/psychopath1.jpg"
                        alt="picture of a person enjoying the product"
                        className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                      />
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/product-list/for-the-sociopaths.jpg"
                        alt="a better picture of the product itself"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Club 20" 3-Wheeler Unicycle
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$500.00</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block overflow-hidden">
                    <div className="relative h-[450px]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/unpaid-models-pleaseforgiveme/electrical-person.jpg"
                        alt="picture of a person enjoying the product"
                        className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                      />
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/product-list/electrical-unicyle.jpg"
                        alt="a better picture of the product itself"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        16-inch Self-balance Electric Unicycle
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$299.66</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={secondContainerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isSecondInView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-screen-xl py-8  sm:pb-12 "
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="order-1 lg:order-2 grid place-content-center rounded -gray-10bg0 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className=" mt-2 tracking-tight text-balance !leading-tight font-bold text-4xl md:text-5xl text-gray-900">
                    Or a seasoned{" "}
                    <span className="bg-red-600 px-2 text-white">
                      professional
                    </span>
                  </h2>

                  <p className="mt-4  text-gray-500">
                    or maybe just bored we have got you covered
                  </p>
                </header>
                <div className="mt-8 hidden lg:inline-block">
                  <Link
                    href="/configure/upload"
                    className={buttonVariants({
                      size: "lg",
                    })}
                  >
                    Get your own unicycle
                    <ArrowRight className="ml-1.5 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1  lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block overflow-hidden">
                    <div className="relative h-[450px]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/unpaid-models-pleaseforgiveme/vintage-professionals.jpg"
                        alt="picture of a person enjoying the product"
                        className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                      />
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/product-list/larger-tire-model.jpg"
                        alt="a better picture of the product itself"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        24in unicycle with Alloy Rim-659340
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$141.38</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block overflow-hidden">
                    <div className="relative h-[450px]">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/unpaid-models-pleaseforgiveme/weirdly-shaped-unicycle.jpg"
                        alt="picture of a person enjoying the product"
                        className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                      />
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src="/product-list/longer-pedals-model.jpg"
                        alt="a better picture of the product itself"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Club 5-Foot Deluxe Giraffe
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$300.00</p>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex justify-center lg:hidden">
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  Get your own unicycle
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Reviews;

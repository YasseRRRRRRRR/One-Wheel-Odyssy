import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Reviews = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center">
      {/* <p>[section n. 03]</p>
        <p>something about the quiz then the call to action</p> */}
      <div className="mx-auto max-w-screen-xl  pt-8  sm:pt-12 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded  p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Wether you are a hobbiest
                </h2>

                {/* <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p> */}
              </header>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl  pb-8  sm:pb-12 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="order-1 lg:order-2 grid place-content-center rounded -gray-10bg0 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Or a professional
                </h2>

                <p className="mt-4 text-gray-500">
                  or maybe just bored we have you covered
                </p>
              </header>
              <div className="mt-8 hidden lg:inline-block">
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  {/* "hidden lg:inline-block" */}
                  Get your customized unicycle
                  {/* dakl */}
                  {/* not sure if i should leave it or take it away */}
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </div>
              {/* <a
                href="#"
                className="hidden lg:inline-block mt-8  rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              ></a> */}
            </div>
          </div>

          <div className="order-2 lg:order-1  lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
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
                {/* "hidden lg:inline-block" */}
                Get your customized unicycle
                {/* dakl */}
                {/* not sure if i should leave it or take it away */}
                {/* <ArrowRight />  */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Reviews;

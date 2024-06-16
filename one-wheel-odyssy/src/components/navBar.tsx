import React from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  ArrowRight,
  ChevronDown,
  CircleUser,
  MoveRight,
  Search,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <p>
              one-<span className="text-red-600">Wheel</span>-odyssy
            </p>
          </Link>

          <div className="h-full flex justify-around items-center space-x-4">
            {user ? (
              <>
                {/* Search Bar */}
                <form className=" hidden md:flex ml-auto flex-1 md:flex-initial">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search for a specific unicycle..."
                      className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    />
                  </div>
                </form>
                {/* Language */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      // className="hidden sm:flex "
                    >
                      FI
                      {/* <ChevronDown className="ml-1.5 h-4 w-4" /> */}
                      <span className="sr-only">Toggle Language menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="z-[101]">
                    <DropdownMenuItem>FI</DropdownMenuItem>
                    <DropdownMenuItem>EN</DropdownMenuItem>
                    <DropdownMenuItem>SV</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="z-[101]">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {isAdmin ? (
                      <DropdownMenuItem>
                        <Link href="/api/auth/logout">Dashboard</Link>
                      </DropdownMenuItem>
                    ) : null}
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/api/auth/logout">Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Shopping Cart */}
                {/* on larger devices it's a popover */}{" "}
                <div className="hidden lg:block ">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Toggle ShoppingCart</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-screen max-w-sm  z-[101] border border-red-600   py-8 px-8">
                      {/* <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                          <span className="sr-only">Close cart</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button> */}

                      <div className="mt-4 space-y-6">
                        <ul className="space-y-4">
                          {/* example item */}
                          {/* <li className="flex items-center gap-4">
                            <img
                              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                              alt=""
                              className="size-16 rounded object-cover"
                            />

                            <div>
                              <h3 className="text-sm text-gray-900">
                                Basic Tee 6-Pack
                              </h3>

                              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                  <dt className="inline">Size:</dt>
                                  <dd className="inline">XXS</dd>
                                </div>

                                <div>
                                  <dt className="inline">Color:</dt>
                                  <dd className="inline">White</dd>
                                </div>
                              </dl>
                            </div>
                          </li> */}
                          <li>Cart is empty</li>
                        </ul>

                        <div className="h-px w-full bg-zinc-200 hidden sm:block mb-6" />
                        <div className="space-y-4 flex flex-col text-center">
                          <Button variant="outline" size="lg">
                            <Link href="#">View my cart (0)</Link>
                          </Button>
                          <Button variant="default" size="lg">
                            <Link
                              href="#"
                              // className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                            >
                              Checkout
                            </Link>
                          </Button>
                          <Button variant="link" size="lg">
                            <Link
                              href="#"
                              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                            >
                              Continue shopping
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                {/* on mobile it is a slidover */}
                <div className="block lg:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        // className="rounded-full"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Toggle ShoppingCart</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="z-[101]">
                      <SheetHeader>
                        <SheetTitle>Shopping cart</SheetTitle>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">Cart is empty</div>
                      {/* <div className="h-px w-full bg-zinc-200 hidden sm:block mb-6"></div> */}

                      <SheetFooter>
                        <SheetClose asChild>
                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>$262.00</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6 flex justify-center">
                              <Button
                                // href="#"
                                // size="lg"
                                className="flex items-center justify-center rounded-md px-6 py-3"
                              >
                                Checkout
                              </Button>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                              <p>
                                or{" "}
                                <Button
                                  variant="link"
                                  className="font-medium text-red-600 hover:text-red-500"
                                >
                                  Continue Shopping
                                  {/* <span aria-hidden="true"> &rarr;</span> */}
                                  <MoveRight className="size-5 ml-1.5" />
                                </Button>
                              </p>
                            </div>
                          </div>

                          {/* <Button type="submit">Save changes</Button> */}
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </>
            ) : (
              <>
                {/* Register */}
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign in
                </Link>

                {/* Login  */}
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Log in
                </Link>

                {/* Language */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      // className="hidden sm:flex "
                    >
                      FI
                      {/* <ChevronDown className="ml-1.5 h-4 w-4" /> */}
                      <span className="sr-only">Toggle Language menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="z-[101]">
                    <DropdownMenuItem>FI</DropdownMenuItem>
                    <DropdownMenuItem>EN</DropdownMenuItem>
                    <DropdownMenuItem>SV</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>
                <Link
                  href="/configure/collections"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1 ",
                  })}
                >
                  Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;

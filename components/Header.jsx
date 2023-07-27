"use client";

import Link from "next/link";
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <header className="z-30 relative">
      <Wrapper>
        <Popover className="container mx-auto flex items-center justify-between border-b-2 px-6 py-2 h-24 bg-white mt-4">
          <img className="w-[130px] object-contain" src="/logo.png" alt="" />
          <div className="grow">
            <div className="hidden sm:flex items-center justify-end gap-2 md:gap-8 text-black">
              <Link href="/">Home</Link>
              <Link href="home" className="flex items-baseline justify-center">
                Our Services
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>
                </svg>
              </Link>
              <Link href="/about">About Us</Link>
              <Link href="home">Contact</Link>
              <Link href="/" className="bg-customGreen py-1 px-4">+90 212 919 05 55</Link>
            </div>
          </div>
          <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open Menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-[130px] object-contain"
                      src="/logo.png"
                      alt=""
                    />
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8 text-black">
                      <Link
                        href="/"
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                      >
                        Home
                      </Link>
                      <Link
                        href="home"
                        className="flex items-baseline"
                      >
                        Our Services
                        <svg
                          className="w-4 h-4 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>
                        </svg>
                      </Link>
                      <Link
                        href="/about"
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 "
                      >
                        About Us
                      </Link>
                      <Link
                        href="home"
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                      >
                        Contact
                      </Link>
                      <Link href="/" className="bg-customGreen py-1 px-4 w-full text-center">+90 212 919 05 55</Link>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Wrapper>
    </header>
  );
};

export default Header;

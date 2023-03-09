import React, { useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSorobanReact } from "@soroban-react/core";
import { ConnectButton } from "@soroban-react/connect-button";

import Link from "next/link";

const Header = () => {
  const [publickKey, setPublicKey] = useState(true);
  const sorobanContext = useSorobanReact()

useEffect(() => {
  getKey();
})

  const getKey = async() => {
    console.log(await window.freighterApi.getPublicKey(), "Connected")

    if(window.freighterApi.getPublicKey()){
      setPublicKey(false);
    }
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <section id="header h-[18vh]">
          <div className="container w-11/12 lg:w-11/12 mx-auto  pt-8">
            <div className="flex items-center lg:hidden">
              <div className="logo">
                <img src="/logo.svg" alt="Logo" className="w-9/12" />
              </div>

              {/* Mobile menu button*/}
              <Disclosure.Button className="ml-auto flex rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon
                    className="block h-10 w-10 text-lightgrey "
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3Icon
                    className="block h-10 w-10 text-dark "
                    aria-hidden="true"
                  />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden lg:flex justify-between">
              <div className="logo">
                <img src="/logo.svg" alt="Logo" className="w-5/12" />

                <div className="menu">
                  <ul className="flex lg:space-x-16 mt-5">
                    <li>
                      <Link href="#">Home</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="#">Community</Link>
                    </li>
                    <li>
                      <Link href="#">Docs</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="buttons flex space-x-4 items-center">
                <button className="bg-darkColor w-52 h-16 rounded-xl shadow-2xl">
                  <a className="text-white font-semibold">New Bounty</a>
                </button>
                {/* <button className="bg-lightblue w-52 h-16 rounded-xl shadow-2xl">
                  <a className="text-white font-semibold">Connect Wallet</a>
                </button> */}
   
               {publickKey && (
                <ConnectButton
                  label="Connect your Wallet"
                  sorobanContext={sorobanContext}
                />
                )}
                
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="h-screen px-3 pt-24 pb-3 bg-[#fff]">
              <div className="text-center">
                <ul className="space-y-3">
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Community</Link>
                  </li>
                  <li>
                    <Link href="#">Docs</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="buttons flex flex-col items-center justify-center mt-6">
                <button className="bg-pinkColor w-52 h-16 rounded-xl">
                  <a className="text-white font-semibold">New Bounty</a>
                </button>
                <button className="bg-lightblue w-52 h-16 rounded-xl mt-6">
                  <a className="text-white font-semibold">Connect Wallet</a>
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
};

export default Header;

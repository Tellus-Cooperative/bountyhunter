import React from "react";
import Cards from "../common/cards";
import Filterbutton from "../common/filters";

const LandingPage = () => {
  return (
    <>
      <section id="landingpage h-screen overflow-hidden">
        <div className="container w-11/12 lg:w-10/12 mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="cards">
              <div className="flex justify-between">
                <Filterbutton data="Type" />
                <Filterbutton data="Level" />
                <Filterbutton data="Topic" />
                <Filterbutton data="Payment" />
              </div>

              <div className="mt-6 overflow-y-auto h-[48%] lg:h-[80%]">
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>

            <div className="content mt-20 px-7 py-5 rounded-xl bg-cardscolor">
              <h1 className="pt-10 text-xl">Tellus Cooperative</h1>
              <h1 className="text-black mt-3 text-3xl font-medium">
                Soroban Contract Writing in Rust
              </h1>

              <div className="mt-8">
                <div className="flex space-x-3">
                  <button className="bg-lightgrey w-44 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                    <p className="text-sm">Cooperative </p>
                  </button>
                  <button className="bg-lightgrey w-44 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                    <p className="text-sm">Advanced</p>
                  </button>
                  <button className="bg-lightgrey w-44 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                    <p className="text-sm">Smart Contracts</p>
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-12">
                <button className="bg-lightgrey w-40 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                  <p>10,000 XLM</p>
                </button>

                <button className="bg-darkColor w-40 h-12 flex items-center justify-center rounded-2xl shadow-xl">
                  <h1>Apply</h1>
                </button>
              </div>

              <div className="mt-14 overflow-y-auto h-[30%]">
                <p className="robotosimple">
                  As a bounty hunter for the Soroban Contract Writing in Rust,
                  you will be responsible for thoroughly testing our platform
                  and identifying any potential security vulnerabilities or
                  bugs. You will be tasked with conducting comprehensive
                  penetration testing and code review to ensure that our
                  platform is secure, reliable, and efficient. Successful
                  candidates will have a strong understanding of Rust
                  development, as well as experience working with blockchain
                  technology and smart contract writing. You should be
                  comfortable working with cryptographic algorithms, as well as
                  developing and testing secure, reliable, and efficient.
                </p>
                <p className="robotosimple mt-5">
                As a bounty hunter for the Soroban Contract Writing in Rust,
                  you will be responsible for thoroughly testing our platform
                  and identifying any potential security vulnerabilities or
                  bugs. You will be tasked with conducting comprehensive
                  penetration testing and code review to ensure that our
                  platform is secure, reliable, and efficient. Successful
                  candidates will have a strong understanding of Rust
                  development, as well as experience working with blockchain
                  technology and smart contract writing. You should be
                  comfortable working with cryptographic algorithms, as well as
                  developing and testing secure, reliable, and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

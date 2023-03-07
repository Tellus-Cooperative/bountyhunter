import React from "react";

const Cards = () => {
  return (
    <section id="cards">
      <div className="cardContainer rounded-2xl mt-4 bg-cardscolor py-6 px-6 lg:px-10 shadow-xl">
        <div className="flex">
          <div className="hidden lg:block w-2/12">
            <img src="/image.png" alt="" />
          </div>
          <div className="w-full lg:w-10/12">
            <div className="flex flex-col lg:flex-row justify-between">
              <p className="text-sm">Tellus Cooperative</p>
              <button className="hidden lg:block bg-lightgrey w-40 h-7 flex items-center justify-center rounded-2xl shadow-xl">
                <p className="text-sm">10,000 XLM</p>
              </button>
            </div>
            <h1 className="text-black mt-3 text-xl lg:text-2xl">
              Soroban Contract Writing in Rust
            </h1>
            <button className="block lg:hidden mt-3 mb-2 bg-lightgrey w-40 h-7 flex items-center justify-center rounded-2xl shadow-xl">
                <p className="text-sm">10,000 XLM</p>
              </button>
          </div>
        </div>
        <div className="mt-3">
          <p className="robotosimple text-[12px] lg:text-sm">
            We're looking for experienced Rust developers to help us build and
            test our Soroban contract writing platform. As a bounty hunter, your
            task is to identify any vulnerabilities in our Soroban contract
            writing system...
          </p>

          <div className="mt-4">
            <div className="flex flex-wrap lg:space-x-3">
              <button className="bg-lightgrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                <p className="text-sm">Cooperative </p>
              </button>
              <button className="bg-lightgrey mb-4 ml-3 lg:0 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                <p className="text-sm">Advanced</p>
              </button>
              <button className="bg-lightgrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                <p className="text-sm">Smart Contracts</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;

import React, { useState } from "react";
import Cards from "../common/cards";
import Filterbutton from "../common/filters";
import cardSide from "./cards.json";

const filterMenu = [
  {
    title: "Type",
    menu: ["Cooperative", "Competitive", "Hackathon"],
  },
  {
    title: "Level",
    menu: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    title: "Topic",
    menu: ["Smart Contracts", "Vanilla Stellar", "Design"],
  },
  {
    title: "Payment",
    menu: ["0-1000 XLM ", "1001-10,000 XLM", "+10,001 XLM"],
  },
];

const LandingPage = () => {
  const [cardData, setCardData] = useState(cardSide.card[0]);
  const [mobView, setMobView] = useState(false);

  const pullData = (data) => {
    setCardData(data);
    setMobView(true);
  };

  return (
    <>
      <section id="landingpage h-screen overflow-hidden">
        <div className="container w-11/12 lg:w-10/12 mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="cards">
              <div className="flex justify-between">
                {filterMenu.map((item, index) => (
                  <Filterbutton key={index} data={item} />
                ))}
              </div>

              <div className={`${mobView?'hidden lg:block':' '} mt-6 overflow-y-auto h-[48%] lg:h-[78%] rounded-xl shadow-xl`}>
                {cardSide.card.map((item, index) => (
                  <Cards data={item} callBack={pullData} />
                ))}
              </div>
            </div>

            <div className="content mt-10 lg:mt-20 px-2 lg:px-7 py-5 rounded-xl bg-cardscolor h-[76%] rounded-xl shadow-xl">
            <i onClick={()=>setMobView(false)} className="text-3xl lg:hidden fal fa-long-arrow-left"></i>
              <h1 className="lg:pt-10 text-base lg:text-xl">{cardData?.subtitle}</h1>
              <h1 className="text-black mt-3 text-xl lg:text-3xl font-medium">
                {cardData?.title}
              </h1>

              <div className="mt-8">
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

              <div className="flex justify-between mt-6 lg:mt-12">
                <button className="bg-lightgrey w-40 h-10 flex items-center justify-center rounded-2xl shadow-xl">
                  <p className="text-sm">{cardData.xlm}</p>
                </button>

                <button className="bg-darkColor w-40 h-12 flex items-center justify-center rounded-2xl shadow-xl">
                  <h1 className="text-sm">Apply</h1>
                </button>
              </div>

              <div className="mt-14 overflow-y-auto h-[40%]">
                <p className="robotosimple">{cardData.longDescription}</p>
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

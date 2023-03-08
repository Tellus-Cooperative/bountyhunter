import React, {useState} from "react";
import Cards from "../common/cards";
import Filterbutton from "../common/filters";
import cardSide from './cards.json';

const filterMenu = [
  {
    title: "Type",
    menu: ["Cooperative","Competitive","Hackathon"]
  },
  {
    title: "Level",
    menu: ["Beginner","Intermediate","Advanced"]
  },
  {
    title: "Topic",
    menu: ["Smart Contracts","Vanilla Stellar","Design"]
  },
  {
    title: "Payment",
    menu: ["0-1000 XLM ","1001-10,000 XLM","+10,001 XLM"]
  }
]

const LandingPage = () => {

  const [cardData, setCardData] = useState(cardSide.card[0]);

  const pullData = (data)=> {
  setCardData(data)
  }

  return (
    <>
      <section id="landingpage h-screen overflow-hidden">
        <div className="container w-11/12 lg:w-10/12 mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="cards">
              <div className="flex justify-between">
                {filterMenu.map((item,index) => (
                <Filterbutton key={index} data={item} />
                ))}
              </div>

              <div className="mt-6 overflow-y-auto h-[48%] lg:h-[78%] rounded-xl shadow-xl">
                {cardSide.card.map((item,index) => (
                <Cards data={item} callBack={pullData}/>
                ))}
              </div>
            </div>

            <div className="content mt-20 px-7 py-5 rounded-xl bg-cardscolor h-[76%] rounded-xl shadow-xl">
              <h1 className="pt-10 text-xl">{cardData?.subtitle}</h1>
              <h1 className="text-black mt-3 text-3xl font-medium">
               {cardData?.title}
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
                  <p>{cardData.xlm}</p>
                </button>

                <button className="bg-darkColor w-40 h-12 flex items-center justify-center rounded-2xl shadow-xl">
                  <h1>Apply</h1>
                </button>
              </div>

              <div className="mt-14 overflow-y-auto h-[40%]">
                <p className="robotosimple">
                {cardData.longDescription}
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

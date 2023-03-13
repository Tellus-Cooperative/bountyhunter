import React, { useState, useEffect } from "react";
import Cards from "../common/cards";
import Filterbutton from "../common/filters";
import cardSide from "./cards.json";
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client";
import { allBounties, allSubmissions } from "./query";

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
  const [publicKey, setPublicKey] = useState("");
  const [cardData, setCardData] = useState(cardSide.card[0]);
  const [mobView, setMobView] = useState(false);
  const router = useRouter()

  const { loading, data, error } = useQuery(allBounties);

  const { data: submissionData, error:submissionError } = useQuery(allSubmissions, {
    variables: { public_address: publicKey },
  });

  useEffect(() => {
   
    getKey();

    if (data) {
      setCardData(data.all_bounties[0]);
    }

    if(submissionData){
      console.log(submissionData, "Submission")
    }
  }, [data, submissionData]);

  const getKey = async () => {
    if (window?.freighterApi?.getPublicKey()) {
      setPublicKey(await window.freighterApi.getPublicKey());
    }
  };

  const pullData = (data) => {
    setCardData(data);
    setMobView(true);
  };

  const applyNow = (bountyId, bountyAddress) => {
    router.push({
      pathname:'/applynow',
      query: { id: bountyId, bountyAddress: bountyAddress}
  })

  }
  return (
    <>
      <section id="landingpage h-screen overflow-hidden">
        <div className=" w-11/12 lg:w-11/12 mx-auto mt-10">
          <div className="flex w-[48%] justify-between h-[4vh]">
            {filterMenu.map((item, index) => (
              <Filterbutton key={index} data={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="cards">
              <div
                className={`${
                  mobView ? "hidden lg:block" : " "
                } overflow-y-auto h-[76vh] mt-2 lg:mt-0 lg:h-[72vh] rounded-xl shadow-xl`}
              >
                {data?.all_bounties.map((item, index) => (
                  <Cards data={item} callBack={pullData} />
                ))}

                <div className="flex justify-center mt-5">
                  {data?.all_bounties.length == 0 && (
                    <h1 className="text-2xl">No Bounties Found</h1>
                  )}
                </div>
              </div>
            </div>

            <div className="content mt-4 px-2 lg:px-7 py-2 lg:py-5 rounded-xl bg-cardscolor overflow-y-auto h-[73vh] lg:h-[71vh] rounded-xl shadow-xl">
              <i
                onClick={() => setMobView(false)}
                className="text-3xl lg:hidden fal fa-long-arrow-left"
              ></i>
              <h1 className="lg:pt-10 text-base lg:text-xl">
                {cardData?.organization_name}
              </h1>
              <h1 className="text-black mt-1 lg:mt-3 text-xl lg:text-3xl font-medium">
                {cardData?.bounty_name}
              </h1>

              <div className="mt-3 lg:mt-8">
                <div className="flex flex-wrap lg:space-x-3">
                  <button className="bg-lightgrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl ">
                    <p className="text-sm">{cardData?.bounty_type} </p>
                  </button>
                  <button className="bg-lightgrey mb-4 ml-3 lg:0 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl ">
                    <p className="text-sm">{cardData?.bounty_difficulty}</p>
                  </button>
                  <button className="bg-lightgrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl ">
                    <p className="text-sm">Smart Contracts</p>
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-3 lg:mt-8">
                <button className="bg-lightgrey w-40 h-10 flex items-center justify-center rounded-2xl">
                  <p className="text-sm">{cardData?.payment_amount} XLM</p>
                </button>
                <button
                onClick={()=>applyNow(cardData.id,cardData.public_address)}
                  disabled={
                    !publicKey || publicKey === cardData?.public_address
                  }
                  className={`${
                    publicKey && publicKey === cardData?.public_address ? "bg-darkColor" : "bg-lightPink"
                  } w-52 h-16 rounded-xl shadow-2xl
                  w-40 h-12 flex items-center justify-center rounded-2xl shadow-xl`}
                >
        
                    <h1 className="text-sm">Apply Now</h1>
                </button>
              </div>

              <div className="mt-14 overflow-y-auto h-[40%]">
                <p className="robotosimple">{cardData?.bounty_description}</p>
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

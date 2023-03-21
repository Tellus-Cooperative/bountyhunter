import React, { useState, useEffect } from "react";
import Cards from "../common/cards";
import cardSide from "../LandingPage/cards.json";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { allBounties } from "./query";
import MyBountiesCard from "../common/cards/mybountiescard";

const BountyReview = () => {
  const [publicKey, setPublicKey] = useState('');
  const [cardData, setCardData] = useState(cardSide.card[0]);
  const [mobView, setMobView] = useState(false);

  const { loading, data, error } = useQuery(allBounties, {
    variables: { public_address: publicKey },
  });

  const bountyId = data?.submissions;

  console.log(bountyId, "bounty id")

  useEffect(() => {
    console.log(window.freighterApi, "Windows");
    getKey();

    // if (data) {
    //   setCardData(data.all_bounties[0]);
    // }

  }, [data]);

  const getKey = async () => {
    if (window?.freighterApi?.getPublicKey()) {
      setPublicKey(await window.freighterApi.getPublicKey());
    }
  };

  const pullData = (data) => {
    console.log(data, "I am datadsfdsfdfdsf")
    setCardData(data);
    setMobView(true);
  };

  return (
    <section id="bounty" className="mt-3">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="mybounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
            <div className="pt-2">
              <h1 className="text-3xl text-dark font-bold">Bounty Review</h1>

              {bountyId?.map((item, index) => (
                  <MyBountiesCard data={item} callBack={pullData} publicKey={publicKey}/>
                ))}

                <div className="flex justify-center mt-5">
                  {bountyId?.length == 0 && (
                    <h1 className="text-2xl">No Bounties Found</h1>
                  )}
                </div>
            </div>
          </div>

          <div className="content px-2 lg:px-7 py-2 lg:py-5 rounded-xl bg-cardscolor overflow-y-auto h-[73vh] lg:h-[80vh] rounded-xl shadow-xl">
            <i
              onClick={() => setMobView(false)}
              className="text-3xl lg:hidden fal fa-long-arrow-left"
            ></i>

            <h1 className="text-3xl text-dark font-bold">New Bounty</h1>

            <div className="flex justify-between items-center">
              <div>
                <h1 className="lg:pt-10 text-base lg:text-xl">
                  {cardData?.subtitle}
                </h1>
                <h1 className="text-black mt-1 lg:mt-3 text-xl lg:text-3xl font-medium">
                  {cardData?.title}
                </h1>
              </div>
              <button
                disabled={!publicKey}
                className={`${
                  publicKey ? "bg-lightblue" : "bg-darkColor"
                } w-44 h-16 rounded-xl shadow-2xl
                w-40 h-12 text-white flex items-center justify-center rounded-2xl shadow-xl`}
              >
                <Link href="/applynow">
                  <p className="text-sm">IN ESCROW</p>
                </Link>
              </button>
            </div>

            <div className="mt-14 overflow-y-auto h-[50%]">
              <h1 className="text-sm">Submission:</h1>
              <p className="robotosimple mt-5 bg-lightgrey rounded-xl px-4 py-5">
                As a bounty hunter for the Soroban Contract Writing in Rust, you
                will be responsible for thoroughly testing our platform and
                identifying any potential security vulnerabilities or bugs. You
                will be tasked with conducting comprehensive penetration testing
                and code review to ensure that our platform is secure, reliable,
                and efficient. Successful candidates will have a strong
                understanding of Rust development, as well as experience working
                with blockchain technology and smart contract writing. You
                should be comfortable working with cryptographic algorithms, as
                well as developing and testing secure, reliable, and efficient.
                Successful candidates will have a strong understanding of Rust
                development, as well as experience working with blockchain
                technology and smart contract writing. You should be comfortable
                working with cryptographic algorithms, as well as developing and
                testing secure, reliable, and efficient.
              </p>
            </div>

            <div className="buttons flex justify-around mt-5">
              <button
                disabled={!publicKey}
                className={`${
                  publicKey ? "bg-greenColor" : "bg-darkColor"
                } w-44 h-16 rounded-xl shadow-2xl
                w-40 h-12 text-white flex items-center justify-center rounded-2xl shadow-xl`}
              >
                <Link href="/applynow">
                <h1 className="robotosimple text-xl font-regular ">APPROVE</h1>
                </Link>
              </button>

              <button
                disabled={!publicKey}
                className={`${
                  publicKey ? "bg-red" : "bg-darkColor"
                } w-44 h-16 rounded-xl shadow-2xl
                w-40 h-12 text-white flex items-center justify-center rounded-2xl shadow-xl`}
              >
                <Link href="/applynow">
                  <h1 className="robotosimple text-xl font-regular ">REJECT</h1>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BountyReview;

import React, { useState, useEffect } from "react";
import cardSide from "../LandingPage/cards.json";
import Cards from "../common/cards";
import { allBounties } from "../NewBounty/query";
import { useMutation, useQuery } from "@apollo/client";
import MyBountiesCard from "../common/cards/mybountiescard";

const ApplyNow = () => {
  const [publicKey, setPublicKey] = useState("");
  const [cardData, setCardData] = useState(cardSide.card[0]);
  const [mobView, setMobView] = useState(false);

  const { loading, data, error } = useQuery(allBounties, {
    variables: { public_address: publicKey },
  });

  const pullData = (data) => {
    setCardData(data);
    setMobView(true);
  };

  useEffect(() => {
    getKey();

  }, [data]);

  const getKey = async () => {
    if (window?.freighterApi?.getPublicKey()) {
      setPublicKey(await window.freighterApi.getPublicKey());
    }
  };

  return (
    <>
      <section id="bounty" className="mt-3">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="submitbounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
              <div className="top flex justify-between">
                <h1 className="text-3xl text-dark font-bold">New Submission</h1>
                <button
                  className={`bg-darkColor w-52 h-16 rounded-xl shadow-2xl`}
                >
                  <a className="text-white font-semibold">Submit</a>
                </button>
              </div>

              <div className="form mt-12">
                <form>
                  <div>
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700 mb-3">
                        *Submission Title
                      </span>
                      <input
                        type="text"
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="mt-8">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700 mb-3">
                        *Submission Link
                      </span>
                      <input
                        type="text"
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="mt-8">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700 mb-3">
                        *Submission Description
                      </span>
                      <textarea
                        rows="14"
                        cols="50"
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <div className="mybounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
              <div className="pt-2">
                <h1 className="text-3xl text-dark font-bold">My Bounties</h1>

                {data?.all_bounties.map((item, index) => (
                  <MyBountiesCard data={item} />
                ))}

                <div className="flex justify-center mt-5">
                  {data?.all_bounties.length == 0 && (
                    <h1 className="text-2xl">No Bounties Found</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyNow;

import React, { useState, useEffect } from "react";
import cardSide from "../LandingPage/cards.json";
import MyBountiesCard from "../common/cards/bounties";
import { submitBounty, allBounties } from "./query";
import { useMutation, useQuery } from "@apollo/client";


const NewBounty = () => {
  const [publicKey, setPublicKey] = useState("");
  const [bountyName, setBountyName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [bountyType, setBountyType] = useState("");
  const [bountyDifficulty, setBountyDifficulty] = useState("");
  const [bountyDescription, setBountyDescription] = useState("");
  const [bountyData, setBountyData] = useState("");
  const [btnActive, SetBtnActive] = useState(false);

  const [
    submitBountyNow,
    { data: bountySubmitData, error: bountySubmitError },
  ] = useMutation(submitBounty, {
    refetchQueries: [
      { query: allBounties, variables: { public_address: publicKey } },
    ],
  });

  
  const { loading, data, error } = useQuery(allBounties, {
    variables: { public_address: publicKey },
  });

  const handleNewBounty = (e) => {
    console.log(bountyType);
    e.preventDefault();
    submitBountyNow({
      variables: {
        bounty_name: bountyName,
        organization_name: organizationName,
        payment_amount: paymentAmount,
        bounty_type: bountyType,
        bounty_difficulty: bountyDifficulty,
        bounty_description: bountyDescription,
        public_address: publicKey,
      },
    });
  };

  useEffect(() => {
    getKey();
    if (bountySubmitError) {
      console.log(error, "My error");
    }

    if (data) {
      console.log(data, "I am data");
      setBountyData(data?.all_bounties);
    }

    if(bountyName && organizationName && paymentAmount && bountyType && bountyDifficulty && bountyDescription){
      SetBtnActive(true)
    }
  }, [bountySubmitError, data,bountyName,organizationName,paymentAmount, bountyType, bountyDifficulty, bountyDescription]);

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
              <form onSubmit={handleNewBounty}>
                <div className="top flex justify-between">
                  <h1 className="text-3xl text-dark font-bold">New Bounty</h1>
                  <button
                  disabled={!btnActive}
                    className={`${btnActive? 'bg-lightblue': 'bg-darkColor'} w-52 h-16 rounded-xl shadow-2xl`}
                  >
                    <p className="text-white font-semibold">Submit</p>
                  </button>
                </div>

                <div className="form mt-10">
                  <div>
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Bounty Name
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setBountyName(e.target.value)}
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Organization Name
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setOrganizationName(e.target.value)}
                        name=""
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Payment Amount
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Bounty Type
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setBountyType(e.target.value)}
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Bounty Difficulty
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setBountyDifficulty(e.target.value)}
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Bounty Description
                      </span>
                      <textarea
                        onChange={(e) => setBountyDescription(e.target.value)}
                        rows="5"
                        cols="50"
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="mybounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
              <div className="pt-2">
                <h1 className="text-3xl text-dark font-bold">My Bounties</h1>

                {data?.all_bounties.map((item, index) => (
                  <MyBountiesCard data={item} publicKey={publicKey}/>
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

export default NewBounty;

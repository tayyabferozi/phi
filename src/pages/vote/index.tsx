import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Vote() {
  return (
    <div>
      <div className="grid grid-cols-1 pl-[18px] pr-[30px] lg:px-[150px] ">
        <h5 className="text-white">All Proposals</h5>
        <p className="text-[25px] mt-6 font-bold text-white">Proposal 1</p>
        <p className="mt-6 text-justify text-[15px]  text-white">
          {" "}
          Voting ends approximately December 5, 2021 7:10 AM GMT+2. A total of
          12 votes are required to reach quorum
        </p>
      </div>

      <div className="grid grid-cols-1  gap-10 lg:grid-cols-3 pl-[20px] pr-[33px] lg:px-[150px] mt-[30px]">
        {/* 
        <ProgressBar variant="danger" now={80} /> */}
        <div className="bg-heading border rounded-md pt-4 pb-3 px-2">
          <div className="flex justify-between">
            <p className="text-dark">For</p>
            <p className="text-dark">10</p>
          </div>
          <ProgressBar variant="green" now={80} className="mt-4 " />
        </div>
        <div className="bg-heading border rounded-md pt-4 pb-3 px-2">
          <div className="flex justify-between">
            <p className="text-dark">Against</p>
            <p className="text-dark">2</p>
          </div>
          <ProgressBar variant="purple" now={50} className="mt-4 " />
        </div>
        <div className="bg-heading border rounded-md pt-4 pb-3 px-2">
          <div className="flex justify-between">
            <p className="text-dark">Abstain</p>
            <p className="text-dark">4</p>
          </div>
          <ProgressBar variant="pink" now={20} className="mt-4 " />
        </div>{" "}
      </div>

      <div className="grid grid-cols-1 pl-[18px] pr-[33px] lg:px-[150px] mt-[40px] ">
        <h5 className="text-3xl text-white">Description</h5>
        <p className="text-[30px] mt-6 font-bold text-white">
          Nouns Proposal Auction House
        </p>
        <p className="mt-6 text-justify text-2xl text-white ">
          {" "}
          Nouns Proposal Auction House (or Prop House) is an experimental
          approach to deploying capital: an auction of ETH where the bids placed
          are proxy NounsDAO proposals. At the end of each auction, Noun owners
          (Nouners) vote on which proposal gets funded.
        </p>

        <p className="mt-6 text-justify text-2xl text-white ">
          {" "}
          This proposal aims to be the MVP for a trustless on-chain solution.
        </p>

        <button className="  mt-4  px-3 py-2  bg-btnbg border rounded lg:rounded-3xl lg:mr-4 text-[18px] lg:text-[18px]	 fw-400">
          SUBMIT YOUR VOTE
        </button>
      </div>
    </div>
  );
}

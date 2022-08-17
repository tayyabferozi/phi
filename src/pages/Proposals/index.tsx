import React from "react";
import { Link } from "react-router-dom";

export default function Proposals() {
  return (
    <div>
      <div className="grid grid-cols-1 pl-[18px] pr-[30px] lg:px-[150px] eclipse ">
        <h5 className="text-white">All Proposals</h5>
        <p className="text-[25px] mt-6 font-bold text-white">
          Furlough DAO Governance
        </p>
        <p className="mt-6 text-justify  text-white">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </p>

        <div className="flex items-center justify-between my-[50px]">
          <p className="text-[25px]  font-bold text-white">Proposals</p>
          <Link to="/createproposal" className="hover:text-white">
            <button className="  text-white sm:px-2 sm:py-2 lg:px-3 lg:py-3  bg-blue border rounded-md lg:rounded-md lg:mr-4 text-[14px] lg:text-[15px]	 fw-400">
              CREATE PROPOSAL
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 pl-[18px] pr-[30px] lg:px-[150px]  ">
        <div className="flex items-center justify-between  border-4 border rounded-md border-white p-6 mb-4">
          <p className="text-[14px] lg:text-[20px] text-white">
            1. Invest 20% revenue into a new project{" "}
          </p>
          <button className="  text-white  px-[32px] py-2  bg-btnbg border rounded-md lg:rounded-2xl lg:mr-4 text-[14px] lg:text-[15px]	 fw-400">
            Active
          </button>
        </div>

        <div className="flex items-center justify-between border  border-4 rounded-md border-white p-6 mb-4 border-2	 ">
          <p className="text-[14px] lg:text-[20px] text-white">
            2. Partner with a SaaS company
          </p>
          <button className="  text-white px-[32px] py-2  bg-btnbg border rounded-md lg:rounded-2xl lg:mr-4  text-[14px] lg:text-[15px]	 fw-400">
            Active
          </button>
        </div>

        <div className="flex items-center justify-between border border-4 rounded-md border-white p-6 mb-4 ">
          <p className="text-[14px] lg:text-[20px] text-white">
            3. Airdrop new tokens for sub-community projects
          </p>
          <button className="text-white  px-[32px] py-2  bg-btnbg border rounded-md lg:rounded-2xl lg:mr-4 text-[14px] lg:text-[15px]	 fw-400">
            Active
          </button>
        </div>

        <div className="flex  items-center justify-between  rounded-md border-white p-4 mb-4 bg-black ">
          <p className="text-[14px] lg:text-[20px] text-white">
            4. Vote a new name for the marketing project{" "}
          </p>
          <button className=" text-white  px-4 py-2  bg-purple border rounded-md lg:rounded-2xl lg:mr-4 text-[14px] lg:text-[15px]	 fw-400">
            Executed
          </button>
        </div>

        <div className="flex  items-center justify-between  rounded-md border-white p-6 mb-4 bg-black ">
          <p className="text-[14px] lg:text-[20px] text-white">
            5. Collaborate with another Discord community{" "}
          </p>
          <button className=" text-white  px-4 py-2  bg-purple border rounded-md lg:rounded-2xl lg:mr-4 text-[14px] lg:text-[15px]	 fw-400">
            Executed
          </button>
        </div>
        <div className="flex  items-center justify-between  rounded-md border-white p-6 mb-4 bg-black ">
          <p className="text-[14px] lg:text-[20px] text-white">
            6. Release new merchandise for the holiday season{" "}
          </p>
          <button className="  text-white px-4 py-2  bg-purple border rounded-md lg:rounded-2xl lg:mr-4 text-[14px] lg:text-[15px]	 fw-400">
            Executed
          </button>
        </div>
      </div>
    </div>
  );
}

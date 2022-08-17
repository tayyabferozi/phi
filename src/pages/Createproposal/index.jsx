import React from "react";
import TextField from "@mui/material/TextField";

export default function Createproposal() {
  return (
    <div>
      <div className="grid grid-cols-1 pl-[18px] pr-[30px] lg:px-[150px] text-white ">
        <h5 className="text-white">All Proposals</h5>
        <p className="text-[25px] mt-6 font-bold text-white">Create Proposal</p>
        <p className="mt-6 text-justify text-[20px] bg-gray text-lggray p-4 border rounded-md  ">
          {" "}
          <span className="text-black font-bold">Tip</span>: Add one or more
          transactions and describe your proposal for the community. The
          proposal cannot modified after submission, so please verify all
          information before submitting. The voting period will begin after 2
          1/3 days and last for 3 days.
        </p>
      </div>

      <div className="grid grid-cols-1 ml-[20px] mr-[30px]  gap-4 p-4 py-4  lg:grid-cols-1 border rounded-md lg:mx-[150px]   mt-[50px]">
        <TextField
          id="standard-basic"
          label="Proposal Title"
          className="text-white"
          variant="standard"
          
        />
        <TextField id="standard-basic" label="Summary" variant="standard" />
        <TextField id="standard-basic" label="Methodology" variant="standard" />
        <TextField id="standard-basic" label="Conclusion" variant="standard" />
        <br />
      </div>
      <div className="grid grid-cols-1  ml-[20px] mr-[30px]   lg:grid-cols-1 lg:mx-[150px] ">
        <button className="  mt-4  px-3 py-2  bg-btnbg border rounded lg:rounded-3xl  text-[18px] lg:text-[18px]	 fw-400">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

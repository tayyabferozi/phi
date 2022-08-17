import React from "react";
 import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-background">
      <Link to="/">
      <img src="./one.png" className="h-[100px]" alt="" />
      </Link>
      <button
        className="navbar-toggler bg-white mr-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse  justify-end" id="navbarSupportedContent">
    
        <form className="form-inline my-2 my-lg-0">
        <ul className="navbar-nav lg:mr-auto">
          <div className=" flex flex-col lg:flex-row w-[60vw] justify-start items-start px-4 lg:items-center">
            <div className="flex flex-col lg:flex-row">
              <p className="text-heading lg:mx-2  my-2 lg:text-[20px] text-[13px]">
                TREASURY
              </p>
              <Link to="/playground">
              <p className="text-heading  lg:mx-2 my-2  lg:text-[20px] text-[13px]">
                PLAYGROUND
              </p>
              </Link>
              <Link to="/proposals">
              <p className="text-heading  lg:mx-2 my-2  lg:text-[20px] text-[13px]">
                DAO
              </p>
              </Link>
              <Link to="">
              <p className="text-heading  lg:mx-2  my-2 lg:text-[20px] text-[13px]">
                DOCS
              </p>
              </Link>
            </div>
            <button className=" lg:ml-[20%] text-white  px-3 py-2  bg-btnbg border rounded-md lg:rounded-3xl lg:mr-4 text-[14px] lg:text-[15px]	 fw-400">
              CONNECT WALLET
            </button>
          </div>
          
        </ul>
        
        </form>
      </div>
    </nav>

    
  );
}

export default Header;

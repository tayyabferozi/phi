import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GrShare } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";
import { useState } from "react";
export default function Homepage() {
  const [Summary, setSummary] = useState(false);
  const [Daily, setDaily] = useState(false);

  const [Furlogh, SetFurlogh] = useState(false);

  const [Community, SetCommunity] = useState(false);
  const [Rewards, SetRewards] = useState(false);

  return (
    <>
      <div>
        <div className=" grid  relative grid-cols-1 lg:grid-cols-2 pl-[18px] pr-[30px] lg:px-[100px] lg:py-[100px] ">
          <img
            className="absolute position11"
            src="./ellipse1.png"
            width="100px"
            height="200px"
            alt=""
          />

          <div className="flex justify-center text-white ">
            <img src="/frame.png" alt="" />
          </div>

          <div className="mt-[50px] lg:mt-0">
            <p className="text-white" >Dec 01 2021</p>
            <div className="flex items-center">
              <p className="text-[27px]  mt-4 text-white">Proposal #1</p>
              <BsArrowRight size={20} className="mt-4 ml-4 mr-2" />
              <BsArrowLeft size={20} className="mt-4 " />
            </div>

            <div className="flex items-center mt-2 text-white">
              <div className="border-r-[1px] p-4">
                <p className="text-[16px]">Current bid</p>
                <p className="text-[24px]">31.41</p>
              </div>
              <div className="p-4">
                <p className="text-[16px]">Ends in</p>
                <p className="text-[24px]">11h 10m 40s</p>
              </div>
            </div>

            <div className="flex  flex-col  lg:flex-row  lg:items-center mt-4">
              <div className=" p-1">
                <p className="text-[14px] text-white">Minimum bid: 0.4 SOL</p>
                <input
                  className="bg-white inputcenter lg:inputright border py-[17px]  w-[100%] rounded-md text-[#000000]"
                  style={{ color: "black" }}
                  type="number"
                  placeholder="SOL"
                />
              </div>
              <div className="p-1 mt-3 border-black">
                <button className="bg-black inputcenter1   rounded-md w-[100%] mt-1  py-[19px] px-[30px]">
                  BID
                </button>
              </div>
            </div>

            <div className="bg-[#808080]  mt-4 mb-2 p-2 border  rounded-md flex justify-between items-center">
              <div className="flex">
                <span className="dot ml-2 mr-2"></span>
                <p className="text-white">0xf5...4DcF</p>
              </div>
              <div className="flex items-center w-[50%] justify-end">
                <div
                  data-layer="8a98151c-1fb5-47e5-805a-16dee77bb768"
                  className="w-[58px]"
                >
                  Ξ 31.41
                </div>
                <GrShare
                  color="#ffffff"
                  stroke="#ffffff"
                  fill="#ffffff"
                  className="text-white ml-1"
                />
              </div>
            </div>
            <div className="bg-[#808080] p-2 border  rounded-md flex justify-between items-center">
              <div className="flex">
                <span className="dot ml-2 mr-2 text-white"></span>
                <p className="text-white">0xf5...4DcF</p>
              </div>
              <div className="flex items-center w-[50%] justify-end">
                <div
                  data-layer="8a98151c-1fb5-47e5-805a-16dee77bb768"
                  className="w-[58px]"
                >
                  Ξ 31.41
                </div>
                <GrShare color="#ffffff" className=" wh text-white ml-1" />
              </div>
            </div>
            <div className="flex items-center mt-3">
              <button className="text-[20px] text-white">Bid History</button>
              <BsArrowRight size={20} className="ml-2 mt-1" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 relative  mb-[20px]  mt-[40px] lg:mt-0 ">
          <img className="absolute position1" src="./ellipse.png" alt="" />
          <div className=" block lg:flex ">
            <div className=" mt-[40px] mb-[40px] flex justify-center lg:block lg:mt-[170px]  ">
              <h1 className=" text-[26px] text-white lg:text-[90px] font-bold px-[5px] lg:px-[90px] lg:text-left">
                EVERY
              </h1>
              <h1 className=" text-[26px] text-white lg:text-[90px] font-bold  px-[5px] lg:px-[90px] lg:text-left">
                VOTE
              </h1>
              <h1 className=" text-[26px] text-white lg:text-[90px] font-bold px-[5px] lg:px-[90px] lg:text-left">
                COUNTS
              </h1>
            </div>
            <div className=" flex justify-start items-center pl-[20px] pr-[30px] lg:pr-[100px] lg:mt-[150px]   ">
              <img src="./minimap.png" alt="" className=" " />
            </div>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <div className="grid  grid-cols-1 lg:grid-cols-1 pl-[30px] pr-[30px] lg:px-[40px] lg:py-[100px] ">
            <div className="flex flex-wrap pr-[20px] lg:pr-[0px] ">
              <div className="bg-boxclr  w-[100%] h-[200px] lg:h-[200px] lg:mx-[15px] mb-[20px] lg:w-[180px]  text-boxclr">
                3
              </div>
              <div className="bg-boxclr  w-[100%] h-[200px] lg:h-[200px] lg:mx-[15px] mb-[20px] lg:w-[180px] text-boxclr">
                3
              </div>
              <div className="bg-boxclr  w-[100%] h-[200px] lg:h-[200px] lg:mx-[15px] mb-[20px] lg:w-[180px]  text-boxclr">
                3
              </div>

              <div className="bg-boxclr  w-[100%] h-[200px] lg:h-[200px] lg:mx-[15px] mb-[20px] lg:w-[180px]  text-boxclr">
                3
              </div>
              <div className="bg-boxclr  w-[100%] h-[200px] lg:h-[200px] lg:mx-[15px] mb-[20px] lg:w-[180px]  text-boxclr">
                3
              </div>
              <div className="bg-boxclr  w-[100%] h-[200px] lg:h-[200px] lg:mx-[15px] mb-[20px] lg:w-[180px]  text-boxclr">
                3
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 pl-[30px] pr-[50px] lg:px-[150px]  relative">
          <p className="text-[35px] mt-6 font-bold  text-center  lg:text-left text-white">
            Furlough DAO
          </p>
          <img
            className="absolute position"
            src="./ellipse1.png"
            width="100px"
            height="200px"
            alt=""
          />

          <p className="mt-6 text-justify  text-[20px] text-white ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-6 text-justify  text-[20px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="mt-[40px]">
            <button
              className="w-[100%] px-1 py-1"
              onClick={() => setSummary(!Summary)}
            >
              <div className="flex justify-between items-center mt-4">
                <p className="text-[25px] font-bold text-white">Summary</p>
                <IoIosArrowDown size={28} className="font-bold" />
              </div>
            </button>
            {Summary ? (
              <p className="mt-6 text-justify  text-[20px] text-white">
                Furlogh is great to Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            ) : (
              <></>
            )}

            <button
              className="w-[100%] px-1 py-1"
              onClick={() => setDaily(!Daily)}
            >
              <div className="flex justify-between items-center mt-4">
                <p className="text-[25px] font-bold text-white">Daily Auctions</p>
                <IoIosArrowDown size={28} className="font-bold" />{" "}
              </div>
            </button>
            {Daily ? (
              <p className="mt-6 text-justify  text-[20px] text-white">
                Furlogh is great to Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            ) : (
              <></>
            )}

            <button
              className="w-[100%] px-1 py-1"
              onClick={() => SetFurlogh(!Furlogh)}
            >
              <div className="flex justify-between items-center mt-4">
                <p className="text-[25px] font-bold text-white">Furlough DAO</p>
                <IoIosArrowDown size={28} className="font-bold" />{" "}
              </div>
            </button>
            {Furlogh ? (
              <p className="mt-6 text-justify  text-[20px] text-white">
                Furlogh is great to Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            ) : (
              <></>
            )}
            <button
              className="w-[100%] px-1 py-1 border-none"
              onClick={() => SetCommunity(!Community)}
            >
              <div className="flex justify-between items-center mt-4">
                <p className="text-[25px] font-bold text-white">Community Tokens</p>
                <IoIosArrowDown size={28} className="font-bold" />{" "}
              </div>
            </button>

            {Community ? (
              <p className="mt-6 text-justify  text-[20px] text-white">
                Furlogh is great to Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            ) : (
              <></>
            )}

            <button
              className="w-[100%] px-1 py-1"
              onClick={() => SetRewards(!Rewards)}
            >
              <div className="flex justify-between items-center mt-4">
                <p className="text-[25px] font-bold text-white">Rewards</p>
                <IoIosArrowDown size={28} className="font-bold" />{" "}
              </div>
            </button>
            {Rewards ? (
              <p className="mt-6 text-justify  text-[20px] text-white">
                Furlogh is great to Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{" "}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

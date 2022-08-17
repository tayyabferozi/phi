import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Loader from "../../components/Loader";

export default function Playground() {
  const [category, setCategory] = useState("Random");
  const [acc, setacC] = useState("Random");
  const [background, setBackground] = useState("Random");
  const [bottoms, setBottoms] = useState("Random");
  const [arms, setArms] = useState("Random");
  const [hair, setHair] = useState("Random");
  const [hairedProps, setHairedProps] = useState("Random");
  const [head, setHead] = useState("Random");
  const [by, setbY] = useState("Random");
  const [isLoading, setIsLoading] = useState(false);

  const generateCategory = (e) => {
    setCategory(e);
  };
  const generateAccessory = (e) => {
    setacC(e);
  };
  const generateBackground = (e) => {
    setBackground(e);
  };
  const generateBottoms = (e) => {
    setBottoms(e);
  };
  const generateHead = (e) => {
    setHead(e);
  };
  const generateArms = (e) => {
    setArms(e);
  };
  const generateHair = (e) => {
    setHair(e);
  };
  const generateHairedProps = (e) => {
    setHairedProps(e);
  };
  const generateSkin = (e) => {
    console.log(e, "lolo");
    setbY(e);
  };

  const downloadHandler = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <img src="/playground-hero.png" alt="hero" />
      <div className="playground-main bg-black px-[12px] py-[6px] w-100">
        <div className="grid grid-cols-1 pl-[18px] pr-[30px] lg:px-[150px] bg-black">
          {/* <h5 className="text-white">Explore</h5> */}
          <p className="text-[25px] mt-[112px] font-bold text-white font-russo text-5xl">
            Playground
          </p>
          {/* <p className="mt-6 text-justify  text-white">
          {" "}
          lorem lorem lorem lorem lorem rem kasjsj akjsasjkjas akjskjas rem
          kasjsj akjsasjkjas akjskjas kajskasjk kjakjsa kajskasjk kjakjsa lorem
          lorem lorem lorem lorem kasjsj akjsasjkjas akjskjas kajskasjk kjakjsa
        </p> */}
        </div>

        <div className="grid grid-cols-1  gap-10 lg:grid-cols-1 px-[20px] lg:px-[150px] mt-[30px]">
          <div className="flex lg:flex-row flex-col">
            <div className=" lg:w-[400px] ">
              {" "}
              <Button className="w-[95%] bg-btnbg pb-3 pt-3 hover:bg-btnbg rounded-none flex justify-center items-center text-center border-gradient ">
                GENERATE ART
              </Button>
              <Dropdown className="my-3" onSelect={generateCategory}>
                <Dropdown.Toggle
                  className="border-gradient w-[95%] p-0 hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Categories
                      </p>
                      <p className="lg:text-left ">{category}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateAccessory}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left text-lightgray">
                        Accessories
                      </p>
                      <p className="lg:text-left "> {acc}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateBackground}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Background
                      </p>
                      <p className="lg:text-left "> {background}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateBottoms}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Bottoms
                      </p>
                      <p className="lg:text-left r">{bottoms}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateArms}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Arms
                      </p>
                      <p className="lg:text-left r">{arms}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateHair}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Hair
                      </p>
                      <p className="lg:text-left r">{hair}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateHairedProps}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Haired Props
                      </p>
                      <p className="lg:text-left r">{hairedProps}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateHead}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Head
                      </p>
                      <p className="lg:text-left r">{head}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="my-3" onSelect={generateSkin}>
                <Dropdown.Toggle
                  className="p-0 border-gradient w-[95%] hover:bg-btnbg rounded-none flex justify-start items-center  "
                  id=""
                >
                  <div className="bg-black px-[12px] py-[6px] w-100">
                    <div className="w-[100%]">
                      <p className="text-[9px] lg:text-left  text-lightgray">
                        Skin
                      </p>
                      <p className="lg:text-left r">{by}</p>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Option1" href="#/action-1">
                    Option1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option2" href="#/action-1">
                    Option2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Option3" href="#/action-1">
                    Option3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="flex flex-wrap pr-[20px] lg:pr-[0px] ">
              <div className="mr-1 w-[100%] h-[200px] lg:h-[866px] lg:mx-[15px] mb-[20px] lg:w-[55vw] text-boxclr">
                <img
                  className="max-h-[100%] d-block"
                  src="/playground.png"
                  alt="vector"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-[70px]">
          <Button
            onClick={downloadHandler}
            className="bg-btnbg rounded py-3 px-5 hover:bg-btnbg flex justify-center items-center text-center border-gradient "
          >
            {isLoading ? <Loader /> : "DOWNLOAD"}
          </Button>
        </div>
      </div>
    </>
  );
}

import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] z-10">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="loadingio-spinner-rolling-oxz03jeqpz">
          <div className="ldio-ka6gjdz6vg">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

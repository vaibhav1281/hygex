import React from "react";
import Card from "./Card";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="w-full">
      <div className="contents">
        <div className="flex flex-col w-5/12 m-10 gap-6">
          <div className="flex items-center text-lg font-medium leading-[21.78px] text-[#696671]">
            <img alt="" src="./home.svg"/>
            <img alt="" src="./chevronright.svg"/>
            <p>Flashcard</p>
            <img alt="" src="./chevronright.svg"/>
            <p>Mathematics</p>
            <img alt="" src="./chevronright.svg"/>
            <p>Relation and Function</p>
          </div>

          <h2 className="text-[#06286E] font-bold text-[32px]">
            Relations and Functions ( Mathematics )
          </h2>
        </div>
        <div>
            <Card/>
        </div>
        <div>
            <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Body;

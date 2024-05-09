import React, { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <div className="container flex flex-col justify-center items-center gap-8">
        <div className="flex gap-10 w-5/12 justify-center text-xl font-medium leading-6 text-[#696671]">
          <button className="py-3 border-b-2 border-[#06286E]">Study</button>
          <button>Quiz</button>
          <button>Test</button>
          <button>Game</button>
          <button>Others</button>
        </div>
        <div className="w-5/12" onClick={handleClick}>
          <div
            className={`w-auto md:w-[712px] h-[393.19px] rounded-[42.51px] transform transition-transform duration-500 ease-in-out ${
              isFlipped
                ? "rotate-y-180 bg-custom-gradient1"
                : "bg-custom-gradient"
            }`}
          >
            <div className="flex justify-between items-center p-6">
              <img
                alt=""
                src="./bulb.svg"
                className="w-[19.84px] h-[28.34px]"
              />
              <img
                alt=""
                src="./audio.svg"
                className="w-[19.84px] h-[28.34px]"
              />
            </div>
            <h2 className="text-center mt-[15%] text-[38.26px] leading-[45.91px] font-bold text-white">
              {isFlipped ? "12 + 5x" : "9 + 6 + 7x - 2x - 3"}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-auto md:w-[612px] space-x-8 mt-4">
        <img alt="" src="./reload.svg" className="w-[30px] h-[30px]" />
        <div className="flex justify-between items-center space-x-8">
          <img alt="" src="./chevronleft.svg" className=" w-[60px]" />
          <p className="text-2xl font-bold leading-[29.05px] text-[#202B37]">
            01/10
          </p>
          <img alt="" src="./chevronleft.svg" className="rotate-180 w-[60px]" />
        </div>
        <img alt="" src="./zoom.svg" className="w-[30px] h-[30px]" />
      </div>
      <div className="w-10/12 h-[60px]">
        <div className="flex justify-between items-center">
          <img alt="" src="./logohyggex.svg" className="" />

          <div className="flex items-center gap-2">
            <img alt="" src="./plus.svg" className="" />
            <h3 className="text-[28px] font-semibold leading-[33.89px] text-[#06286E] text-center">
              Create Flashcard
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

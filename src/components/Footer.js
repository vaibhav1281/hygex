import React, { useState } from "react";

const Footer = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleItem = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  return (
    <footer className="my-10">
      <div className="w-5/9 pl-[120px] mt-[150px]">
        <h1 className="text-[#06286E] text-[48px] mb-5 font-bold leading-[58.09px]">
          FAQ
        </h1>
        <div className="w-[848px] flex flex-col gap-4 text-[16px] leading-[26px] font-semibold">
          <div className="border border-[#217EEC] p-3 flex flex-col rounded-xl">
            <button onClick={() => toggleItem(1)} className="flex justify-between items-center">
              <p className="">Can education flashcards be used for all age groups?</p>
              <span className="mt-4">
                {expandedItem === 1 ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>
            {expandedItem === 1 && (
              <div className="accordion-content">
                Yes, education flashcards can be tailored to different age
                groups and learning levels. There are flashcards designed for
                preschoolers, elementary school students, high school students,
                and even for college-level and adult learners.
              </div>
            )}
          </div>

          <div className="border border-[#217EEC] p-3 flex flex-col rounded-xl">
            <button onClick={() => toggleItem(2)} className="flex justify-between items-center">
              <p className="">How do education flashcards work?</p>
              <span className="mt-4">
                {expandedItem === 2 ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>
            {expandedItem === 2 && (
              <div className="accordion-content">
              Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.
              </div>
            )}
          </div>

          <div className="border border-[#217EEC] p-3 flex flex-col rounded-xl">
            <button onClick={() => toggleItem(3)} className="flex justify-between items-center">
              <p className="">Can education flashcards be used for test preparation?</p>
              <span className="mt-4">
                {expandedItem === 3 ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>
            {expandedItem === 3 && (
              <div className="accordion-content">
              Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

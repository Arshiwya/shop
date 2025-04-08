import React, { useState } from "react";

export default function Box({  question, answer }) {
  const [isShowDesc, setIsShowDesc] = useState(false);

  return (
    <>
      <div className="">
        <span className="font-DanaMeduim text-lg "> </span>
        <div>
          <div className="flex justify-between mt-8">
            <h1 className="pb-7 font-Dana text-lg">
              {question}
            </h1>
            <svg
              onClick={() => setIsShowDesc((prev) => !prev)}
              className={
                isShowDesc
                  ? "w-4 h-4 rotate-180 transition-all ml-12"
                  : "w-4 h-4 transition-all ml-12"
              }
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {isShowDesc ? (
            <div>
              <span className="font-Dana w-7 leading-8 ">
               {answer}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

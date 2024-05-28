import React from "react";
import FlipNumbers from "react-flip-numbers";

const Digit = ({ text, number }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="bg-darkDesaturatedBlue text-softRed text-5xl font-bold p-10 rounded-xl w-40 flex justify-center">
        <FlipNumbers
          height={40}
          width={40}
          color="softRed"
          background="darkDesaturatedBlue"
          play
          perspective={400}
          numbers={number}
        />
      </div>
      <div className="text-xl text-grayishBlue font-bold uppercase tracking-widest">
        {text}
      </div>
    </div>
  );
};

export default Digit;

import React, { useState } from "react";
import Digit from "./Digit";
import Cd, { zeroPad } from "react-countdown";

const Countdown = ({ date }) => {
  const [targetDate, setTargetDate] = useState();
  const [days, setDats] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Done!</div>;
    } else {
      // Render a countdown
      return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <Digit text={"days"} number={zeroPad(days)} />
          <Digit text={"hours"} number={zeroPad(hours)} />
          <Digit text={"minutes"} number={zeroPad(minutes)} />
          <Digit text={"seconds"} number={zeroPad(seconds)} />
        </div>
      );
    }
  };

  return <Cd date={date} renderer={renderer}></Cd>;
};

export default Countdown;

import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";
import ExpiredNotice from "./ExpiredNotice";
import "./Clock.css";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"ימים"} isDanger={days <= 3} />
        <DateTimeDisplay value={hours} type={"שעות"} isDanger={false} />
        <DateTimeDisplay value={minutes} type={"דקות"} isDanger={false} />
        <DateTimeDisplay value={seconds} type={"שניות"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetTime);

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;

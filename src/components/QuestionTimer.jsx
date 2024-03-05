import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, ontimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(ontimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, ontimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    ></progress>
  );
};

export default QuestionTimer;

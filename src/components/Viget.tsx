import { useState } from "react";

const Viget = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (category: "good" | "neutral" | "bad") => {
    if (category === "good") {
      setGood(good + 1);
    } else if (category === "neutral") {
      setNeutral(neutral + 1);
    } else if (category === "bad") {
      setBad(bad + 1);
    }
  };

  const total = good + neutral + bad;
  const positive = total > 0 ? Math.round((good / total) * 100) : 0;
  const hasFeedback = total > 0;

  return (
    <div className="container w-[300px] m-0 ml-auto mr-auto border p-5 mt-10">
      <h2 className=" text-2xl font-bold text-center mb-4">Feedback</h2>
      <div className=" flex justify-around mb-4 ">
        <button
          className="border rounded p-1"
          onClick={() => handleFeedback("good")}
        >
          Good
        </button>
        <button
          className="border rounded p-1"
          onClick={() => handleFeedback("neutral")}
        >
          Neutral
        </button>
        <button
          className="border rounded p-1"
          onClick={() => handleFeedback("bad")}
        >
          Bad
        </button>
      </div>
      {hasFeedback ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positive}%</p>
        </div>
      ) : (
        <h2 className=" text-center">There is no feedback</h2>
      )}
    </div>
  );
};

export default Viget;

// import React, { useState } from "react";

// interface VigetProps {
//   good: number;
//   neutral: number;
//   bad: number;
// }

// const Viget = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [positive, setPositive] = useState(0);

//   const handleFeedback = (category: "good" | "neutral" | "bad") => {
//     category + 1;
//   };
//   const TotalFeedback = () => {
//     return good + neutral + bad;
//   };
//   const PositiveFeedbackPercentage = () => {
//     return setPositive(
//       TotalFeedback() > 0 ? Math.round((good / TotalFeedback) * 100) : 0
//     );
//   };
//   const hasFeedback = TotalFeedback() > 0;
//   return (
//     <div>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positive}%</p>
//     </div>
//   );
// };

// export default Viget;
import { useState } from "react";

// interface VigetProps {
//   good: number;
//   neutral: number;
//   bad: number;
// }

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
    <>
      <h2>Statistics</h2>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      {hasFeedback ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positive}%</p>
        </div>
      ) : (
        <h2>There is no feedback</h2>
      )}
    </>
  );
};

export default Viget;

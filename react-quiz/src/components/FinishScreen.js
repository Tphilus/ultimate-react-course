import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoint,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoint) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span> {emoji} </span> You scrored <strong> {points} </strong> out of{" "}
        {maxPossiblePoint} {Math.ceil(percentage)}
      </p>
      <p className="highscore"> (Highscore: {highscore} points) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

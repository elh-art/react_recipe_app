import React from "react";

function Tweet({name, message, score}) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <h2>{message}</h2>
      <h4>{score}</h4>
    </div>
  )
}

export default Tweet
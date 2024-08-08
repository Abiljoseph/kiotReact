import React from "react";

function Card1(props) {
  const name = props.name;
  return (
    <div style={{ height: "50px" }}>
      <h1 style={{ fontSize: "3rem" }}>My name is {name}</h1>
    </div>
  );
}

export default Card1;

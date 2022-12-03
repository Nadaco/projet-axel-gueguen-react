import React from "react";

const Card = ({ props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1em",
        width: "20%",
        maxHeight: "70vh",
        border: "2px solid orange",
        borderRadius: "20px",
        margin: "1em",
        justifyContent: "center",
      }}
    >
      <h1>{props.strMeal}</h1>
      <p>Origin : {props.strArea}</p>
      <img
        alt="plat"
        src={props.strMealThumb}
        style={{
          maxHeight: "80%",
          maxWidth: "80%",
          margin: "auto",
          borderRadius: "20px",
        }}
      />
      <p
        style={{
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {props.strInstructions}
      </p>
    </div>
  );
};

export default Card;

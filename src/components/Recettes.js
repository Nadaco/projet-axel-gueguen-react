import React, { useEffect, useState } from "react";
import axios from "axios";
import InputFilter from "./InputFilter";
import Card from "./Card";

const Recettes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("");

  // Call API
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${filter}`)
      .then((response) => {
        if (response.data.meals) {
          setRecipes(response.data.meals);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "orange" }}>Appli Recettes de cuisine</h1>
      <InputFilter setFilter={setFilter} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {recipes.map((recipe) => (
          <Card key={`card-${recipe.idMeal}`} props={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recettes;

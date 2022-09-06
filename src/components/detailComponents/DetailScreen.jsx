import React, { useState, useEffect } from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailImage from "./DetailImage";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";
  console.log(recipe);

  useEffect(() => {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.recipe_details}>
        <div className={styles.ingredients_container}>
          <h3>Recipe</h3>
          <h5>Prep Time: {recipe.prep_time}</h5>
          <h5>Cook Time: {recipe.cook_time}</h5>
          <h5>Serves:{recipe.serves}</h5>
          <br />
          <h3>Ingredients</h3>
          {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4>{ing.quantity} {ing.ingredient}</h4>
            })}
        </div>

        <div className={styles.directions_container}>
          <h3>Instructions</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;

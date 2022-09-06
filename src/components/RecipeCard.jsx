import React from "react";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";


export const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipe.recipe_id}`);
  };

  return (
    <div className={styles.recipe_card}>
      <div>
        <div className={styles.recipe_img_container}>
          <img
            src={recipe.image_url}
          ></img>
        </div>
        <h4>{recipe.recipe_name}</h4>
      </div>
        <button className="blue-btn" onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;

import React from "react"
import style from "./recepie.module.css"

const Recepie = ({ title, url, calories, image, ingredients, health}) => {

  const roundedCalories = calories.toFixed()

  return (
    <div className={style.recepie}>
      <img className={style.image} src={image} alt="" />
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.menu}>
          <p className={style.calorie}>{roundedCalories} <span> cal</span></p>
          <a className={style.button} href={url} target="blank">Recipe</a>
        </div>
        <div>
          <p className={style.h_one}>Ingredients</p>
          <div className={style.section}>
            {ingredients.map((ingredient) => 
            <span className={style.box}>{ingredient.text}</span>
            )}
          </div>
        </div>
        <div>
          <p className={style.h_one}>Health labels</p>
          <div className={style.section}>
            {health.map((prop) => 
            <span className={style.box}>{prop}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recepie
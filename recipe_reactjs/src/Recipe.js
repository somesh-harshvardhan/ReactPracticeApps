import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,image,calories,ingredients}) => {
    return (
        <div className={style.recipe} >
         <img className={style.image} src={image} alt="" />
            <h1 >{title}</h1>
            <ol className={style.ol}>
                {ingredients.map(ingrident=>(<li className={style.li}>{ingrident.text}</li>))}
            </ol>
            <h3 className={style.h3}>Calories:{Math.floor(calories)}</h3>
           
            
        </div>
    )
}

export default Recipe;

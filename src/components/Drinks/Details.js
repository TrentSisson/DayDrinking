import React, { useContext, useEffect, useState } from "react"
import { DrinksContext } from "./DrinkProvider"
import "./Drink.css"

export const Details = (props) => {
    const {getDrinksById, drink} = useContext(DrinksContext)
    
    useEffect(() => {
        getDrinksById((props.match.params.drinksId))

    }, [])
    
    
//    const drinkss = drinks.filter(element => {
//         console.log(element)
//         return(
//             element.idDrink
//         )
//    })


    

     
    
    return(
        <section className="drink">
            
           <p>Hello world!</p>
           <h3 className="drink_name">{drink.strDrink}</h3>
           <img src={drink.strDrinkThumb} className = "drink__image" width = "100px" height = "100px"/>
           <h4>Ingredients</h4>
           <div classname="drink_ingredients">{drink.strIngredient1}</div>
           <div classname="drink_ingredients">{drink.strIngredient2}</div>
           <div classname="drink_ingredients">{drink.strIngredient3}</div>
           <div classname="drink_ingredients">{drink.strIngredient4}</div>
           <div classname="drink_ingredients">{drink.strIngredient5}</div>
           <div classname="drink_ingredients">{drink.strIngredient6}</div>
           <div classname="drink_ingredients">{drink.strIngredient7}</div>
           <div classname="drink_ingredients">{drink.strIngredient8}</div>
           <div classname="drink_ingredients">{drink.strIngredient9}</div>
           <div classname="drink_ingredients">{drink.strIngredient10}</div>
           <div classname="drink_ingredients">{drink.strIngredient11}</div>
           <div classname="drink_ingredients">{drink.strIngredient12}</div>
           <div classname="drink_ingredients">{drink.strIngredient13}</div>
           <div classname="drink_ingredients">{drink.strIngredient14}</div>
           <div classname="drink_ingredients">{drink.strIngredient15}</div>
           <h4>Instructions</h4>
           <div classname="drink_instructions">{drink.strInstructions}</div>
        
        </section>
    )

}
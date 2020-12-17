import React, { useContext, useEffect, useState } from "react"
import { DrinksContext } from "./DrinkProvider"
import { favDrinksContext } from "./FavDrinks/FavDrinksProvider"
import "./Drink.css"

export const Details = (props) => {
    const {getDrinksById, drink} = useContext(DrinksContext)
     const {addFavDrink} = useContext(favDrinksContext)
    
    useEffect(() => {
        getDrinksById((props.match.params.drinksId))
            
    }, [])
    
//    const drinkss = drinks.filter(element => {
//         console.log(element)
//         return(
//             element.idDrink
//         )
//    })


// const FavButton = (props) => {
//     addFavDrink(props)
// }

//     console.log()

     const saveDrink  = () => {
         const newDrink = {...drink}
         
           addFavDrink({
               strDrink: drink.strDrink,
               strDrinkThumb: drink.strDrinkThumb,
               strIngredient1: drink.strIngredient1,
               strIngredient2: drink.strIngredient2,
               strIngredient3: drink.strIngredient3,
               strIngredient4: drink.strIngredient4,
               strIngredient5: drink.strIngredient5,
               strIngredient6: drink.strIngredient6,
               strIngredient7: drink.strIngredient7,
               strIngredient8: drink.strIngredient8,
               strIngredient9: drink.strIngredient9,
               strIngredient10: drink.strIngredient10,
               strIngredient11: drink.strIngredient11,
               strIngredient12: drink.strIngredient12,
               strIngredient13: drink.strIngredient13,
               strIngredient14: drink.strIngredient14,
               strIngredient15: drink.strIngredient15,
               strInstructions: drink.strInstructions,
               userId: parseInt(localStorage.getItem("DayDrinker"))
            })
     }
    
    return(
        <section className="drink">
            
           <p>Hello world!</p>
           <button type="button" onClick={evt =>{
               evt.preventDefault()
               saveDrink()
               
           }}>ADD TO FAVORITES</button>
           <h3 className="drink_name">{drink.strDrink}</h3>
           <img src={drink.strDrinkThumb} className = "drink__image" width = "100px" height = "100px"/>
           <h4>Ingredients</h4>
           <div className="drink_ingredients">{drink.strIngredient1}</div>
           <div className="drink_ingredients">{drink.strIngredient2}</div>
           <div className="drink_ingredients">{drink.strIngredient3}</div>
           <div className="drink_ingredients">{drink.strIngredient4}</div>
           <div className="drink_ingredients">{drink.strIngredient5}</div>
           <div className="drink_ingredients">{drink.strIngredient6}</div>
           <div className="drink_ingredients">{drink.strIngredient7}</div>
           <div className="drink_ingredients">{drink.strIngredient8}</div>
           <div className="drink_ingredients">{drink.strIngredient9}</div>
           <div className="drink_ingredients">{drink.strIngredient10}</div>
           <div className="drink_ingredients">{drink.strIngredient11}</div>
           <div className="drink_ingredients">{drink.strIngredient12}</div>
           <div className="drink_ingredients">{drink.strIngredient13}</div>
           <div className="drink_ingredients">{drink.strIngredient14}</div>
           <div className="drink_ingredients">{drink.strIngredient15}</div>
           <h4>Instructions</h4>
           <div className="drink_instructions">{drink.strInstructions}</div>
        
        </section>
    )

}
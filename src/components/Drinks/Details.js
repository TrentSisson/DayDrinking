import React, { useContext, useEffect, useState } from "react"
import { DrinksContext } from "./DrinkProvider"
import { favDrinksContext } from "./FavDrinks/FavDrinksProvider"
import { Link } from "react-router-dom"
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
/* I defined a function called saveDrink that when invoked will invoke addFavDrink 
which creats a new object with the properties I defined inside add favorite drink */

     const saveDrink  = () => {
        
         
           addFavDrink({
               strDrink: drink.strDrink,
               strDrinkThumb: drink.strDrinkThumb,
               idDrink: drink.idDrink,
               userId: parseInt(localStorage.getItem("DayDrinker")),
               
            })
            
     }
    
    return(
        <section className="drink">
            
            
           <button type="button" onClick={evt =>{
               evt.preventDefault()
               saveDrink()
               
                
            }}><Link className="nav__link" to="/drink/A">ADD TO FAVORITES</Link></button>
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
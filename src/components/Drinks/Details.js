import React from "react"
// import { DrinkContext } from "./DrinkProvider"
import "./Drink.css"



export const Drink = ({drink}) => {
    return(
        <section className="drink">
            <img src={drink.strDrinkThumb} className = "drink__image" width = "100px" height = "100px"/>
            <h3 className="drink_name">{drink.strDrink}</h3>
        </section>
    )

}
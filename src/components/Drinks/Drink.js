import React from "react"
// import { DrinkContext } from "./DrinkProvider"
import "./Drink.css"



export const Drink = ({drink}) => {
    return(
        <section className="drink">
            <h3 className="drink_name">{drink.strDrink}</h3>
        </section>
    )

}
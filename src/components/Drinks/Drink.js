import React from "react"
import { Link } from "react-router-dom"
// import { DrinkContext } from "./DrinkProvider"
import "./Drink.css"



export const Drink = ({drink}) => {
    return(
        <section className="drink">
            <img src={drink.strDrinkThumb} className = "drink__image" width = "175px" height = "175px"/>
            <h3 className="drink_name">
                <Link to = {`/${drink.idDrink}`}>
                {drink.strDrink}
                </Link>
            </h3>
        </section>
    )

}
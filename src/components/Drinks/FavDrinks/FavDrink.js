import React from "react"
import { Link } from "react-router-dom"
// import { DrinkContext } from "./DrinkProvider"
import "./FavDrink.css"


export const Drinks = ({ drink }) => {
    
    return (
        <section className="drink">
            <img src={drink.strDrinkThumb} className="drink__image" width="175px" height="175px" />
            <h3 className="favDrink_name">
                <Link to={`/drinks/${drink.id}`}>
                    {drink.strDrink}
                </Link>
            </h3>
        </section>
    )

}
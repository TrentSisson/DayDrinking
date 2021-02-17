import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { favDrinksContext } from "./FavDrinksProvider"
import "./FavDrink.css"
//exporting a function called Drinks has a drink object parameter, then returns specific properties
export const Drinks = ({ drink }) => {
    
    const { deleteFavDrink } = useContext(favDrinksContext)
    return (
        <section className="drink">
            <button className = "delete" onClick={()=> deleteFavDrink(drink.id)}>DELETE</button>
            <img src={drink.strDrinkThumb} className="drink__image" width="175px" height="175px" />
            <h3 className="favDrink_name">
                <Link to={`/drinks/${drink.id}`}>
                    {drink.strDrink}
                </Link>
            </h3>
        </section>
    )

}
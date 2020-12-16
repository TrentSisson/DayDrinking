import React, { useContext, useEffect } from "react"
import { favDrinksContext } from "./FavDrinksProvider"
import { Drinks } from "./FavDrink"


export const FavDrinksList = () => {
    const { favDrink, getFavDrinks } =useContext(favDrinksContext)

    useEffect(() => {
        console.log(favDrink)
        getFavDrinks()
    },
    []
    )

    
return(
    <>
    <div className="favDrinks">
        <h2>Favorite Drinks</h2>
           {favDrink.map(d => <Drinks key={d.id} drink={d}/> )}  
         

    </div>
    </>
)}


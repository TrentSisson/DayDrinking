import React, { useContext, useEffect } from "react"
import { DrinksContext } from "../DrinkProvider"
import { Drink } from "../Drink"


export const favDrinksList = () => {
    const { favDrinks, getfavDrinks } =useContext(favDrinksContext)

    useEffect(() => {
        console.log(favDrinks)
        getfavDrinks()
    },
    []
    )

    
return(
    <>
    <div className="drinks">
           {favDrinks.map(d => <Drink key={d.id} drink={d}/> )}  
         

    </div>
    </>
)}


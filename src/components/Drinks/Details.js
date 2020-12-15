import React, { useContext, useEffect, useState } from "react"
import { DrinksContext } from "./DrinkProvider"
import "./Drink.css"

export const Drinks = () => {
    const {getDrinksById, drinks} = useContext(DrinksContext)
    
    useEffect(() => {
        getDrinksById(drinks.idDrink)
    }, [])
    
    useEffect(() => {
        
        console.log(drinks)
    },
    [drinks]
    )
   const drinkss = drinks.filter(element => {
        console.log(element)
        return(
            element.idDrink
        )
   })


    

     
    
    return(
        <section className="drink">
            
           
           <h3 className="drink_name">{drinkss}</h3>
        )
        </section>
    )

}
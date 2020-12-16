import React, { useContext, useEffect } from "react"
import { DrinksContext } from "./DrinkProvider"
import { Drink } from "./Drink"


export const DrinkList = (props) => {
    const { drinks, getDrinks } =useContext(DrinksContext)

    useEffect(() => {
        getDrinks(props.startingDrinkLetter)
        console.log("props", props)
    },
    []
    )
    
    useEffect(() => {
        
        console.log(drinks)
       },
       [drinks]
       )


       useEffect(() => {
           getDrinks(props.startingDrinkLetter)
       },
       [props.startingDrinkLetter]
       )


return(
    <>
    <div className="drinks">
           {drinks.map(d => <Drink key={d.idDrink} drink={d}/> )}  
         

    </div>
    </>
)}


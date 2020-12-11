import React, { useContext, useEffect } from "react"
import { DrinksContext } from "./DrinkProvider"
import { Drink } from "./Drink"

export const DrinkList = () => {
    const { drinks, getDrinks } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinks()
    },
    []
    )

       useEffect(() => {
           console.log(drinks)
       },
       [drinks]
       )

return(
    <>
    <div className="drinks">
           {drinks.map(d => <Drink key={d.name} value={d.id} drink={d}/> )}  
         

    </div>
    </>
)}


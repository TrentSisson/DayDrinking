import React, { useContext, useEffect } from "react"
import { DrinksContext } from "./DrinkProvider"
import { Drink } from "./Drink"

export const DrinkListX = () => {
    const { drinks, getDrinksX } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksX()
    },
    []
    )

       useEffect(() => {   
       },
       [drinks]
       )

return(
    <>
    <div className="drinks">
           {drinks.map(d => <Drink key={d.id} drink={d}/> )}  
         

    </div>
    </>
)}

import React, { useContext, useEffect } from "react"
import { DrinksContext } from "./DrinkProvider"
import { Drink } from "./Drink"

export const DrinkListY = () => {
    const { drinks, getDrinksY } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksY()
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

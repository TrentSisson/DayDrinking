import React, { useContext, useEffect } from "react"
import { DrinksContext } from "../DrinkProvider"
import { Drink } from "../Drink"

export const DrinkListI = () => {
    const { drinks, getDrinksI } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksI()
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

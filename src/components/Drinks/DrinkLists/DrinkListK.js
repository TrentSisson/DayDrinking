import React, { useContext, useEffect } from "react"
import { DrinksContext } from "../DrinkProvider"
import { Drink } from "../Drink"

export const DrinkListK = () => {
    const { drinks, getDrinksK } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksK()
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

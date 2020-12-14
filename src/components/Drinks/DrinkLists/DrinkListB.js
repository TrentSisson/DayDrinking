import React, { useContext, useEffect } from "react"
import { DrinksContext } from "../DrinkProvider"
import { Drink } from "../Drink"

export const DrinkListB = () => {
    const { drinks, getDrinksB } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksB()
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


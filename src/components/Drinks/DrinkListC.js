import React, { useContext, useEffect } from "react"
import { DrinksContext } from "./DrinkProvider"
import { Drink } from "./Drink"

export const DrinkListC = () => {
    const { drinks, getDrinksC } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksC()
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


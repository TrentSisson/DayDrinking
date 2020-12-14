import React, { useContext, useEffect } from "react"
import { DrinksContext } from "./DrinkProvider"
import { Drink } from "./Drink"

export const DrinkListO = () => {
    const { drinks, getDrinksO } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksO()
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

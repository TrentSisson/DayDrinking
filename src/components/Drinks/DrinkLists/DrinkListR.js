import React, { useContext, useEffect } from "react"
import { DrinksContext } from "../DrinkProvider"
import { Drink } from "../Drink"

export const DrinkListR = () => {
    const { drinks, getDrinksR } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksR()
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

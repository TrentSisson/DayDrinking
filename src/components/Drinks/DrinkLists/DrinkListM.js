import React, { useContext, useEffect } from "react"
import { DrinksContext } from "../DrinkProvider"
import { Drink } from "../Drink"

export const DrinkListM = () => {
    const { drinks, getDrinksM } =useContext(DrinksContext)

    useEffect(() => {
        console.log("DrinkList")
        getDrinksM()
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

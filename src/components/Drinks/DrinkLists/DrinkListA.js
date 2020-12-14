import React, { useContext, useEffect } from "react"
import { DrinksContext } from "../DrinkProvider"
import { Drink } from "../Drink"


export const DrinkListA = () => {
    const { drinks, getDrinksA } =useContext(DrinksContext)

    useEffect(() => {
        console.log(drinks)
        getDrinksA()
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


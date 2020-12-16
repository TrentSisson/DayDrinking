import React, { useState, } from "react"
import { key }from "../ApiKey"




export const DrinksContext = React.createContext()

export const DrinkProvider = (props) => {
    const [drinks, setDrinks] = useState([])
    const [drink, setDrink] = useState([])

    
    const getDrinks = (letter) => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=${letter}`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
             })
    }
   
            const getDrinksById = (idDrink) => {
                return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/lookup.php?i=${idDrink}`)
                .then(res => res.json())
                .then(objDrink => {
                    setDrink(objDrink.drinks[0])
                        })
            }


    // console.log(setDrinks)

    return (
        <DrinksContext.Provider value={{
            drink,
            drinks, 
              getDrinksById, getDrinks
        }}>
            {props.children}
        </DrinksContext.Provider>
    )
}

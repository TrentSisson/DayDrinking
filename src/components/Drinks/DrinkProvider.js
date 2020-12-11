import React, { useState, } from "react"




export const DrinksContext = React.createContext()

export const DrinkProvider = (props) => {
    const [drinks, setDrinks] = useState([])

    const getDrinks = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
             })
    }
    // console.log(setDrinks)

    return (
        <DrinksContext.Provider value={{
            drinks, getDrinks
        }}>
            {props.children}
        </DrinksContext.Provider>
    )
}
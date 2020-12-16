import React, { useState, } from "react"





export const favDrinksContext = React.createContext()

export const FavDrinkProvider = (props) => {
    const [favDrink, setFavDrink] = useState([])

    
    const getFavDrinks = () => {
        return fetch (`http://localhost:8088/drinks`)
        .then(res => res.json())
        .then(setFavDrink)

             }
             return (
                <favDrinksContext.Provider value={{
                   favDrink, getFavDrinks
                }}>
                    {props.children}
                </favDrinksContext.Provider>
            )
        }



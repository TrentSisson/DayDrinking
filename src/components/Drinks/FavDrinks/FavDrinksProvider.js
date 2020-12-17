import React, { useState, } from "react"





export const favDrinksContext = React.createContext()

export const FavDrinkProvider = (props) => {
    const [favDrink, setFavDrink] = useState([])
    const [FavoriteDrink, setFavoriteDrink] = useState([])

    const getFavDrinks = () => {
        const activeUser = parseInt(localStorage.getItem("DayDrinker"))
        return fetch(`http://localhost:8088/drinks?userId=${activeUser}`)
            .then(res => res.json())
            .then(setFavDrink)

    }

    const getFavDrinksById = (id) => {
        return fetch(`http://localhost:8088/drinks/${id}`)
            .then(res => res.json())
            .then(setFavoriteDrink)
    }

    const addFavDrink = (drink) => {
        return fetch("http://localhost:8088/drinks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(drink)
        })
         .then(getFavDrinks)
    }




    return (
        <favDrinksContext.Provider value={{
            favDrink, FavoriteDrink, getFavDrinks,
            getFavDrinksById, addFavDrink
        }}>
            {props.children}
        </favDrinksContext.Provider>
    )
}



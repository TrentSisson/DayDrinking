import React, { useState, } from "react"
import {key} from "../../ApiKey"





export const favDrinksContext = React.createContext()

export const FavDrinkProvider = (props) => {
    const [favDrink, setFavDrink] = useState([])
    const [FavoriteDrink, setFavoriteDrink] = useState([])
    const [notes, setNotes] = useState([])
    

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
    const addNote = (note) => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(note)
        })
        .then(getNotesById)
    }

    const getNotesById = () => {
        return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(setNotes)
    }

    const deleteFavDrink = (id) => {
        return fetch(`http://localhost:8088/drinks/${id}`, {
            method: "DELETE",
        })
        .then(getFavDrinks)
    }
    
/* patch method allows for us to grab a property and change its value when the function is invoked.*/
    const liked = (noteId, boolean) =>{
        return fetch(`http://localhost:8088/notes/${noteId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/Json; charset=UTF-8"
            },
            body: JSON.stringify({
                liked: boolean
            })
        })
    
    .then(response => response.json())
    .then(getNotesById)
    
    }
    // const disliked = noteId =>{
    //     return fetch(`http://localhost:8088/notes/${noteId}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/Json; charset=UTF-8"
    //         },
    //         body: JSON.stringify({
    //             liked: false
    //         })
    //     })
    
    // .then(response => response.json())
    // .then(json => console.log(json))
    // }





    return (
        <favDrinksContext.Provider value={{
            favDrink, FavoriteDrink, notes, liked, getFavDrinks,
            getFavDrinksById, addFavDrink, addNote, getNotesById, deleteFavDrink
        }}>
            {props.children}
        </favDrinksContext.Provider>
    )
}



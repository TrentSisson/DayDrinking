import React, { useContext, useEffect, useRef, useState } from "react"
import { favDrinksContext } from "./FavDrinksProvider"
import { Notes } from "./Note"
import "./FavDrink.css"

export const FavDetails = (props) => {
    const { getFavDrinksById, FavoriteDrink, addNote, getNotesById, notes } = useContext(favDrinksContext)

    useEffect(() => {
        getFavDrinksById((props.match.params.drinksId))

    }, [])
    
    useEffect(() =>{
        getNotesById()
        
    },[])
    //    const drinkss = drinks.filter(element => {
    //         console.log(element)
    //         return(
    //             element.idDrink
    //         )
    //    })

const text = useRef(null)
const drinkId = parseInt(props.match.params.drinksId)
const saveNote = () => {
    addNote({
        text:text.current.value,
        drinkId: drinkId
    })
}

console.log(notes)


    return (
        <section className="drink">

            <p>Testing</p>
            <h3 className="drink_name">{FavoriteDrink.strDrink}</h3>
            <img src={FavoriteDrink.strDrinkThumb} className="FavoriteDrink__image" width="100px" height="100px" />
            <h4>Ingredients</h4>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient1}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient2}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient3}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient4}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient5}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient6}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient7}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient8}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient9}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient10}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient11}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient12}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient13}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient14}</div>
            <div className="FavoriteDrink_ingredients">{FavoriteDrink.strIngredient15}</div>
            <h4>Instructions</h4>
            <div className="FavoriteDrink_instructions">{FavoriteDrink.strInstructions}</div>
            <div className="note">{notes.map(n => {
                if (n.drinkId === drinkId){
                    return <Notes key={n.drinkId} note={n} />
                    
                }
                }) }</div>
                    <input className="favoriteDrinkNotes" type= "text" placeholder= "Add Notes" ref={text} ></input>
                    <button type="submit" onClick={evt =>{
                        evt.preventDefault()
                        saveNote()
                    }}>add</button>
                    </section>
    )

}
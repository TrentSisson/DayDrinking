import React, { useContext, useEffect, useRef } from "react"
import { favDrinksContext } from "./FavDrinksProvider"
import { DrinksContext } from "../DrinkProvider";
import { Notes } from "./Note"
import "./FavDrink.css"

/* props is a keyword in react which stands for properties and
is being used for passing data from component to another. */ 

export const FavDetails = (props) => {
    const { getFavDrinksById, FavoriteDrink, addNote, getNotesById, notes } = useContext(favDrinksContext)
    const {getDrinksById, drink} = useContext(DrinksContext)

    useEffect(() => {
        getFavDrinksById((props.match.params.drinksId))
        
    }, [])
    // useEffect(() => {
    // getDrinksById(FavoriteDrink.idDrink)
            
    // }, [getFavDrinksById])
    useEffect(() =>{
        getNotesById()
        
    },[])
const rating = useRef(null)
const text = useRef(null)
const drinkId = parseInt(props.match.params.drinksId)
const saveNote = () => {
    addNote({
        text:text.current.value,
        drinkId: drinkId,
        rating: rating.current.value,
        liked: false
    })
}



    return (
        <section className="drink">

            
            <h3 className="drink_name">{FavoriteDrink.strDrink}</h3>
            <img src={FavoriteDrink.strDrinkThumb} className="FavoriteDrink__image" width="100px" height="100px" />
            <h4>Ingredients</h4>
            <div className="FavoriteDrink_ingredients">{drink.strIngredient1}</div>
            <div className="FavoriteDrink_ingredients">{drink.strIngredient2}</div>
            <div className="drink_ingredients">{drink.strIngredient3}</div>
            <div className="drink_ingredients">{drink.strIngredient4}</div>
            <div className="drink_ingredients">{drink.strIngredient5}</div>
            <div className="drink_ingredients">{drink.strIngredient6}</div>
            <div className="drink_ingredients">{drink.strIngredient7}</div>
            <div className="drink_ingredients">{drink.strIngredient8}</div>
            <div className="drink_ingredients">{drink.strIngredient9}</div>
            <div className="drink_ingredients">{drink.strIngredient10}</div>
            <div className="drink_ingredients">{drink.strIngredient11}</div>
            <div className="drink_ingredients">{drink.strIngredient12}</div>
            <div className="drink_ingredients">{drink.strIngredient13}</div>
            <div className="drink_ingredients">{drink.strIngredient14}</div>
            <div className="drink_ingredients">{drink.strIngredient15}</div>
            <h4>Instructions</h4>
            <div className="drink_instructions">{drink.strInstructions}</div>
            <div className="note">{notes.map(n => {
                if (n.drinkId === drinkId){
                    {console.log(n)}
                    return <Notes key={n.id} note={n} />
                    
                }
                }) }</div>
                    <input className="favoriteDrinkNotes" type= "text" placeholder= "Add Notes" ref={text} ></input>
                    <input className="rating" type= "text" placeholder= "Add Rating" ref={rating} ></input>
                    <button type="submit" onClick={evt =>{
                        evt.preventDefault()
                        saveNote()
                    }}>add</button>
                    </section>
    )

}

import React, { useContext } from "react"
import {favDrinksContext} from "./FavDrinksProvider"
import "./FavDrink.css"

export const Notes = ({note}) => {
    const {liked} = useContext(favDrinksContext)
    const handlechange = (event) => {
        if (event.target.checked){
            liked(note.id, true)
        }else if (event.target.checked === false){
            liked(note.id, false)
        }
    }
    /* checked sets the state of the checkbox, I have checked equaling the liked property
    if the property does not exist or it equals false the checkbox will be unchecked.
    onchange happens when the checkbox is clicked, onchange equals the handlechange function
    which changes the property value of liked from false to true, or vice versa. */
    return (
        <section className="drink">
            <h3 className="note">{note.text}</h3>
            Enjoyed:YES<input name="note" type="checkbox" checked={note.liked} onChange={handlechange}/>

            
        </section>
    )

}
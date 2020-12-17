import React from "react"
import "./FavDrink.css"


export const Notes = ({note}) => {
    
    return (
        <section className="drink">
            <h3 className="favDrink_name">{note.text}</h3>
            <input className="please-work" type="checkbox"/>
            
        </section>
    )

}
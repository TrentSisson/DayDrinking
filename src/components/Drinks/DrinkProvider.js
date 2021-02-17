/* This code imports the main React library, and functions that it exports.
 These are special functions called hooks.
 You know something is a hook when it starts with the word "use".*/

import React, { useState, } from "react"
import { key }from "../ApiKey"


 /*Definition: useState() is what the React team calls a hook.
  It is used to store data about the component.
   You can translate its usage into English with the following statement.

 "My component has its own state to maintain.
  Therefore, I will use the State hook to store it."



 "When the user performs an action,
  and this component needs to do something in response to that action, 
  I will use the Effect hook to define those responses."

 A context stores a certain kind of data to be used in your application.
  Therefore, when you create a data provider component in React,
   you need to create a context.

 When you invoke a state hook, it gives us back an array,
  the first thing in that array is the default value that we specified is input.
   the 2nd thing that useState gives us back is a function,
    that function's single responsibilty is to change the value of the varable(drinks).
 */
export const DrinksContext = React.createContext()
/*DrinksContext contains all of my functions
 and variables that are in DrinksContext.provider*/ 

export const DrinkProvider = (props) => {
    const [drinks, setDrinks] = useState([])
    const [drink, setDrink] = useState([])

    
    const getDrinks = (letter) => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=${letter}`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
             })
             /*objDrinks is a function that contains the function set drinks

             setDrinks function contains all the objects from the drinks array*/

    }
   
            const getDrinksById = drink => {
                return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/lookup.php?i=${drink}`)
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
        // props.children represents the content between the opening and the closing tags,
        //  when invoking/rendering a component
    ) 
}

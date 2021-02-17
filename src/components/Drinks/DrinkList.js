import React, { useContext, useEffect } from "react"
import { DrinksContext } from "./DrinkProvider"
import { Drink } from "./Drink"

/* props is a keyword in react which stands for properties and
is being used for passing data from component to another. */ 
export const DrinkList = (props) => {
    const { drinks, getDrinks } =useContext(DrinksContext)

/* Definition: useEffect() is what the React team calls a hook.
  It is used to respond to changes in the component's state. 
  You can translate its usage into English with the following statement. */

    useEffect(() => {
        getDrinks(props.startingDrinkLetter)
        // console.log("props", props)
    },
    []
    )
    
    // useEffect(() => {
        
    //     console.log(drinks)
    //    },
    //    [drinks]
    //    )


       useEffect(() => {
           getDrinks(props.startingDrinkLetter)
       },
       [props.startingDrinkLetter]
       )

/* drinks is the array of objects that I get from the get drinks function in my drink provider
map is a function that will go through each object inside the drinks array.
inside map parenthesis, we define a function that calls the Drink import,
when the drink import is called we define a drink object parameter, this parameter must
equal an object.

*/
return(
    <>
    <div className="drinks">
           {drinks.map(d => <Drink key={d.idDrink} drink={d}/> )}  
        
        
    </div>
    </>
    
)}

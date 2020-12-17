import React, { useContext, useEffect } from "react"
import { favDrinksContext } from "./FavDrinksProvider"
import { Drinks } from "./FavDrink"


export const FavDrinksList = (props) => {
    const { favDrink, getFavDrinks } =useContext(favDrinksContext)
    const {getFavDrinksById, FavoriteDrink} = useContext(favDrinksContext)
        
        useEffect(() => {
            
            getFavDrinksById((favDrink.userId))
    
        }, [])

    

    
     if (localStorage.getItem("DayDrinker")===favDrink.userId){
    return(
        <>
    <div className="favDrinks">
        <h2>Favorite Drinks</h2>
           {favDrink.map(d => <Drinks key={d.id} drink={d}/> )}  
         

    </div>
    </>
)}
 else {
     return(
    <h2>Favorite Drinks</h2>
   )}


 }    


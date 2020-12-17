import React from  "react"
import { Route } from "react-router-dom"
import { DrinkProvider } from "./Drinks/DrinkProvider"
import { Details } from "./Drinks/Details"
import { DrinkList } from "./Drinks/DrinkList"
import { FavDrinksList } from "./Drinks/FavDrinks/FavDrinksList"
import { FavDrinkProvider } from "./Drinks/FavDrinks/FavDrinksProvider"
import { FavDetails } from "./Drinks/FavDrinks/FavDrinkDetails"


export const ApplicationView =(props) =>{
    return (
        <>
        <div className = "DrinksContainer">
        <DrinkProvider>
            <FavDrinkProvider>

                <Route exact path ="/" render ={
                 props =><>
                  <DrinkList startingDrinkLetter ="A"{...props}/>
                 <FavDrinksList {...props}/>
                 </>
             }/>
            <Route path ="/drink/:letter" render ={
                props =><>
                 <DrinkList startingDrinkLetter = {props.match.params.letter}{...props}/>
                <FavDrinksList {...props}/>
                </>
            }/>


            <Route path ="/drinks/:drinksId(\d+)"render = {
                props =><FavDetails {...props}/>
            }/>
         
            <Route exact path ="/:drinksId(\d+)"render = {
                props =><Details {...props}/>
            }/>
            </FavDrinkProvider>
        </DrinkProvider>
        </div>
        </>
    )
}
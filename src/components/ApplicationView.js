import React from  "react"
import { Route } from "react-router-dom"
import { DrinkProvider } from "./Drinks/DrinkProvider"
import { Details } from "./Drinks/Details"
import { DrinkList } from "./Drinks/DrinkList"



export const ApplicationView =(props) =>{
    return (
        <>
        <DrinkProvider>
            <Route path ="/drink/:letter" render ={
                props => <DrinkList startingDrinkLetter = {props.match.params.letter}{...props}/>
            }/>
            
         
            <Route exact path ="/:drinksId(\d+)"render = {
                props =><Details {...props}/>
            }/>
        </DrinkProvider>
        </>
    )
}
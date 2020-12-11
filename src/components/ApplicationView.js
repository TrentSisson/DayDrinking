import React from  "react"
import { Route } from "react-router-dom"
import { DrinkList } from "./Drinks/DrinkList"
import { DrinkProvider } from "./Drinks/DrinkProvider"



export const ApplicationView =(props) =>{
    return (
        <>
        <DrinkProvider>
            <Route exact path ="/">
                <DrinkList/>
            </Route>
        </DrinkProvider>
        </>
    )
}
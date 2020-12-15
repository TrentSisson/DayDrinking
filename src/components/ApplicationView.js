import React from  "react"
import { Route } from "react-router-dom"
import { DrinkListA } from "./Drinks/DrinkLists/DrinkListA"
import { DrinkListB } from "./Drinks/DrinkLists/DrinkListB"
import { DrinkListC } from "./Drinks/DrinkLists/DrinkListC"
import { DrinkListD } from "./Drinks/DrinkLists/DrinkListD"
import { DrinkListE } from "./Drinks/DrinkLists/DrinkListE"
import { DrinkListF } from "./Drinks/DrinkLists/DrinkListF"
import { DrinkListG } from "./Drinks/DrinkLists/DrinkListG"
import { DrinkListH } from "./Drinks/DrinkLists/DrinkListH"
import { DrinkListI } from "./Drinks/DrinkLists/DrinkListI"
import { DrinkListJ } from "./Drinks/DrinkLists/DrinkListJ"
import { DrinkListK } from "./Drinks/DrinkLists/DrinkListK"
import { DrinkListL } from "./Drinks/DrinkLists/DrinkListL"
import { DrinkListM } from "./Drinks/DrinkLists/DrinkListM"
import { DrinkListN } from "./Drinks/DrinkLists/DrinkListN"
import { DrinkListO } from "./Drinks/DrinkLists/DrinkListO"
import { DrinkListP } from "./Drinks/DrinkLists/DrinkListP"
import { DrinkListQ } from "./Drinks/DrinkLists/DrinkListQ"
import { DrinkListR } from "./Drinks/DrinkLists/DrinkListR"
import { DrinkListS } from "./Drinks/DrinkLists/DrinkListS"
import { DrinkListT } from "./Drinks/DrinkLists/DrinkListT"
import { DrinkListU } from "./Drinks/DrinkLists/DrinkListU"
import { DrinkListV } from "./Drinks/DrinkLists/DrinkListV"
import { DrinkListW } from "./Drinks/DrinkLists/DrinkListW"
import { DrinkListX } from "./Drinks/DrinkLists/DrinkListX"
import { DrinkListY } from "./Drinks/DrinkLists/DrinkListY"
import { DrinkListZ } from "./Drinks/DrinkLists/DrinkListZ"
import { DrinkProvider } from "./Drinks/DrinkProvider"
import { Details } from "./Drinks/Details"



export const ApplicationView =(props) =>{
    return (
        <>
        <DrinkProvider>
            <Route exact path ="/">
                <DrinkListA/>
            </Route>
            <Route exact path ="/B">
                <DrinkListB/>
            </Route>
            <Route exact path ="/C">
                <DrinkListC/>
                </Route>
            <Route exact path ="/D">
                <DrinkListD/>
                </Route>
            <Route exact path ="/E">
                <DrinkListE/>
                </Route>
            <Route exact path ="/F">
                <DrinkListF/>
                </Route>
            <Route exact path ="/G">
                <DrinkListG/>
                </Route>
            <Route exact path ="/H">
                <DrinkListH/>
                </Route>
            <Route exact path ="/I">
                <DrinkListI/>
                </Route>
            <Route exact path ="/J">
                <DrinkListJ/>
                </Route>
            <Route exact path ="/K">
                <DrinkListK/>
                </Route>
            <Route exact path ="/L">
                <DrinkListL/>
                </Route>
            <Route exact path ="/M">
                <DrinkListM/>
                </Route>
            <Route exact path ="/N">
                <DrinkListN/>
                </Route>
            <Route exact path ="/O">
                <DrinkListO/>
                </Route>
            <Route exact path ="/P">
                <DrinkListP/>
                </Route>
            <Route exact path ="/Q">
                <DrinkListQ/>
                </Route>
            <Route exact path ="/R">
                <DrinkListR/>
                </Route>
            <Route exact path ="/S">
                <DrinkListS/>
                </Route>
            <Route exact path ="/T">
                <DrinkListT/>
                </Route>
            <Route exact path ="/U">
                <DrinkListU/>
                </Route>
            <Route exact path ="/V">
                <DrinkListV/>
                </Route>
            <Route exact path ="/W">
                <DrinkListW/>
                </Route>
            <Route exact path ="/X">
                <DrinkListX/>
                </Route>
            <Route exact path ="/Y">
                <DrinkListY/>
                </Route>
            <Route exact path ="/Z">
                <DrinkListZ/>
                </Route>
            <Route exact path ="/:drinksId(\d+)"render = {
                props =><Details {...props}/>
            }/>
        </DrinkProvider>
        </>
    )
}
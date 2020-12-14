import React from  "react"
import { Route } from "react-router-dom"
import { DrinkListA } from "./Drinks/DrinkListA"
import { DrinkListB } from "./Drinks/DrinkListB"
import { DrinkListC } from "./Drinks/DrinkListC"
import { DrinkListD } from "./Drinks/DrinkListD"
import { DrinkListE } from "./Drinks/DrinkListE"
import { DrinkListF } from "./Drinks/DrinkListF"
import { DrinkListG } from "./Drinks/DrinkListG"
import { DrinkListH } from "./Drinks/DrinkListH"
import { DrinkListI } from "./Drinks/DrinkListI"
import { DrinkListJ } from "./Drinks/DrinkListJ"
import { DrinkListK } from "./Drinks/DrinkListK"
import { DrinkListL } from "./Drinks/DrinkListL"
import { DrinkListM } from "./Drinks/DrinkListM"
import { DrinkListN } from "./Drinks/DrinkListN"
import { DrinkListO } from "./Drinks/DrinkListO"
import { DrinkListP } from "./Drinks/DrinkListP"
import { DrinkListQ } from "./Drinks/DrinkListQ"
import { DrinkListR } from "./Drinks/DrinkListR"
import { DrinkListS } from "./Drinks/DrinkListS"
import { DrinkListT } from "./Drinks/DrinkListT"
import { DrinkListU } from "./Drinks/DrinkListU"
import { DrinkListV } from "./Drinks/DrinkListV"
import { DrinkListW } from "./Drinks/DrinkListW"
import { DrinkListX } from "./Drinks/DrinkListX"
import { DrinkListY } from "./Drinks/DrinkListY"
import { DrinkListZ } from "./Drinks/DrinkListZ"
import { DrinkProvider } from "./Drinks/DrinkProvider"



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
        </DrinkProvider>
        </>
    )
}
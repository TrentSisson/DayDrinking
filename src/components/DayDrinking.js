import React from "react"
//redirect will take you to a designated path(when someone is not logged in they are redirected to the login)
import { Route, Redirect, useHistory, Link } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
//applicationview is what is rendered on a certain pathway
import { ApplicationView} from "./ApplicationView"
import { Nav } from "./Nav/Nav"
import "./DayDrinking.css"
// export DayDrinking is a function that calls the routes/redirects/


export const DayDrinking = () => (
    <>
        <Route render={() => {
            // The user id is saved under the key app_user_id in local Storage. Change below if needed!
            if (localStorage.getItem("DayDrinker")) {
                return (
                    <>
               
                       <Route render={props => <Nav {...props} />} />
                       <Route render={props => <ApplicationView {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)
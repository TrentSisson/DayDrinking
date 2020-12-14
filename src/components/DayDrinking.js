import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ApplicationView} from "./ApplicationView"
import { Nav } from "./Nav/Nav"
import "./DayDrinking.css"

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
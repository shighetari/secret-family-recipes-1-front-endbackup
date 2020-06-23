import React from "react";
import { Route, Redirect } from "react-router-dom";
//will modify later
const PrivateRoute = ({ component: Component, ...rest }) => {
    //Get and define users token from Authenticator 
    const token = window.localStorage.getItem("token")
    return (
        <Route
            {...rest}
            render={(props) => {
                if (token) {
                    //if we have a token return the component
                    return <Component {...props} />
                } else {
                    //else redirect the user to /login
                    return <Redirect to="/" />
                }
            }}
        />
    )
}
export default PrivateRoute
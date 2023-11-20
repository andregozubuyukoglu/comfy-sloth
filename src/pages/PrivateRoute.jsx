import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useUserContext } from "../context/user_context"
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min"

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext()
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to="/"></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute

import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Navbar, Sidebar, Footer } from "./components"
import styled from "styled-components"

import {
  Home,
  Products,
  About,
  Checkout,
  Private,
  Error,
  Cart,
  SingleProduct,
} from "./pages"

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Home />
    </div>
  )
}

export default App

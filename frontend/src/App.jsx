import React from "react"
import NavigationArborescent from "../components/NavigationArborescent"
import TopMenu from "../components/TopMenu"
import Route from "../components/Route"
import Tabulation from "../components/Tabulation"
import Page from "../components/Page"

import "./App.css"

function App() {
 

  return (
    <>
    <TopMenu />
    <section className="aside">
    <NavigationArborescent />
    <section className="main">
    <Tabulation />
    <Route />
    <Page />
    </section>
    </section>
    </>
  )
}

export default App

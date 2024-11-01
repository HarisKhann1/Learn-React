import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/Footer"

function Layout(props) {
    

    return (
        <>
            {/* // static on everypage */}
            <Header /> 
            {/* // Dynamic  */}
            <Outlet /> 
            {/* // static on everpage */}
            <Footer /> 
        </>
    )
}

export default Layout

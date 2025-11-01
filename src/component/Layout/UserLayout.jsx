import React from 'react'
import Home from '../../pages/Home'
import Header from "./Header"
import Footer from "../common/Footer"
import {Outlet} from "react-router-dom";


const UserLayout = () => {
  return (
    <>
    <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
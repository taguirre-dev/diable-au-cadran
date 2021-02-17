import React, { useContext } from "react"
import FirebaseContext from "../../../firebase/context"
import "./style/style.css"

import Component from "./Menu"

const Menu = ({ listItem }) => {
  const { appContext, setAppContext } = useContext(FirebaseContext)

  return (
    <Component
      setAppContext={setAppContext}
      appContext={appContext}
      listItem={listItem}
    />
  )
}

export default Menu

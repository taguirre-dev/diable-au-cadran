import React, { useContext } from "react"
import FirebaseContext from "../../../firebase/context"
import "./style/style.css"
import useBackground from "../../../utils/hooks/useBackground"
import useTransition from "../../../utils/hooks/useTransition"
import Component from "./Contact"

const Contact = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()
  const { appContext } = useContext(FirebaseContext)

  return (
    <Component
      section={section}
      filterFx={filterFx}
      isChanging={isChanging}
      appContext={appContext}
    />
  )
}

export default Contact

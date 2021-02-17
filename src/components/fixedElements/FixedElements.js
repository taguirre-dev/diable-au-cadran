import React, { useContext } from "react"
import FirebaseContext from "../../firebase/context"
import useCustomUx from "../../utils/hooks/useCustomUx"
import Menu from "./menu/"
import Pager from "./pager/Pager"

import "./style/style.css"

const FixedElements = ({ listSectionWithoutLabel, listSectionWithLabel }) => {
  const { appContext } = useContext(FirebaseContext)
  const customClass = useCustomUx()

  const siteName =
    appContext.globalSettings.length && appContext.globalSettings[0].siteName

  return (
    <div className={`header ${customClass}`}>
      <div className='site-name'>{siteName}</div>
      <Menu listItem={listSectionWithLabel} />
      <Pager listItem={listSectionWithoutLabel} />
    </div>
  )
}

export default FixedElements

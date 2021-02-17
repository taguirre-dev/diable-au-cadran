import React from "react"
import "./style/style.css"
import useBackground from "../../../utils/hooks/useBackground"
import useTransition from "../../../utils/hooks/useTransition"
import useActivSection from "../../../utils/hooks/useActivSection"
import Component from "./SavoirFaire"

const SavoirFaire = ({ section }) => {
  const filterFx = useBackground()
  const isChanging = useTransition()
  const isActivSection = useActivSection(section)
  return (
    <Component
      section={section}
      filterFx={filterFx}
      isChanging={isChanging}
      isActivSection={isActivSection}
    />
  )
}

export default SavoirFaire

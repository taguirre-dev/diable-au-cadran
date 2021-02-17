import React from "react"
import "./style/style.css"
import Scroller from "../../UX-UI/scroller/Scroller"
import MouseTracker from "../../UX-UI/mouseTracker/MouseTracker"

/**
 * Home page du site
 */
const HomePage = ({ section, filterFx, isChanging }) => {
  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} homePage`}
      >
        <div className={`section-container ${filterFx}`}>
          <MouseTracker />
          <Scroller />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(HomePage)

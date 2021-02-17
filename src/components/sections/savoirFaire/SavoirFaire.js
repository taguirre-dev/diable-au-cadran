import React from "react"
import { addLineBreaks } from "../../../utils/textUtil"

import "./style/style.css"

const SavoirFaire = ({ section, isChanging, filterFx, isActivSection }) => {
  if (section) {
    return (
      <div
        className={`section section${section.tech.order} ${isChanging} ${isActivSection} savoir-faire`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className={`left-bloc-dark ${isActivSection}`}>
            <div className='text-container'>
              <div className='content'>{addLineBreaks(section.content)}</div>
              <div className='profil-picture'>
                <div className='picture'></div>
              </div>
            </div>
          </div>
          <div className={`right-bloc-light ${isActivSection}`}>
            <h1 className='title-decoration' data-text={section.title}>
              {section.title}
            </h1>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default React.memo(SavoirFaire)

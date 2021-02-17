import React from "react"
import { addLineBreaks } from "../../../utils/textUtil"

import "./style/style.css"

const Service = ({ section, isChanging, filterFx, isActivSection }) => {
  if (section) {
    return (
      <div
        id='section1'
        className={`section section${section.tech.order} ${isChanging} ${isActivSection} service`}
      >
        <div className={`section-container ${filterFx}`}>
          <div className={`left-bloc-dark ${isActivSection}`}>
            <div className='text-container'>
              <div className='content'>{addLineBreaks(section.content1)}</div>
              <h2
                className={`${
                  isActivSection ? "anim-title activ" : "anim-title"
                }`}
              >
                <span>100% artisanal</span>
                <span>Découvrez l'atelier !</span>
              </h2>
              <div className='content'>{addLineBreaks(section.content2)}</div>
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

export default React.memo(Service)

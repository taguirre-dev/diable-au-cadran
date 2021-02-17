import React, { useContext } from "react"
import FirebaseContext from "../firebase/context"
import FixedElements from "./fixedElements/FixedElements"

/**
 * Composant qui permet d'afficher les contrôleurs du site (pager et menu latéral)
 * Il y a un seul contrôleur pour deux composants
 * @param {} props
 */
export const SectionControler = (props) => {
  const { appContext, setAppContext } = useContext(FirebaseContext)
  const { getCurrentSlideIndex } = props
  const currentSlideIndex = getCurrentSlideIndex()

  const renderSlidesNumbers = (currentSlideIndex, displayLabel) => {
    const { slidesCount, scrollToSlide } = props

    // Gère le clic sur un des items (menu et pager)
    const handleClick = (i) => {
      if (appContext.isMenuOpen) {
        setAppContext((prev) => {
          return { ...prev, isMenuOpen: false, isChanging: true }
        })
      } else {
        setAppContext((prev) => {
          return { ...prev, isChanging: true }
        })
      }
      setTimeout(() => scrollToSlide(i), 1000)
    }

    // Calcule le nom de balise slide il y a dans App.js et ajoute le nom de button
    const slidesNumbers = []
    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        disabled: currentSlideIndex === i,
        className: "item",
        key: i,
        onClick: () => handleClick(i),
      }
      slidesNumbers.push(
        <div {...buttonProps}>
          {displayLabel && appContext.sections[i].title}
        </div>
      )
    }
    return slidesNumbers
  }

  return (
    <FixedElements
      listSectionWithoutLabel={renderSlidesNumbers(currentSlideIndex, false)}
      listSectionWithLabel={renderSlidesNumbers(currentSlideIndex, true)}
    />
  )
}

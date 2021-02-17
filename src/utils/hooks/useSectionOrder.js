import { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

/**
 * Hook qui nous permet de savoir si la section cliquée est inférieur ou supérieure à la précédente
 * Permet de corriger le décalage avec le page (scroll active en haut de page)
 *
 * Changement en cours : on insère la class css qui ajoute un border blanc
 */
const useSectionOrder = () => {
  const { appContext } = useContext(FirebaseContext)
  const [shouldDelay, setShouldDelay] = useState()

  useEffect(() => {
    let activSection = Object.keys(appContext.sections)
      .filter(
        (section) =>
          appContext.sections[section].id === appContext.idActivSection
      )
      .map((section) => appContext.sections[section])

    if (Object.keys(appContext.targetSection).length !== 0) {
      if (activSection[0].tech.order > appContext.targetSection.tech.order) {
        setShouldDelay(true)
      } else {
        setShouldDelay(false)
      }
    }
  }, [appContext.targetSection])

  return shouldDelay
}

export default useSectionOrder

import { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

/**
 * Hook qui écoute l'ouverture du menu latéral et applice une filtre CSS
 *
 * Ouverture du menu latéral : on insère la class filterFx dans le DOM
 */
const useBackground = () => {
  const { appContext } = useContext(FirebaseContext)

  const [cssClass, setCssClass] = useState("")

  useEffect(() => {
    if (appContext.isMenuOpen || appContext.isChanging) {
      setCssClass("filterFx")
    } else setCssClass("")
  }, [appContext.isMenuOpen, appContext.isChanging])

  return cssClass
}

export default useBackground

import { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

/**
 * Hook qui écoute s'il y a un changement de section en cours
 *
 * Changement en cours : on insère la class css qui ajoute un border blanc
 */
const useTransition = () => {
  const { appContext } = useContext(FirebaseContext)
  const [cssClass, setCssClass] = useState("")

  useEffect(() => {
    const cssClass = appContext.isChanging ? "isChanging" : ""
    setCssClass(cssClass)
  }, [appContext.isChanging])

  return cssClass
}

export default useTransition

import { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

const useActivSection = (section) => {
  const { appContext } = useContext(FirebaseContext)
  const [isActiv, setIsActiv] = useState()

  useEffect(() => {
    if (appContext.idActivSection === section.id) {
      setIsActiv("activ-section")
    } else setIsActiv(null)
  }, [appContext.idActivSection, section.id])

  return isActiv
}

export default useActivSection

import { useContext, useEffect, useState } from "react"
import FirebaseContext from "../../firebase/context"

const useCustomUx = () => {
  const { appContext } = useContext(FirebaseContext)
  const [customUx, setCustomUx] = useState("")

  useEffect(() => {
    appContext.sections
      .filter((section) => section.id === appContext.idActivSection)
      .map((section) => {
        return setCustomUx(`custom-section-${section.tech.order + 1}`)
      })
  }, [appContext.idActivSection])

  return customUx
}

export default useCustomUx

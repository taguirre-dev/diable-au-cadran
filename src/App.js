import React, { useState, useEffect, lazy, Suspense } from "react"
import { FullPage, Slide } from "react-full-page"
import firebase, { FirebaseContext } from "./firebase"
import Loading from "./components/UX-UI/loading/Loading"
import HomePage from "./components/sections/homePage/"
// import Service from "./components/sections/service/"
// import SavoirFaire from "./components/sections/savoirFaire"
// import Contact from "./components/sections/contact/"

import { SectionControler } from "./components/SectionControler"

import "./style/common.css"
import "./style/section.css"

const Service = lazy(() => import("./components/sections/service/"))
const SavoirFaire = lazy(() => import("./components/sections/savoirFaire"))
const Contact = lazy(() => import("./components/sections/contact/"))

// Context de l'application
const INITIAL_CONTEXT = {
  isChanging: false, // si l'utilisateur change de section
  isMenuOpen: false, // si l'utilisateur ouvre la section
  idActivSection: "t6bys0zleWutaW74BnTu", // id de la première section
  targetSection: {},
  sections: {}, // obj avec les objets des sections
  globalSettings: {},
}

export const App = () => {
  const [appContext, setAppContext] = useState(INITIAL_CONTEXT)

  /**
   * Met à jour l'id de la section active dans le context
   * @param {from, to} index de départ et d'arrivé
   */
  const afterChange = ({ from, to }) => {
    setAppContext((prev) => {
      return {
        ...prev,
        idActivSection: appContext.sections[to].id,
        isChanging: false,
      }
    })
  }

  const beforeChange = () => {
    setAppContext((prev) => {
      return {
        ...prev,
        isChanging: true,
      }
    })
  }

  /**
   * Met à jour le context (sections) avec les données reçues de firebase.
   * Injection des sections dans le context.
   * @param {*} snapshot
   */
  const updateSectionsContextWithFirebase = (snapshot) => {
    const sections = snapshot.docs.map((doc) => {
      const section = {
        id: doc.id, // on ajoute l'identifiant du document dans la section
        ...doc.data(), // on ajoute le reste des données
      }
      return section
    })

    setAppContext((prev) => {
      return { ...prev, sections: sections }
    })
  }

  /**
   * Met à jour le context (globalSettings) avec les données reçues de firebase.
   * Injection des sections dans le context.
   * @param {*} snapshot
   */
  const updateGlobalSettingsContextWithFirebase = (snapshot) => {
    const settings = snapshot.docs.map((doc) => {
      return doc.data()
    })

    setAppContext((prev) => {
      return { ...prev, globalSettings: settings }
    })
  }

  /**
   * Met à jour le context avec les données (firebase).
   */
  useEffect(() => {
    const getSections = async () => {
      firebase.db
        .collection("sections")
        .orderBy("tech.order", "asc")
        .onSnapshot(updateSectionsContextWithFirebase)
    }

    const getGlobalSettings = async () => {
      firebase.db
        .collection("global")
        .onSnapshot(updateGlobalSettingsContextWithFirebase)
    }

    const doIt = () => {
      getSections()

      getGlobalSettings()
    }
    return doIt()
  }, [])

  if (!appContext.sections.length) {
    return <Loading />
  } else {
    return (
      <FirebaseContext.Provider value={{ appContext, setAppContext, firebase }}>
        <div className='sections'>
          <FullPage
            controls={SectionControler}
            duration={1500}
            afterChange={afterChange}
            beforeChange={beforeChange}
          >
            <Slide>
              <HomePage section={appContext.sections[0]} />
            </Slide>
            {/* <Slide>
              <Suspense fallback={<div>loading</div>}>
                <Service section={appContext.sections[1]} />
              </Suspense>
            </Slide>
            <Slide>
              <Suspense fallback={<div>loading</div>}>
                <SavoirFaire section={appContext.sections[2]} />
              </Suspense>
            </Slide>
            <Slide>
              <Suspense fallback={<div>loading</div>}>
                <Contact section={appContext.sections[3]} />
              </Suspense>
            </Slide> */}
          </FullPage>
        </div>
      </FirebaseContext.Provider>
    )
  }
}

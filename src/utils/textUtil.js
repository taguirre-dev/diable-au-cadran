import React from "react"

/**
 * Fonction qui retourne un nouveau noeud react dans le DOM lorsqu'un \n est détecté dans un texte.
 * @param {} string
 */
export const addLineBreaks = (string) =>
  string.split("\\n").map((text, index) => {
    return (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    )
  })

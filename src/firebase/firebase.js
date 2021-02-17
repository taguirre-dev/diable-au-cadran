import app from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import firebaseConfig from "./config"

/**
 * Class servant d'interface avec Firebase
 * Initialisation database, authentification facebook
 */
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.db = app.firestore()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    this.auth = app.auth()
  }

  login = async (provider) => {
    await this.auth.signInWithPopup(this[`${provider}Provider`])
  }
  logout = async () => await this.auth.signOut()
}

const firebase = new Firebase()
export default firebase

/** ATTENTION : ne pas exposer
 *
 * Configuration Firebase (à retrouver sur l'interface Firebase)
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_DIABLE_AU_CADRAN_API_KEY,
  authDomain: process.env.REACT_APP_DIABLE_AU_CADRAN_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DIABLE_AU_CADRAN_DATABASE_URL,
  projectId: process.env.REACT_APP_DIABLE_AU_CADRAN_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DIABLE_AU_CADRAN_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DIABLE_AU_CADRAN_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DIABLE_AU_CADRAN_APP_ID,
}

export default firebaseConfig

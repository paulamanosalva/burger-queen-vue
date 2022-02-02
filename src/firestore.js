import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './fbConfig'

initializeApp({ firebaseConfig })

const db = getFirestore()

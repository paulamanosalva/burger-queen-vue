import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { firebaseConfig } from './fbConfig'

initializeApp({ firebaseConfig })

const db = getFirestore()

export const addData = async (name, order, total) => {
  const docRef = await addDoc(collection(db, 'publicaciones'), {
    name: name,
    order: order,
    total: 0
  })
  return docRef
}

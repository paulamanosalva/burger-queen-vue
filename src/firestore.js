import { initializeApp } from 'firebase/app'
import {
  getFirestore, addDoc, collection, query,
  onSnapshot
} from 'firebase/firestore'
import { firebaseConfig } from './fbConfig'

initializeApp(firebaseConfig)

const db = getFirestore()

const addData = async (data, callback) => {
  const docRef = await addDoc(collection(db, 'orders'), data
  )
  callback()
  return docRef
}

const readData = (publicaciones, callback) => {
  const q = query(collection(db, publicaciones))
  onSnapshot(q, (querySnapshot) => {
    const posts = []
    querySnapshot.forEach((document) => {
      const element = {}
      element.id = document.id
      element.data = document.data()
      posts.push(element)
    })
    callback(posts)
  })
}

export { addData, readData }

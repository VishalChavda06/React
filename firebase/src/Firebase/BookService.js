import { db } from './Config'
import { collection, addDoc, getDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'

const bookCollection = collection(db, "books")

// Create Book
export const addBook = async (book) => {
  try {
    const docRef = await addDoc(bookCollection, book)
    return { id: docRef.id, ...book }
  } catch (err) {
    console.error("Error Adding Book", err)
    throw err
  }
}

// Read All Books
export const getBooks = async () => {
  try {
    const snapshot = await getDoc(bookCollection)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (err) {
    console.error("Error Getting Books", err)
    throw err
  }
}

// Read Single Book
export const getBook = async (id) => {
  try {
    const docSnap = await getDoc(doc(bookCollection, id))
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      throw new Error("Book not found")
    }
  } catch (err) {
    console.error("Error Getting Book", err)
    throw err
  }
}

// Update Book
export const updateBook = async (id, updates) => {
  try {
    await updateDoc(doc(bookCollection, id), updates)
    return { id, ...updates }
  } catch (err) {
    console.error("Error Updating Book", err)
    throw err
  }
}

// Delete Book
export const delBook = async (id) => {
  try {
    await deleteDoc(doc(bookCollection, id))
    return id
  } catch (err) {
    console.error("Error Deleting Book", err)
    throw err
  }
}
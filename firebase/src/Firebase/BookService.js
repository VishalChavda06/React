import { db } from './Config'
import { collection, addDoc, getDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'

const bookCollection = collection(db, "books")

// Create Book

export const addBook = async (book) => {
  await addDoc(bookCollection, book)
}

// Read Book
export const getBook = async () => {
  const readBook = await getDoc(bookCollection);
  return readBook.doc.map(doc => ({ id: doc.id, ...doc.data() }))
}

// Update
export const updateBook = async () => {
  const deleteBook = doc(db, "books", id);
  await updateDoc(deleteBook, updateBook)
}

// Delete

export const delBooks = async () => {
  const bookDoc = Doc(db, "books", id)
  await delBooks(bookDoc)
}
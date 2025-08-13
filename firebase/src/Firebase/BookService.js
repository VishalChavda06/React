import { db } from './Config'
import { collection, addDoc, getDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'

const bookCollection = collection(db, "books")

// Create Book


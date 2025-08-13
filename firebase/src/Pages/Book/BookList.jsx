import { useState, useEffect } from "react"
import { getBook, delBooks } from "../../Firebase/BookService"

const BookList = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const data = await getBook()
    setBooks(data)
    console.log(data)
  }

  const handleDelete = async (id) => {
    await delBooks(id)
    fetchBooks()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Library Books</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} className="border-t">
              <td className="p-2 border">{book.title}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border">
                <Button className="mr-2">Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(book.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookList

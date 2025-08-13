import { useState } from "react"
import { addBook } from "../../Firebase/BookService"
import { useNavigate } from "react-router-dom"

const AddBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (!title.trim()) return setError("Title is required")
    try {
      await addBook({ title, author })
      setTitle("")
      setAuthor("")
      navigate("/") // Adjust route if needed
    } catch (err) {
      setError("Failed to add book. Please try again.")
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border mx-3" placeholder="Book Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="border mx-3" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook

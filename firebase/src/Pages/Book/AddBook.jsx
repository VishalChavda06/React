import { useState } from "react"
import { addBook } from "../../Firebase/BookService"
import { useNavigate } from "react-router"


const AddBook = () => {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addBook({ title, author })
    navigate("/")
  }


  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border mx-3" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border mx-3" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook

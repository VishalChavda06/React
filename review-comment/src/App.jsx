import { useState } from 'react'
import './App.css'

function App() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      <h1 className="text-2xl font-bold mb-4 text-white">Customer Review</h1>
      <div className="flex space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={(hover || rating) >= star ? '#facc15' : '#e5e7eb'}
              className="w-10 h-10 transition-colors duration-200 cursor-pointer"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          </button>
        ))}
      </div>
      {rating > 0 && (
        <div className="text-lg text-white">You rated this {rating} star{rating > 1 ? 's' : ''}!</div>
      )}
    </div>
  )
}

export default App

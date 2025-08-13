import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./Pages/Book/BookList";
import AddBook from "./Pages/Book/AddBook"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </Router>
  );
}
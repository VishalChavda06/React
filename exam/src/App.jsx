import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import NavbarComponent from './components/Navbar'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import StudentDetails from './components/StudentDetails'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavbarComponent />
          <Container fluid className="mt-4">
            <Routes>
              <Route path="/" element={
                <div className="text-center">
                  <h1 className="display-4 mb-4">Welcome to Student Management System</h1>
                  <p className="lead">Manage your students efficiently with our comprehensive system</p>
                </div>
              } />
              <Route path="/students" element={<StudentList />} />
              <Route path="/add-student" element={<StudentForm />} />
              <Route path="/student/:id" element={<StudentDetails />} />
              <Route path="/about" element={
                <div className="text-center">
                  <h2>About Student Management System</h2>
                  <p>This is a comprehensive system for managing student information.</p>
                </div>
              } />
            </Routes>
          </Container>
        </div>
      </Router>
    </Provider>
  )
}

export default App

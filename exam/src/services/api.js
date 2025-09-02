import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`)
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`Response from ${response.config.url}:`, response.status)
    return response
  },
  (error) => {
    console.error('Response error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

// Student API endpoints
export const studentAPI = {
  // Get all students
  getAllStudents: () => api.get('/students'),
  
  // Get student by ID
  getStudentById: (id) => api.get(`/students/${id}`),
  
  // Create new student
  createStudent: (studentData) => api.post('/students', studentData),
  
  // Update student
  updateStudent: (id, studentData) => api.put(`/students/${id}`, studentData),
  
  // Delete student
  deleteStudent: (id) => api.delete(`/students/${id}`),
  
  // Search students (optional)
  searchStudents: (query) => api.get(`/students?q=${query}`),
}

export default api

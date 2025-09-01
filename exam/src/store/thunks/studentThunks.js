import {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  fetchStudentStart,
  fetchStudentSuccess,
  fetchStudentFailure,
  addStudentStart,
  addStudentSuccess,
  addStudentFailure,
  updateStudentStart,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure
} from '../actions/studentActions'

// Base URL for API - you can change this to your actual API endpoint
const API_BASE_URL = 'http://localhost:3001/api' // Adjust this to your API URL

// Fetch all students thunk
export const fetchStudents = () => {
  return async (dispatch) => {
    dispatch(fetchStudentsStart())
    
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch(`${API_BASE_URL}/students`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const students = await response.json()
      dispatch(fetchStudentsSuccess(students))
    } catch (error) {
      console.error('Error fetching students:', error)
      dispatch(fetchStudentsFailure(error.message))
    }
  }
}

// Fetch single student thunk
export const fetchStudent = (studentId) => {
  return async (dispatch) => {
    dispatch(fetchStudentStart())
    
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch(`${API_BASE_URL}/students/${studentId}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Student not found')
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const student = await response.json()
      dispatch(fetchStudentSuccess(student))
    } catch (error) {
      console.error('Error fetching student:', error)
      dispatch(fetchStudentFailure(error.message))
    }
  }
}

// Add new student thunk
export const addStudent = (studentData) => {
  return async (dispatch) => {
    dispatch(addStudentStart())
    
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch(`${API_BASE_URL}/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const newStudent = await response.json()
      dispatch(addStudentSuccess(newStudent))
      return newStudent
    } catch (error) {
      console.error('Error adding student:', error)
      dispatch(addStudentFailure(error.message))
      throw error
    }
  }
}

// Update student thunk
export const updateStudent = (studentId, studentData) => {
  return async (dispatch) => {
    dispatch(updateStudentStart())
    
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const updatedStudent = await response.json()
      dispatch(updateStudentSuccess(updatedStudent))
      return updatedStudent
    } catch (error) {
      console.error('Error updating student:', error)
      dispatch(updateStudentFailure(error.message))
      throw error
    }
  }
}

// Delete student thunk
export const deleteStudent = (studentId) => {
  return async (dispatch) => {
    dispatch(deleteStudentStart())
    
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      dispatch(deleteStudentSuccess(studentId))
    } catch (error) {
      console.error('Error deleting student:', error)
      dispatch(deleteStudentFailure(error.message))
      throw error
    }
  }
}

// Mock data thunks for development/testing
// You can use these when you don't have a backend yet

// Mock fetch students
export const fetchStudentsMock = () => {
  return async (dispatch) => {
    dispatch(fetchStudentsStart())
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock data
      const mockStudents = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1 (555) 123-4567',
          course: 'Computer Science',
          address: '123 Main Street, City, State 12345',
          dateOfBirth: '1995-05-15',
          status: 'Active',
          enrollmentDate: '2023-09-01',
          gpa: '3.8'
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          phone: '+1 (555) 987-6543',
          course: 'Mathematics',
          address: '456 Oak Avenue, City, State 12345',
          dateOfBirth: '1996-08-22',
          status: 'Active',
          enrollmentDate: '2023-09-01',
          gpa: '3.9'
        },
        {
          id: 3,
          name: 'Bob Johnson',
          email: 'bob@example.com',
          phone: '+1 (555) 456-7890',
          course: 'Physics',
          address: '789 Pine Road, City, State 12345',
          dateOfBirth: '1994-12-10',
          status: 'Inactive',
          enrollmentDate: '2022-09-01',
          gpa: '3.5'
        }
      ]
      
      dispatch(fetchStudentsSuccess(mockStudents))
    } catch (error) {
      dispatch(fetchStudentsFailure(error.message))
    }
  }
}

// Mock fetch single student
export const fetchStudentMock = (studentId) => {
  return async (dispatch) => {
    dispatch(fetchStudentStart())
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Mock data
      const mockStudent = {
        id: parseInt(studentId),
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 (555) 123-4567',
        course: 'Computer Science',
        address: '123 Main Street, City, State 12345',
        dateOfBirth: '1995-05-15',
        status: 'Active',
        enrollmentDate: '2023-09-01',
        gpa: '3.8'
      }
      
      dispatch(fetchStudentSuccess(mockStudent))
    } catch (error) {
      dispatch(fetchStudentFailure(error.message))
    }
  }
}

// Mock add student
export const addStudentMock = (studentData) => {
  return async (dispatch) => {
    dispatch(addStudentStart())
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create new student with generated ID
      const newStudent = {
        id: Date.now(), // Simple ID generation
        ...studentData,
        enrollmentDate: new Date().toISOString().split('T')[0],
        gpa: '0.0'
      }
      
      dispatch(addStudentSuccess(newStudent))
      return newStudent
    } catch (error) {
      dispatch(addStudentFailure(error.message))
      throw error
    }
  }
}

// Mock delete student
export const deleteStudentMock = (studentId) => {
  return async (dispatch) => {
    dispatch(deleteStudentStart())
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      dispatch(deleteStudentSuccess(studentId))
    } catch (error) {
      dispatch(deleteStudentFailure(error.message))
      throw error
    }
  }
}

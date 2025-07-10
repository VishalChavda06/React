import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'

const StudnetList = () => {
    const [students, setStudents] = useState([])

    const getStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/students')
            setStudents(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getStudents()
    }, [])

    // delete student
    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/students/${id}`)
            getStudents()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center drop-shadow">Student List</h1>
            <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="p-3 text-left font-semibold text-gray-700 rounded-tl-2xl">Name</th>
                            <th className="p-3 text-left font-semibold text-gray-700">Email</th>
                            <th className="p-3 text-left font-semibold text-gray-700">Phone</th>
                            <th className="p-3 text-left font-semibold text-gray-700">Course</th>
                            <th className="p-3 text-left font-semibold text-gray-700">Address</th>
                            <th className="p-3 text-left font-semibold text-gray-700">Gender</th>
                            <th className="p-3 text-left font-semibold text-gray-700">Age</th>
                            <th className="p-3 text-center font-semibold text-gray-700 rounded-tr-2xl">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, idx) => (
                            <tr
                                key={student.id}
                                className={
                                    `transition-colors ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50`
                                }
                            >
                                <td className='p-3 text-gray-800'>{student.name}</td>
                                <td className='p-3 text-gray-800'>{student.email}</td>
                                <td className='p-3 text-gray-800'>{student.phone}</td>
                                <td className='p-3 text-gray-800'>{student.course}</td>
                                <td className='p-3 text-gray-800'>{student.address}</td>
                                <td className='p-3 text-gray-800'>{student.gender}</td>
                                <td className='p-3 text-gray-800'>{student.age}</td>
                                <td className='p-3 flex justify-center items-center gap-2'>
                                    <Link
                                        to={`/student-form/${student.id}`}
                                        className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow transition-colors duration-150 flex items-center gap-1'
                                        title="Edit"
                                    >
                                        <FaEdit className="mr-1" />
                                        Edit
                                    </Link>
                                    <button
                                        className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow transition-colors duration-150 flex items-center gap-1'
                                        onClick={() => deleteStudent(student.id)}
                                        title="Delete"
                                    >
                                        <FaTrash className="mr-1" />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudnetList
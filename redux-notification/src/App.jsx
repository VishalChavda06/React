import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux';
import { showNotification } from './notificationSlice.jsx';
import Notification from './Notification.jsx';

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  const handleShowNotification = () => {
    dispatch(showNotification('This is a notification!'));
  };

  return (
    <>
      <Notification />
      <h1 className='text-3xl m-3'>Redux-Notification</h1>
      <button
        onClick={handleShowNotification}
        className="mt-8 ml-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Show Notification
      </button>
    </>
  )
}

export default App

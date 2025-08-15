import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import TopHeadline from '../Components/TopHeadline';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import LocationPage from '../Pages/LocationPage';
import HomePage from '../Pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <TopHeadline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/location' element={<LocationPage />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

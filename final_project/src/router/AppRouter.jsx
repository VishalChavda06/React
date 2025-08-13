import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import TopHeadline from '../Components/TopHeadline';
import ImageBanner from '../Components/ImageBanner';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AboutPage from '../Pages/AboutPage';

const AppRouter = () => {
  return (
    <Router>
      <TopHeadline />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ImageBanner />} />
        <Route path='/about' element={<AboutPage />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

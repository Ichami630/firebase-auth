import { ToastContainer } from 'react-toastify'; // (Optional) Toast messages component
import 'react-toastify/dist/ReactToastify.css'; // Styles for Toasts
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Routing setup
import { UserProvider } from './contexts/UserContext'; // Import your context provider
import Header from './components/Header'; // Your header component
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

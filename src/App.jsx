import { ToastContainer } from 'react-toastify'; // (Optional) Toast messages component
import 'react-toastify/dist/ReactToastify.css'; // Styles for Toasts
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Routing setup
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header'; // Your header component
import Login  from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Header />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;

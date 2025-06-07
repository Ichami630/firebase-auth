import { UseAuthContext } from '../contexts/AuthContext';
import UserProfile from './UserProfile';
import { UserProvider } from '../contexts/UserContext';
import { auth, signOut } from '../services/firebase';
import { toast } from 'react-toastify';

function Header() {
  const { currentUser } = UseAuthContext()
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    // Step 1: Wrap your app in the UserProvider so any nested component can access user data
    <UserProvider>
    <header>
      <h2>Welcome back {currentUser.email}</h2>
      {/* <UserProfile /> */}
      <button className='p-2 rounded-md bg-blue-400 text-white cursor-pointer' 
      onClick={handleLogOut}>logout</button>
    </header>
    </UserProvider>
  );
}

export default Header;

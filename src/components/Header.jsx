
import UserProfile from './UserProfile';
import { UserProvider } from '../contexts/UserContext';

function Header() {
  return (
    // Step 1: Wrap your app in the UserProvider so any nested component can access user data
    <UserProvider>
    <header>
      <h2>This is the header</h2>
      <UserProfile />
    </header>
    </UserProvider>
  );
}

export default Header;

import { UseUser } from "../contexts/UserContext"; // Import the custom hook to access user data

const UserProfile = () => {
  const user = UseUser(); // Pull user info from context

  return (
    <div>
      <p>Name: {user.name}</p>    {/* Display user's name */}
      <p>Email: {user.email}</p>  {/* Display user's email */}
    </div>
  );
};

export default UserProfile;

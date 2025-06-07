import { useContext, createContext } from "react";

// Step 1: Create a new context
const UserContext = createContext(); // This will hold user data and allow sharing it globally

// Step 2: Create a Provider component that wraps parts of the app that need access to the context
export const UserProvider = ({ children }) => {
  // This is the data you want to make available globally (e.g., from a login)
  const user = {
    name: "ichami",
    email: "brandonichami@gmail.com"
  };

  // Wrap children with the Provider and pass the user object as its value
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Create a custom hook to access the context easily from any component
export const UseUser = () => {
  return useContext(UserContext); // Gives you the user object
};

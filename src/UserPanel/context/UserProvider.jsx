import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    });
  
    const updateUser = (userData) => {
      setUser(userData);
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        localStorage.removeItem("user");
      }
    };
  
    return (
      <UserContext.Provider value={{ user, setUser: updateUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
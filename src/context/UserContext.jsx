import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const DEFAULT_USER = {
  name: "",
  avatar: "/avatars/avatar1.png",
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Al arrancar lee del localStorage si hay datos
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  const saveUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const resetUser = () => {
    setUser(DEFAULT_USER);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, saveUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
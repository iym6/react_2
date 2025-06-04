import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const login = () => {
    localStorage.setItem("isLogin", "true");
    setIsLogin(true);
    console.log(localStorage.getItem("isLogin"));
  };

  const logout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
    console.log(localStorage.getItem("isLogin"));
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function RequireUser({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.name.trim()) {
      navigate("/user", { state: { message: "CREATE YOUR AVATAR TO ACCESS" } });
    }
  }, []);

  if (!user.name.trim()) return null; // evita renderizar el contenido protegido

  return children;
}
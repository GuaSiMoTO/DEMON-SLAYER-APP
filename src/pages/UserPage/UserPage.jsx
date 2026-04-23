import { useState } from "react";
import { useUser } from "../../context/UserContext";
import AvatarSelector from "../../components/AvatarSelector/AvatarSelector";
import styles from "./UserPage.module.css";
// para recoger si viene del chatbot
import { useLocation } from "react-router-dom";

export default function UserPage() {
  const { user, saveUser, resetUser } = useUser();

  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);

  const location = useLocation();
  const message = location.state?.message; // 👈 recoge el mensaje si viene del chatbot

  const handleSave = () => {
    if (!name.trim()) return alert("Escribe un nombre");
    saveUser({ name, avatar });
    alert("¡Perfil guardado!");
  };

  return (
    <main className={styles.page}>

      {/* Muestra el mensaje para que crees el perfil */}
      {message && (
        <p className={styles.alert}>{message}</p>
      )}

      <h1>YOUR AVATAR</h1>

      <img src={avatar} alt="" className={styles.preview} />

      <input
        type="text"
        placeholder="YOUR NAME..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />

      <AvatarSelector selected={avatar} onSelect={setAvatar} />

      <button onClick={handleSave} className={styles.btn}>
        SAVE
      </button>
      { user.name && (
      <button onClick={resetUser} className={styles.btnreset}>
        DELETE USER
      </button>)}

    </main>
  );
}
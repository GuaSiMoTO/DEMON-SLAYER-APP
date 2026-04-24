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
  const message = location.state?.message; // recoge el mensaje si viene con mensaje para crear el avatar
  const [showMessage, setShowMessage] = useState(!!message); // true si hay mensaje

  const handleSave = () => {
    if (!name.trim()) return alert("Escribe un nombre");
    saveUser({ name, avatar });
    alert("¡Perfil guardado!");
  };

  // Si hay mensaje, mostrar solo el overlay hasta que el usuario haga click
  if (showMessage) {
    return (
      <main className={styles.overlay} onClick={() => setShowMessage(false)}>
        <p className={styles.alert}>{message}</p>
        <span className={styles.hint}>click to continue</span>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <h1>YOUR AVATAR</h1>

      <img src={avatar} alt="" className={styles.preview} />

      <input
        type="text"
        placeholder="YOUR NAME..."
        value={name}
        onChange={(e) => setName(e.target.value.toUpperCase())}
        className={styles.input}
      />

      <AvatarSelector selected={avatar} onSelect={setAvatar} />
      {!user.name && (
      <button onClick={handleSave} className={styles.btn}>
        SAVE
      </button>
    )}
      {user.name && (
        <button onClick={resetUser} className={styles.btnreset}>
          DELETE USER
        </button>
      )}
    </main>
  );
}

import { useState, useRef, useEffect, useMemo } from "react";
import askGemini from "../../hooks/useAskGemini"; // tu hook
import styles from "./ChatBotPage.module.css";
// para manejar que se haya creado el perfil
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // aquí controlamos que hayan creado usuario
  const { user } = useUser();
  const navigate = useNavigate();

  // Si no hay usuario creado, redirige a /user
  useEffect(() => {
    if (!user.name.trim()) {
      navigate("/user", { state: { message: "CREATE YOUR AVATAR TO ACCESS" } });
    }
  }, []);

  // Auto scroll al último mensaje
  useEffect(() => {
    if (messages.length === 0) return; // no scrollea si no hay mensajes
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Enviar mensaje
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await askGemini(input);

      const aiMessage = {
        role: "ai",
        text: response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error connecting to AI..." },
      ]);
    }

    setLoading(false);
  };

  // Enter para enviar
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // ── Contador de consultas con useMemo ──────────────────────────────
  const queryCount = useMemo(() => {
    return messages.filter((msg) => msg.role === "user").length;
  }, [messages]);

  // ── Mensaje de salida al abandonar la página ───────────────────────
  const [exitMessage, setExitMessage] = useState(null);

  useEffect(() => {
    return () => {
      if (queryCount > 0) {
        setExitMessage(`You made ${queryCount} queries in this session.`);
      }
    };
  }, [queryCount]);

  return (
    <main className={styles.chatPage}>
      <div className={styles.overlay} />

      <div className={styles.chatContainer}>
        {/* LOGO */}
        <img src="/demon-logo.png" alt="logo" className={styles.logo} />

        {/* CHAT */}
        <div className={styles.chatBox}>
          {messages.map((msg, i) => (
            <p
              key={i}
              className={msg.role === "user" ? styles.user : styles.ai}
            >
              {msg.role === "user" ? "> User:" : "> AI:"} {msg.text}
            </p>
          ))}

          {loading && <p className={styles.ai}>{"\u003e AI: typing..."}</p>}

          <div ref={chatEndRef} />
        </div>

        {/* INPUT */}
        <div className={styles.inputBox}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about DEMON SLAYER"
            spellCheck={false}
          />
          {/* Contador dentro del input a la derecha */}
          <span className={styles.counter}>{queryCount}</span>
          <button onClick={handleSend} disabled={loading}>
            ➤
          </button>
        </div>
      </div>
    </main>
  );
}

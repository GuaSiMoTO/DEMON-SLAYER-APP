import { useState, useRef, useEffect } from "react";
import askGemini from "../../hooks/useAskGemini"; // tu hook
import styles from "./ChatBotPage.module.css";

export default function ChatBotPage() {
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll al último mensaje
  useEffect(() => {
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

  // 🔥 Enter para enviar
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

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
              className={
                msg.role === "user" ? styles.user : styles.ai
              }
            >
              {msg.role === "user" ? "> User:" : "> AI:"} {msg.text}
            </p>
          ))}

          {loading && (
            <p className={styles.ai}>{"\u003e AI: typing..."}</p>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* INPUT */}
        <div className={styles.inputBox}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something about anime..."
          />
          <button onClick={handleSend} disabled={loading}>
            ➤
          </button>
        </div>
      </div>
    </main>
  );
};
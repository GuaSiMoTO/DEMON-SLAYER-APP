import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;
    navigate(`/characterdetail/${input.trim()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.inputBox}>
      <h3>SEARCH YOUR FAVORITE CHARACTER</h3>
      <div className={styles["search-wrapper"]}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          placeholder="write the NAME"
          spellCheck={false}
        />
        <button onClick={handleSend} disabled={!input.trim()}>
          ➤
        </button>
      </div>
    </div>
  );
}





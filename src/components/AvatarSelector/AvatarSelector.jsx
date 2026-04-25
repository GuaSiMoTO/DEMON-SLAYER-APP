import styles from "./AvatarSelector.module.css";

const AVATARS = [
  "/portrait.tanjiro.png",
  "/portrait.nezuko.png",
  "/portrait.zenitsu.jpg",
  "/portrait.inosuke.jpg"
];

export default function AvatarSelector({ selected, onSelect }) {
  return (
    <div className={styles.grid}>
      {AVATARS.map((src) => (
        <img
          key={src}
          src={src}
          alt="avatar"
          className={selected === src ? styles.selected : styles.avatar}
          onClick={() => onSelect(src)}
        />
      ))}
    </div>
  );
}


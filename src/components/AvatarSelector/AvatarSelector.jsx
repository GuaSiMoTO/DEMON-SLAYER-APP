import styles from "./AvatarSelector.module.css";

const AVATARS = [
  "/public/portrait.tanjiro.png",
  "/public/portrait.nezuko.png",
  "/public/portrait.zenitsu.jpg",
  "/public/portrait.inosuke.jpg",
  "/public/portrait.akaza.jpg"
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


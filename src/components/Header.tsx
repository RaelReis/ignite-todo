import styles from "./Header.module.css";
import logo from "../assets/img/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo do aplicativo" />
    </header>
  );
}

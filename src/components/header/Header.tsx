import styles from "../header/Header.module.css";

export function Header() {
    return (
        <header className={styles["header-wrapper"]}>
            <div className={styles.header}></div>
        </header>
    );
}

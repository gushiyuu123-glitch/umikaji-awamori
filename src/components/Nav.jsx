import styles from "./Nav.module.css";

function Navigation() {
  return (
    <header className={styles.navigation}>
      <a className={styles.brand} href="/" aria-label="UMIKAJI AWAMORI home">
        <img
          className={styles.logo}
          src="/images/logo-umikaji.png"
          alt=""
          aria-hidden="true"
        />

        <span className={styles.brandText}>
          <span className={styles.brandJa}>海風</span>
          <span className={styles.brandEn}>UMIKAJI AWAMORI</span>
        </span>
      </a>

      <nav className={styles.menu} aria-label="Primary navigation">
        <a href="#concept">Concept</a>
        <a href="#taste">Taste</a>
        <a href="#craft">Craft</a>
      </nav>

      <p className={styles.ageLabel}>20+ / DRINK RESPONSIBLY</p>
    </header>
  );
}

export default Navigation;
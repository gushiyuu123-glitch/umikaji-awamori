import { useState } from "react";
import styles from "./NavSp.module.css";

const navLinks = [
  { href: "#concept", label: "Concept", sub: "思想" },
  { href: "#taste", label: "Taste", sub: "味わい" },
  { href: "#product", label: "Product", sub: "商品" },
  { href: "#craft", label: "Craft", sub: "造り" },
  { href: "#origin", label: "Origin", sub: "沖縄" },
  { href: "#encounter", label: "Encounter", sub: "出会い" },
];

function NavSp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
          <span className={styles.brandJa}>海風 泡盛</span>
          <span className={styles.brandEn}>UMIKAJI AWAMORI</span>
        </span>
      </a>

      <button
        className={`${styles.menuButton} ${
          isOpen ? styles.menuButtonOpen : ""
        }`}
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="sp-navigation-menu"
        onClick={toggleMenu}
      >
        <span className={styles.menuBottle} aria-hidden="true" />
        <span className={styles.menuText}>{isOpen ? "Close" : "Menu"}</span>
      </button>

      <nav
        id="sp-navigation-menu"
        className={`${styles.menuPanel} ${
          isOpen ? styles.menuPanelOpen : ""
        }`}
        aria-label="Primary navigation"
      >
        <ul className={styles.menuList}>
          {navLinks.map((link) => (
            <li className={styles.menuItem} key={link.href}>
              <a className={styles.menuLink} href={link.href} onClick={closeMenu}>
                <span className={styles.menuLinkMain}>{link.label}</span>
                <span className={styles.menuLinkSub}>{link.sub}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.menuAge}>20+ / DRINK RESPONSIBLY</p>
      </nav>
    </header>
  );
}

export default NavSp;
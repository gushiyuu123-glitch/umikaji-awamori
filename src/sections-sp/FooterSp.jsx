import styles from "./FooterSp.module.css";

const footerLinks = [
  { label: "Concept", href: "#concept" },
  { label: "Taste", href: "#taste" },
  { label: "Product", href: "#product" },
  { label: "Craft", href: "#craft" },
  { label: "Origin", href: "#origin" },
  { label: "Encounter", href: "#encounter" },
];

const legalLinks = [
  {
    label: "Contact",
    href: "https://gushikendesign.com/",
    external: true,
  },
  {
    label: "Privacy Policy",
    href: "/",
    external: false,
  },
  {
    label: "Online Store",
    href: "/",
    external: false,
  },
];

function FooterSp() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="UMIKAJI AWAMORI footer">
      <div className={styles.air} aria-hidden="true" />
      <div className={styles.seaLayer} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <a
            className={styles.brand}
            href="/"
            aria-label="UMIKAJI AWAMORI home"
          >
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

          <p className={styles.statement}>
            A quiet awamori shaped by Okinawan night air,
            <br />
            black koji depth, and the memory of the sea.
          </p>
        </div>

        <div className={styles.middle}>
          <nav className={styles.nav} aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.info} aria-label="Product information">
            <dl>
              <div>
                <dt>Product</dt>
                <dd>UMIKAJI AWAMORI</dd>
              </div>

              <div>
                <dt>Produced by</dt>
                <dd>UMIKAJI Distillery</dd>
              </div>

              <div>
                <dt>Origin</dt>
                <dd>Okinawa, Japan</dd>
              </div>

              <div>
                <dt>Style</dt>
                <dd>Awamori / 720ml</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.notice}>
            お酒は20歳になってから。飲酒運転は法律で禁止されています。
            <br />
            Drink responsibly. Alcohol is for adults aged 20 and over in Japan.
          </p>

          <div className={styles.legal}>
            {legalLinks.map((item) => {
              if (item.external) {
                return (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    key={item.label}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <a
                  href={item.href}
                  onClick={(e) => e.preventDefault()}
                  key={item.label}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.creditBlock}>
          <p className={styles.copy}>
            © {currentYear} YUTO / GUSHIKEN DESIGN. All rights reserved.
          </p>

          <a
            className={styles.credit}
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Designed by GUSHIKEN DESIGN"
          >
            Designed by GUSHIKEN DESIGN
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSp;
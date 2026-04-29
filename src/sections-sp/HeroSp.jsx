import styles from "./HeroSp.module.css";

const productDetails = [
  { label: "ORIGIN", value: "OKINAWA" },
  { label: "STYLE", value: "AWAMORI" },
  { label: "VOLUME", value: "720ml" },
];

function HeroSp() {
  return (
    <section className={styles.hero} aria-label="UMIKAJI AWAMORI hero section">
      <img
        className={styles.heroImage}
        src="/images/product-umikaji2sp.png"
        alt="海風 泡盛のボトルとグラス"
        decoding="async"
        fetchPriority="high"
      />

      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.productAura} aria-hidden="true" />
      <div className={styles.mist} aria-hidden="true" />

      <div className={styles.productFx} aria-hidden="true">
        <span className={`${styles.smoke} ${styles.smoke1}`} />
        <span className={`${styles.smoke} ${styles.smoke2}`} />
        <span className={`${styles.smoke} ${styles.smoke3}`} />

        <span className={`${styles.particle} ${styles.p1}`} />
        <span className={`${styles.particle} ${styles.p2}`} />
        <span className={`${styles.particle} ${styles.p3}`} />
        <span className={`${styles.particle} ${styles.p4}`} />
        <span className={`${styles.particle} ${styles.p5}`} />
        <span className={`${styles.particle} ${styles.p6}`} />
        <span className={`${styles.particle} ${styles.p7}`} />
        <span className={`${styles.particle} ${styles.p8}`} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.kicker}>OKINAWA CRAFT SPIRIT</p>

          <h1 className={styles.title}>
            UMIKAJI
            <span>AWAMORI</span>
          </h1>

          <p className={styles.copy}>
            島の記憶を、
            <br />
            澄んだ一滴へ。
          </p>

          <div className={styles.actions}>
            <a
              className={`${styles.ctaButton} ${styles.primaryButton}`}
              href="#product"
            >
              <span className={styles.ctaText}>Pour</span>
              <span className={styles.ctaIcon} aria-hidden="true">
                <span className={styles.ice} />
                <span className={styles.ice} />
              </span>
            </a>

            <a
              className={`${styles.ctaButton} ${styles.secondaryButton}`}
              href="#taste"
            >
              <span className={styles.ctaText}>On Ice</span>
            </a>
          </div>
        </div>
      </div>

      <dl className={styles.productMeta} aria-label="Product details">
        {productDetails.map((detail) => (
          <div className={styles.detailItem} key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.scrollLine} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default HeroSp;
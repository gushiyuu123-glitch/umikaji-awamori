import styles from "./Hero.module.css";

const productDetails = [
  { label: "ORIGIN", value: "OKINAWA" },
  { label: "STYLE", value: "AWAMORI" },
  { label: "VOLUME", value: "720ml" },
];

function Hero() {
  return (
    <section className={styles.hero} aria-label="UMIKAJI AWAMORI hero section">
      <img
        className={styles.heroImage}
        src="/images/hero-umikaji.png"
        alt="海風 泡盛のボトルとグラス"
        loading="eager"
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

          <p className={styles.description}>
            黒麹の深みを残しながら、余韻はどこまでも澄んでいく。
            <br />
            沖縄の夜と海風を、静かに閉じ込めた現代の泡盛。
          </p>

          <div className={styles.actions} aria-label="UMIKAJI AWAMORI navigation">
            <button
              className={`${styles.ctaButton} ${styles.primaryButton}`}
              type="button"
            >
              <span className={styles.ctaText}>Taste Note</span>
              <span className={styles.ctaIcon} aria-hidden="true">
                <span className={styles.ice} />
              </span>
            </button>

            <button
              className={`${styles.ctaButton} ${styles.secondaryButton}`}
              type="button"
            >
              <span className={styles.ctaText}>Craft Story</span>
              <span className={styles.ctaIcon} aria-hidden="true">
                <span className={styles.ice} />
                <span className={styles.ice} />
              </span>
            </button>
          </div>
        </div>

        <div className={styles.footer}>
          <dl className={styles.detailList} aria-label="Product details">
            {productDetails.map((item) => (
              <div className={styles.detailItem} key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.scrollLine} aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
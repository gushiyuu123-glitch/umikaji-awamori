import Reveal from "../components/motion/Reveal";
import styles from "./ProductSp.module.css";

const productSpecs = [
  { label: "TYPE", value: "AWAMORI" },
  { label: "ORIGIN", value: "OKINAWA" },
  { label: "VOLUME", value: "720ml" },
  { label: "ALCOHOL", value: "30%" },
  { label: "SERVE", value: "ON ICE / WITH WATER" },
];

function ProductSp() {
  return (
    <section
      id="product"
      className={styles.product}
      aria-label="UMIKAJI AWAMORI product"
    >
      <div className={styles.air} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.wave} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.kicker}>PRODUCT</p>

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className={styles.release}>OKINAWA CRAFT SPIRIT</p>

              <h2 className={styles.title}>
                UMIKAJI
                <span>AWAMORI</span>
              </h2>

              <p className={styles.lead}>
                島で受け継がれてきた泡盛を、
                <br />
                今の食卓に似合う一本へ。
                <br />
                強さよりも輪郭を。
                <br />
                重さよりも、抜けのよさを。
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className={styles.specBlock}>
                <dl className={styles.specList}>
                  {productSpecs.map((spec) => (
                    <div className={styles.specItem} key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className={styles.actionArea}>
                <a className={styles.productButton} href="#invitation">
                  <span>Serving Scene</span>
                  <span className={styles.buttonLine} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className={styles.visualArea}>
              <div className={styles.visualFrame}>
                <div className={styles.imageMist} aria-hidden="true" />
                <div className={styles.imageLight} aria-hidden="true" />

                <img
                  className={styles.productImage}
                  src="/images/product-umikaji2sp.png"
                  alt="UMIKAJI AWAMORIのボトル"
                  loading="lazy"
                  decoding="async"
                />

                <p className={styles.caption}>
                  DISTILLED IN OKINAWA
                  <br />
                  720ml / 30%
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ProductSp;
import Reveal from "../components/motion/Reveal";
import styles from "./Product.module.css";

const productSpecs = [
  { label: "TYPE", value: "AWAMORI" },
  { label: "ORIGIN", value: "OKINAWA" },
  { label: "VOLUME", value: "720ml" },
  { label: "ALCOHOL", value: "30%" },
  { label: "SERVE", value: "ON ICE / WITH WATER" },
];

function Product() {
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
        <Reveal as="p" className={styles.kicker} direction="soft">
          PRODUCT
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal as="p" className={styles.release} delay={100}>
              THE FIRST RELEASE
            </Reveal>

            <Reveal as="h2" className={styles.title} delay={180}>
              <span>澄んだ余韻を、</span>
              <span>一本の輪郭へ。</span>
            </Reveal>

            <Reveal as="p" className={styles.lead} delay={280}>
              黒麹の奥行きを残しながら、冷えたグラスの中で静かにほどける。
              UMIKAJI AWAMORIは、沖縄の夜気と海風をまとった現代の泡盛です。
            </Reveal>

            <Reveal as="div" className={styles.specBlock} delay={380}>
              <dl className={styles.specList}>
                {productSpecs.map((item) => (
                  <div className={styles.specItem} key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal as="div" className={styles.actionArea} delay={500}>
              <button className={styles.productButton} type="button">
                <span>The First Bottle</span>
                <span className={styles.buttonLine} aria-hidden="true" />
              </button>
            </Reveal>
          </div>

          <Reveal as="div" className={styles.visualArea} delay={260}>
            <div className={styles.visualFrame}>
              <img
                className={styles.productImage}
                src="/images/product-umikaji2.png"
                alt="UMIKAJI AWAMORIのボトル"
              />

              <div className={styles.imageMist} aria-hidden="true" />
              <div className={styles.imageLight} aria-hidden="true" />
            </div>

            <p className={styles.caption}>
              A clear modern awamori shaped by island air.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Product;
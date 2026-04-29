import Reveal from "../components/motion/Reveal";
import styles from "./OriginSp.module.css";

const originDetails = [
  {
    label: "PLACE",
    value: "ISLAND SHORE",
  },
  {
    label: "AIR",
    value: "SALT WIND",
  },
  {
    label: "MOOD",
    value: "NIGHT AIR",
  },
];

function OriginSp() {
  return (
    <section
      id="origin"
      className={styles.origin}
      aria-label="UMIKAJI AWAMORI origin"
    >
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="p" className={styles.kicker} direction="soft">
          ORIGIN
        </Reveal>

        <div className={styles.grid}>
          <Reveal as="div" className={styles.visualBlock} delay={120}>
            <div className={styles.imageFrame}>
              <img
                src="/images/origin-main.png"
                alt="夜の沖縄の海辺を思わせる風景"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <div className={styles.content}>
            <Reveal as="p" className={styles.jaLabel} delay={120} direction="soft">
              沖縄という気配
            </Reveal>

            <Reveal as="h2" className={styles.title} delay={180} direction="deep">
              <span>島の夜気を、</span>
              <span>一滴の輪郭へ。</span>
            </Reveal>

            <Reveal as="p" className={styles.lead} delay={300} direction="still">
              強い陽射しのあとに訪れる、湿った空気。
              <br />
              岸辺を渡る風と、夜へ沈む島の影。
            </Reveal>

            <Reveal as="p" className={styles.text} delay={420} direction="still">
              UMIKAJIは、土地を説明するための泡盛ではない。
              沖縄に流れる時間や、潮を含んだ空気の手触りを、
              グラスの中にそっと残すための一本です。
            </Reveal>

            <Reveal as="dl" className={styles.details} delay={540} direction="soft">
              {originDetails.map((item) => (
                <div className={styles.detailItem} key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OriginSp;
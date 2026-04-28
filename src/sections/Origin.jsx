import Reveal from "../components/motion/Reveal";
import styles from "./Origin.module.css";

const originDetails = [
  {
    label: "PLACE",
    value: "ISLAND SHORE",
  },
  {
    label: "AIR",
    value: "SEA BREEZE",
  },
  {
    label: "MOOD",
    value: "NIGHT HUMIDITY",
  },
];

function Origin() {
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
                alt="夜の沖縄の海辺と静かな空気"
              />
            </div>
          </Reveal>

          <div className={styles.content}>
            <Reveal as="p" className={styles.jaLabel} delay={180}>
              沖縄の夜気
            </Reveal>

            <Reveal as="h2" className={styles.title} delay={260}>
              <span>海風を含み、</span>
              <span>夜に澄む。</span>
            </Reveal>

            <Reveal as="p" className={styles.lead} delay={360}>
              UMIKAJIは、沖縄という土地の明るさだけではなく、
              日が沈んだあとに残る湿度、海から届く風、
              そして島に流れる静かな時間から生まれた泡盛です。
            </Reveal>

            <Reveal as="p" className={styles.text} delay={460}>
              強い南国感ではなく、深い夜の青さへ。
              伝統の輪郭を残しながら、現代の暮らしに自然に溶け込むように、
              島の気配を透明な余韻として整えています。
            </Reveal>

            <Reveal as="dl" className={styles.details} delay={560}>
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

export default Origin;
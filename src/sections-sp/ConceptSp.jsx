import Reveal from "../components/motion/Reveal";
import styles from "./ConceptSp.module.css";

function ConceptSp() {
  return (
    <section
      id="concept"
      className={styles.concept}
      aria-label="UMIKAJI AWAMORI concept"
    >
      <div className={styles.air} aria-hidden="true" />
      <div className={styles.depth} aria-hidden="true" />

      <svg
        className={styles.waveBg}
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="conceptWaveSp" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(127,160,181,0)" />
            <stop offset="42%" stopColor="rgba(127,160,181,0.18)" />
            <stop offset="100%" stopColor="rgba(127,160,181,0)" />
          </linearGradient>
        </defs>

        <path
          d="M-80 430 C 220 310, 420 560, 720 420 S 1180 260, 1520 390"
          fill="none"
          stroke="url(#conceptWaveSp)"
          strokeWidth="1.2"
        />
        <path
          d="M-120 500 C 190 390, 440 610, 760 470 S 1190 350, 1540 470"
          fill="none"
          stroke="rgba(230,238,242,0.055)"
          strokeWidth="1"
        />
      </svg>

      <div className={styles.inner}>
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.headingBlock}>
              <p className={styles.kicker}>CONCEPT</p>

              <h2 className={styles.title}>
                A spirit shaped
                <br />
                by island air.
              </h2>

              <p className={styles.jaLabel}>
                島の気配を、
                <br />
                今の一杯へ。
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className={styles.textBlock}>
              <div className={styles.statement}>
                <p className={styles.lead}>
                  伝統を重く飾るのではなく、
                  <br />
                  日々の時間に自然に馴染む酒へ。
                </p>

                <p className={styles.text}>
                  米の甘み、黒麹の陰影、立ちのぼる香ばしさ。
                  沖縄で受け継がれてきた泡盛の芯を、
                  軽やかな輪郭に整えました。
                </p>

                <p className={styles.text}>
                  一人の夜にも、誰かと囲む食卓にも。
                  UMIKAJIは、島の記憶をそのまま置くのではなく、
                  今日の時間へそっと渡すための泡盛です。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ConceptSp;
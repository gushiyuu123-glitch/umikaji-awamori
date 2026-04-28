import Reveal from "../components/motion/Reveal";
import styles from "./Concept.module.css";

function Concept() {
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
    <linearGradient id="conceptWave" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="rgba(127,160,181,0)" />
      <stop offset="34%" stopColor="rgba(127,160,181,0.24)" />
      <stop offset="58%" stopColor="rgba(216,230,238,0.18)" />
      <stop offset="100%" stopColor="rgba(127,160,181,0)" />
    </linearGradient>
  </defs>

  <path
    d="M-120 420 C 120 280 310 560 540 420 C 760 288 900 540 1120 400 C 1280 300 1400 340 1560 250"
  />
  <path
    d="M-120 500 C 160 360 340 620 610 470 C 820 352 960 590 1190 450 C 1340 360 1450 390 1560 330"
  />
  <path
    d="M-120 345 C 120 230 320 470 560 350 C 790 238 920 440 1160 330 C 1320 258 1440 275 1560 210"
  />
</svg>
      <div className={styles.inner}>
        <Reveal as="p" className={styles.kicker} direction="soft">
          CONCEPT
        </Reveal>

        <div className={styles.grid}>
          <Reveal as="div" className={styles.headingBlock} delay={120}>
            <p className={styles.jaLabel}>海風 泡盛</p>

    <h2 className={styles.title}>
  <span>黒麹の奥に、</span>
  <span>海風の記憶を</span>
  <span>澄ます。</span>
</h2>
          </Reveal>

          <div className={styles.textBlock}>
            <Reveal as="p" className={styles.lead} delay={220}>
              UMIKAJI AWAMORIは、沖縄の夜に漂う湿度、海から届く微かな風、
              そして島に残る記憶を、澄んだ一滴へと磨き上げた現代の泡盛です。
            </Reveal>

            <Reveal as="p" className={styles.text} delay={340}>
              強く語りすぎないこと。飾りすぎないこと。
              黒麹の深みを残しながらも、口当たりは静かに澄み、
              余韻だけがゆっくりと残っていく。
            </Reveal>

            <Reveal as="p" className={styles.text} delay={460}>
              伝統を重く見せるのではなく、今の暮らしに自然に溶け込む酒へ。
             島の気配を、澄んだ余韻として今の暮らしへ整える泡盛です。
            </Reveal>
          </div>
        </div>

        <Reveal
          as="div"
          className={styles.statement}
          delay={560}
          direction="fade"
        >
<span>ISLAND</span>
<span>MEMORY</span>
<span>IN A DROP</span>
        </Reveal>
      </div>
    </section>
  );
}

export default Concept;
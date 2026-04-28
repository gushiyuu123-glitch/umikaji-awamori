import Reveal from "../components/motion/Reveal";
import styles from "./Craft.module.css";

function Craft() {
  return (
    <section
      id="craft"
      className={styles.craft}
      aria-label="UMIKAJI AWAMORI craft"
    >
      <div className={styles.bg} aria-hidden="true">
        <img
          src="/images/craft-main1.png"
          alt=""
          className={styles.bgImage}
        />
      </div>

      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.air} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="p" className={styles.kicker} direction="soft">
          CRAFT
        </Reveal>

        <Reveal as="h2" className={styles.title} delay={120} direction="deep">
          <span>黒麹の深みを、</span>
          <span>海風の透明感へ。</span>
        </Reveal>

        <Reveal as="p" className={styles.lead} delay={280} direction="still">
          伝統的な泡盛の骨格を残しながら、重さではなく、澄んだ余韻へ。
          UMIKAJI AWAMORIは、島の湿度と夜の静けさの中で、
          <br />
          ゆっくりと磨かれていく。
        </Reveal>
      </div>

      <div className={styles.bottomText}>
        <Reveal as="p" className={styles.note} delay={420} direction="fade">
          BLACK KOJI / SLOW DISTILLATION / CLEAR FINISH
        </Reveal>
      </div>
    </section>
  );
}

export default Craft;
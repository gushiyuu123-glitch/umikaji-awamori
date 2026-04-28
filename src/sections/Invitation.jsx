import Reveal from "../components/motion/Reveal";
import styles from "./Invitation.module.css";

function Invitation() {
  return (
    <section
      id="invitation"
      className={styles.invitation}
      aria-label="UMIKAJI AWAMORI invitation"
    >
      <div className={styles.air} aria-hidden="true" />
      <div className={styles.wave} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="p" className={styles.kicker} direction="soft">
          INVITATION
        </Reveal>

        <Reveal as="p" className={styles.jaLabel} delay={100}>
          最後の一滴へ
        </Reveal>

        <Reveal as="h2" className={styles.title} delay={180} direction="still">
          <span>夜に、海風を注ぐ。</span>
         
        </Reveal>

        <Reveal as="p" className={styles.lead} delay={300} direction="fade">
          UMIKAJI AWAMORIは、強く語るための酒ではありません。<br></br>
          グラスの中に残る冷たさ、ほどけていく香り、<br></br>
          そして静かに消えていく余韻を、ゆっくり味わうための一本です。
        </Reveal>

        <Reveal as="p" className={styles.note} delay={420} direction="fade">
          Pour slowly. Let the sea breeze remain.
        </Reveal>
      </div>
    </section>
  );
}

export default Invitation;
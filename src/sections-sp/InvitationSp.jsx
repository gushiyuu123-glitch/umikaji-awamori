import Reveal from "../components/motion/Reveal";
import styles from "./InvitationSp.module.css";

function InvitationSp() {
  return (
    <section
      id="invitation"
      className={styles.invitation}
      aria-label="UMIKAJI AWAMORI invitation"
    >
      <div className={styles.air} aria-hidden="true" />
      <div className={styles.wave} aria-hidden="true" />
      <div className={styles.deepLine} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="p" className={styles.kicker} direction="soft">
          INVITATION
        </Reveal>

        <Reveal as="p" className={styles.jaLabel} delay={100} direction="soft">
          最後の一滴へ
        </Reveal>

        <Reveal as="h2" className={styles.title} delay={180} direction="still">
          <span>夜に、</span>
          <span>海風を注ぐ。</span>
        </Reveal>

        <Reveal as="p" className={styles.lead} delay={300} direction="fade">
          <span>UMIKAJI AWAMORIは、</span>
          <span>強く語るための酒ではありません。</span>
          <span>グラスの中に残る冷たさ、</span>
          <span>ほどけていく香り、</span>
          <span>そして静かに消えていく余韻を、</span>
          <span>ゆっくり味わうための一本です。</span>
        </Reveal>

        <Reveal as="p" className={styles.note} delay={430} direction="fade">
          Pour slowly.
          <br />
          Let the sea breeze remain.
        </Reveal>
      </div>
    </section>
  );
}

export default InvitationSp;
import styles from "./Ritual.module.css";

function Ritual() {
  return (
    <section className={styles.ritual} id="ritual">
      <div className={styles.mist} />
      <div className={styles.grain} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>RITUAL</p>

          <h2 className={styles.title}>
            <span>POUR</span>
            <span>INTO</span>
            <span>NIGHT AIR</span>
          </h2>

          <p className={styles.lead}>
            氷に触れた瞬間、海風のようにほどけていく。
            <br />
            飲む前の数秒に、島の夜が立ち上がる。
          </p>
        </div>

        <div className={styles.scene} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.glass}>
            <span className={styles.iceOne} />
            <span className={styles.iceTwo} />
            <span className={styles.liquid} />
          </div>
          <span className={styles.drop} />
          <span className={styles.line} />
        </div>

        <div className={styles.notes}>
          <p className={styles.notePrimary}>
            冷やして、注ぐ。
            <br />
            すぐに飲まない。
          </p>

          <p className={styles.noteSecondary}>
            黒麹の深みが、透明な余韻に変わるまで。
          </p>

          <a className={styles.cta} href="#product">
            Begin the pour
          </a>
        </div>
      </div>
    </section>
  );
}

export default Ritual;
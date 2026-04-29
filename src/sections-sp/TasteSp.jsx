import Reveal from "../components/motion/Reveal";
import styles from "./TasteSp.module.css";
const tasteNotes = [
  {
    number: "01",
    title: "CLEAR",
    ja: "透き通る入口",
    text: "冷えたグラスに唇を寄せると、輪郭だけがすっと立つ。重さは残さず、米のほのかな甘みが淡くほどける。",
    image: "/images/taste-clear1.png",
    alt: "冷えたグラスに注がれた透明感のある泡盛",
  },
  {
    number: "02",
    title: "DEEP",
    ja: "麹がつくる陰影",
    text: "黒麹由来の厚みを、前に出しすぎない。奥にある香ばしさと丸みが、味わいに深い影を落とす。",
    image: "/images/taste-deep.png",
    alt: "黒麹の奥行きを感じさせる泡盛のグラス",
  },
  {
    number: "03",
    title: "FINISH",
    ja: "すっと消える後口",
    text: "飲み終えたあと、舌に残るのは強さではなく、涼しい抜け感。料理のあと味を曇らせず、次の一杯へ自然につなぐ。",
    image: "/images/taste-after.png",
    alt: "余韻がすっと消えていく泡盛のグラス",
  },
];

function TasteSp() {
  return (
    <section
      id="taste"
      className={styles.taste}
      aria-label="UMIKAJI AWAMORI taste"
    >
      <div className={styles.air} aria-hidden="true" />
      <div className={styles.depth} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="p" className={styles.kicker} direction="soft">
          TASTE
        </Reveal>

        <div className={styles.head}>
          <Reveal as="div" className={styles.headingBlock} delay={100}>
            <p className={styles.jaLabel}>味わい</p>

            <h2 className={styles.title}>
              <span>澄み、深み、</span>
              <span>そして余韻。</span>
            </h2>
          </Reveal>

          <Reveal as="p" className={styles.intro} delay={220}>
            UMIKAJI AWAMORIの魅力は、強く押し出す個性ではなく、
            静かに立ち上がる気配にある。
            一口目の透明感、奥に沈む黒麹の深み、
            そして海風のように残る余韻までを、丁寧に味わうための泡盛です。
          </Reveal>
        </div>

        <div className={styles.notes}>
          {tasteNotes.map((item, index) => (
            <Reveal
              as="article"
              className={`${styles.note} ${styles[`note${index + 1}`]}`}
              delay={180 + index * 140}
              key={item.number}
            >
              <div className={styles.noteMeta}>
                <span className={styles.noteNumber}>{item.number}</span>
                <div className={styles.noteHeading}>
                  <p className={styles.noteTitle}>{item.title}</p>
                  <h3 className={styles.noteJa}>{item.ja}</h3>
                </div>
              </div>

              <div className={styles.noteBody}>
                <div className={styles.noteVisual}>
                  <img src={item.image} alt={item.alt} />
                </div>

                <p className={styles.noteText}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TasteSp;
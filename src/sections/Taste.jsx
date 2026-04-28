import Reveal from "../components/motion/Reveal";
import styles from "./Taste.module.css";

const tasteNotes = [
  {
    number: "01",
    title: "CLEAR",
    ja: "澄んだ口当たり",
    text: "冷えたグラスに触れた瞬間、輪郭は静かに立ち上がる。余計な重さを残さず、透明な抜け感だけが舌の上に広がる。",
    image: "/images/taste-clear1.png",
    alt: "冷えたグラスに注がれた透明感のある泡盛",
  },
  {
    number: "02",
    title: "DEEP",
    ja: "黒麹の奥行き",
    text: "泡盛らしい黒麹の深みは、強く押し出すのではなく、夜の底に沈むようにゆっくりと現れる。",
    image: "/images/taste-deep.png",
    alt: "静かな光の中で深みを感じさせる泡盛のグラス",
  },
  {
    number: "03",
    title: "AFTER",
    ja: "海風の余韻",
    text: "飲み終えたあとに残るのは、甘さでも重さでもなく、島の湿度と海風がほどけていくような静かな余韻。",
    image: "/images/taste-after.png",
    alt: "余韻を感じさせる泡盛と静かな空気感の演出",
  },
];

function Taste() {
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

export default Taste;
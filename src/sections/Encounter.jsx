import Reveal from "../components/motion/Reveal";
import styles from "./Encounter.module.css";

const encounterItems = [
  {
    label: "ONLINE STORE",
    title: "静かに、一本を迎える。",
    text: [
      "数量を限ってご案内するオンラインストア。",
      "冷えた夜に、最初の一杯を迎えるための入口です。",
    ],
    linkText: "View Store",
    href: "/",
  },
  {
    label: "RESTAURANT / BAR",
    title: "味わいを知る場所へ。",
    text: [
      "沖縄料理店や静かなバーなど、",
      "UMIKAJIの余韻が自然に馴染む場所で、",
      "少しずつ出会いを広げています。",
    ],
    linkText: "Find Places",
    href: "/",
  },
  {
    label: "FOR PARTNERS",
    title: "取扱いのご相談について。",
    text: [
      "飲食店様、ギフト、イベントでのお取り扱いについては、",
      "ブランドの空気を大切にしながらご案内いたします。",
    ],
    linkText: "Contact",
    href: "https://gushikendesign.com/",
    external: true,
  },
];

const atmosphereWords = ["SEA BREEZE", "NIGHT AIR", "CLEAR FINISH"];

function Encounter() {
  return (
    <section
      id="encounter"
      className={styles.encounter}
      aria-label="UMIKAJI AWAMORI encounter"
    >
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.typeMist} aria-hidden="true">
        {atmosphereWords.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.heading}>
          <Reveal as="p" className={styles.kicker} direction="soft">
            ENCOUNTER
          </Reveal>

          <Reveal as="p" className={styles.jaLabel} delay={80}>
            出会いについて
          </Reveal>

          <Reveal as="h2" className={styles.title} delay={140}>
            <span>海風と、</span>
            <span>出会う場所。</span>
          </Reveal>

          <Reveal as="div" className={styles.lead} delay={220}>
            <p>
              UMIKAJI AWAMORIは、<br></br>ただ棚に並ぶための酒ではありません。
            </p>
            <p>
              一杯の温度、置かれる空間、<br></br>そしてグラスに触れる時間までを含めて、<br></br>
              静かに出会ってほしい泡盛です。
            </p>
          </Reveal>
        </div>

        <Reveal as="div" className={styles.items} delay={280}>
          {encounterItems.map((item) => (
            <article className={styles.item} key={item.label}>
              <p className={styles.itemLabel}>{item.label}</p>

              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{item.title}</h3>

                <div className={styles.itemText}>
                  {item.text.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <a
                  className={styles.itemLink}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <span>{item.linkText}</span>
                  <span className={styles.linkLine} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Encounter;
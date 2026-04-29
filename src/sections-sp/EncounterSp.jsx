import Reveal from "../components/motion/Reveal";
import styles from "./EncounterSp.module.css";

const encounterLead = [
  "UMIKAJI AWAMORIは、ただ並ぶための酒ではありません。",
  "一杯の温度、置かれる空間、そしてグラスに触れる時間までを含めて、",
  "静かに出会ってほしい泡盛です。",
];

const encounterItems = [
  {
    label: "ONLINE STORE",
    title: "静かに、一本を迎える。",
    text: [
      "数量を限ってご案内するオンラインストア。",
      "冷えた夜に、最初の一杯を迎えるための入口です。",
    ],
    linkText: "View Store",
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
  },
  {
    label: "FOR PARTNERS",
    title: "取扱いのご相談について。",
    text: [
      "飲食店様、ギフト、イベントでのお取り扱いについては、",
      "こちらから静かにご相談いただけます。",
    ],
    linkText: "Contact",
  },
];

function EncounterSp() {
  return (
    <section
      id="encounter"
      className={styles.encounter}
      aria-label="UMIKAJI AWAMORI encounter"
    >
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgMist} aria-hidden="true" />
      <div className={styles.bgLine} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="div" className={styles.waveBg} direction="soft">
          <div className={styles.waveObject} aria-hidden="true">
            <svg
              className={styles.waveSvg}
              viewBox="0 0 420 760"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${styles.waveLine} ${styles.wave1}`}
                d="M148 42C104 122 103 185 151 264C196 338 196 410 151 488C103 571 104 650 151 724"
              />
              <path
                className={`${styles.waveLine} ${styles.wave2}`}
                d="M210 24C158 112 160 189 213 278C263 362 262 432 212 516C160 604 159 674 212 744"
              />
              <path
                className={`${styles.waveLine} ${styles.wave3}`}
                d="M270 58C230 132 231 204 272 278C314 354 314 432 272 506C231 580 230 657 271 716"
              />
              <path
                className={`${styles.waveLine} ${styles.wave4}`}
                d="M92 116C66 184 70 238 96 300C126 371 125 432 95 500C66 566 67 626 94 682"
              />
              <path
                className={`${styles.waveLine} ${styles.wave5}`}
                d="M330 106C360 174 358 236 328 306C296 382 298 448 329 520C359 590 358 648 329 704"
              />
            </svg>

            <div className={styles.waveMist} />
          </div>
        </Reveal>

        <div className={styles.content}>
          <Reveal as="p" className={styles.kicker} direction="soft">
            ENCOUNTER
          </Reveal>

          <Reveal as="p" className={styles.jaLabel} delay={100} direction="soft">
            出会える場所
          </Reveal>

          <Reveal as="h2" className={styles.title} delay={160} direction="deep">
            <span>海風は、</span>
            <span>静かな場所へ届いていく。</span>
          </Reveal>

          <Reveal as="p" className={styles.lead} delay={240} direction="still">
            {encounterLead.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Reveal>

          <div className={styles.items}>
            {encounterItems.map((item, index) => (
              <Reveal
                as="article"
                className={styles.item}
                delay={340 + index * 140}
                direction="still"
                key={item.label}
              >
                <p className={styles.itemLabel}>{item.label}</p>

                <div className={styles.itemBody}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>

                  <p className={styles.itemText}>
                    {item.text.map((line) => (
                      <span key={`${item.label}-${line}`}>{line}</span>
                    ))}
                  </p>

                  <a
                    href="/"
                    onClick={(e) => e.preventDefault()}
                    className={styles.itemLink}
                    aria-label={`${item.title} ${item.linkText}`}
                  >
                    <span>{item.linkText}</span>
                    <span className={styles.linkLine} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EncounterSp;
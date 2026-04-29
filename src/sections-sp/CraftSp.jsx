import Reveal from "../components/motion/Reveal";
import styles from "./CraftSp.module.css";

const craftItems = [
  {
    label: "KOJI",
    title: "黒麹がつくる、深い骨格。",
    text: "泡盛らしい厚みを支えながら、重さだけを残さない。香りの奥に、ほのかな陰影を忍ばせます。",
  },
  {
    label: "DISTILL",
    title: "一滴の輪郭を、丁寧に整える。",
    text: "立ち上がりはすっきりと。後口はゆるやかに。飲み進めるほど、味わいの線が見えてきます。",
  },
  {
    label: "FINISH",
    title: "現代の食卓に馴染む余白。",
    text: "ロックでも、水割りでも。料理や時間の流れを邪魔せず、静かに寄り添う泡盛です。",
  },
];

function CraftSp() {
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
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.air} aria-hidden="true" />

      <div className={styles.inner}>
        <Reveal as="p" className={styles.kicker} direction="soft">
          CRAFT
        </Reveal>

        <Reveal as="h2" className={styles.title} direction="up">
          つくりの奥に、
          <br />
          軽やかさを宿す。
        </Reveal>

        <Reveal as="p" className={styles.lead} direction="up" delay={0.08}>
          伝統の輪郭を残しながら、
          <br />
          今の時間に合う飲み心地へ。
        </Reveal>

        <div className={styles.list}>
          {craftItems.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              className={styles.item}
              direction="up"
              delay={0.08 + index * 0.06}
            >
              <span className={styles.itemLabel}>{item.label}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CraftSp;
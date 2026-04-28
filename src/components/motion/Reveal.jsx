import useInView from "../../hooks/useInView";
import styles from "./Reveal.module.css";

function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  duration = 1200,
  direction = "up",
  once = true,
  threshold = 0.18,
  rootMargin = "0px 0px -8% 0px",
  style,
}) {
  const { ref, isInView } = useInView({
    threshold,
    rootMargin,
    once,
  });

  const Tag = as;
  const directionClass = styles[direction] || styles.up;

  return (
    <Tag
      ref={ref}
      className={[
        styles.reveal,
        directionClass,
        isInView ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
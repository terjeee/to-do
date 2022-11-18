import styles from "./Slider.module.scss";

interface Props {
  onChange?: () => void;
}

function Slider(props: Props) {
  return (
    <label className={styles.switch} onChange={props.onChange}>
      <input type="checkbox" />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
}

export default Slider;

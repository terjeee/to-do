import styles from "./Slider.module.scss";

interface Props {
  checked?: boolean;
  onChange: () => void;
}

function Slider(props: Props) {
  return (
    <label className={styles.switch} onChange={props.onChange}>
      <input type="checkbox" checked={props.checked} />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
}

export default Slider;

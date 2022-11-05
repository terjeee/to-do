import IconPlus from "../../assets/IconPlus";
import styles from "./ToDoHeader.module.scss";

export default function ToDoHeader() {
  return (
    <div className={styles.title}>
      <h2 className={styles.title__text}>DATE</h2>
      <button className={styles.title__btn}>
        <IconPlus />
      </button>
    </div>
  );
}

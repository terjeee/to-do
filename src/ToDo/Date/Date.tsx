import styles from "./Date.module.scss";

function Date() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();

  return (
    <h2 className={styles.date}>
      {day}. {month}
    </h2>
  );
}

export default Date;

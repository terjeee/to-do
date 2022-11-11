import styles from "./CurrentDate.module.scss";

function CurrentDate() {
  const date = new Date().toLocaleString("nb-NO", { day: "numeric", month: "long" });

  return <h2 className={styles.date}>{date}</h2>;
}

export default CurrentDate;

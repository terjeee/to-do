import styles from "./CurrentDate.module.scss";

const monthPairing = ["Januar", "Februar", "Mars", "April", "Mai", 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember']; /* prettier-ignore */

function CurrentDate() {
  const today = new Date();
  const date = today.getDate();
  const month = monthPairing[today.getMonth()];

  const displayDate = `${date}. ${month}`;

  return <h2 className={styles.time}>{displayDate}</h2>;
}

export default CurrentDate;

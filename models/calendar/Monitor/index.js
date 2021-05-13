import styles from "./monitor.module.scss"

export default function Monitor() {
  return (
    <div className={styles.monitor}>
      <div className={styles.monitor__item}>Mon</div>
      <div className={styles.monitor__item}>Tue</div>
      <div className={styles.monitor__item}>Wed</div>
      <div className={styles.monitor__item}>Thu</div>
      <div className={styles.monitor__item}>Fri</div>
      <div className={styles.monitor__item}>Sat</div>
      <div className={styles.monitor__item}>Sun</div>
    </div>
  )
}
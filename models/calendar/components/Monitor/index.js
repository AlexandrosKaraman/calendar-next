import styles from "./monitor.module.scss"

export default function Monitor({ today }) {
  return (
    <div className={styles.monitor}>
      <div className={styles.monitor__title}>
        <div>
          <span className={styles.monitor__main}>{today.format('MMMM')}</span>
          <span className={styles.monitor__main}>{today.format('YYYY')}</span>
        </div>
        <div className={styles.monitor__btns}>
          <button className={styles.monitor__btn}> &lt; </button>
          <button className={styles.monitor__btn}>Today</button>
          <button className={styles.monitor__btn}> &gt; </button>
        </div>
      </div>
      <div className={styles.monitor__items}>
        <div className={styles.monitor__item}>Mon</div>
        <div className={styles.monitor__item}>Tue</div>
        <div className={styles.monitor__item}>Wed</div>
        <div className={styles.monitor__item}>Thu</div>
        <div className={styles.monitor__item}>Fri</div>
        <div className={styles.monitor__item}>Sat</div>
        <div className={styles.monitor__item}>Sun</div>
      </div>
    </div>
  )
}
import styles from './Calendar.module.scss'
import classnames from "classnames"

export default function CalendarGrid({ startDay }) {

  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

  return (
    <div className={styles.Calendar}>
      {
        daysArray.map((dayItem) => (
          <div
            key={dayItem.format('DDMMYYYY')}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}

            className={styles.Calendar__wrapper}>
            <div className={styles.Calendar__rowInCell}>
              <div className={styles.Calendar__dayWrapper}>
                {dayItem.format('D')}
              </div>
            </div>
          </div>
        )
        )
      }
    </div>
  )
}
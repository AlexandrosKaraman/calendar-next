import moment from "moment"

import styles from './calendarFree.module.scss'

import CalendarGrid from "./CalendarGrid";
import Header from "./Header";
import Monitor from "./Monitor";


export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } })
  const startDay = moment().startOf('month').startOf('week')

  return (
    <div className={styles.calendarFree}>
      <Header />
      <Monitor />
      <CalendarGrid startDay={startDay} />
    </div>
  )
}
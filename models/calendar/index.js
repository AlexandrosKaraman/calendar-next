import moment from "moment"

import styles from './calendarFree.module.scss'

import CalendarGrid from "./components/CalendarGrid";
import Header from "./components/Header";
import Monitor from "./components/Monitor";


export default function Calendar() {
  moment.updateLocale('en', { week: { dow: 1 } });
  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');

  // window.moment = moment;

  return (
    <div className={styles.calendarFree}>
      <Header />
      <Monitor today={today} />
      <CalendarGrid startDay={startDay} />
    </div>
  )
}
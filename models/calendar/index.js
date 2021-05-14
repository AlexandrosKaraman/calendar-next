import moment from "moment"
import { useState } from "react";

import styles from './calendarFree.module.scss'

import CalendarGrid from "./components/CalendarGrid";
import Header from "./components/Header";
import Monitor from "./components/Monitor";


export default function Calendar() {

  moment.updateLocale('en', { week: { dow: 1 } });

  const [today, setToday] = useState(moment())
  const startDay = today.clone().startOf('month').startOf('week');



  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'))


  return (
    <div className={styles.calendarFree}>
      <Header />
      <Monitor
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid startDay={startDay} />
    </div>
  )
}
import moment from "moment"
import { useState } from "react";
import { Provider } from "react-redux"

import styles from './calendarFree.module.scss'

import CalendarGrid from "./components/CalendarGrid";
import Header from "./components/Header";
import Monitor from "./components/Monitor";
import Modal from "./components/Modal";



const totalDays = 42;

export default function Calendar() {

  moment.updateLocale('en', { week: { dow: 1 } });

  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  const [events, setEvents] = useState([]);
  const startDayQuery = startDay.clone().format('X');
  const endDayQuery = startDay.clone().add(totalDays, 'days').format('X');

  const [modalActive, setModalActive] = useState(false)

  return (
    <Provider store={store}>
      <div className={styles.calendarFree}>
        <Header />
        <Monitor
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
        />
        <CalendarGrid startDay={startDay} today={today} totalDays={totalDays} />


        <Modal active={modalActive} setActive={setModalActive} />


        <button onClick={() => setModalActive(true)}>open</button>
      </div>
    </Provider>
  )
}
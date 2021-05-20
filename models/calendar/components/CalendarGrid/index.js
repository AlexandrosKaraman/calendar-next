import styles from './Calendar.module.scss';
import styled from 'styled-components';
import moment from 'moment';
import Modal from '../Modal';

import { useState } from "react";


const CurrentDay = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    color: white;
    background: #f00;
    border-radius: 50%;
`;

export default function CalendarGrid({ startDay, today, totalDays }) {

  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isSelectedMonth = (day) => today().isSame(day, 'month');

  const [modalActive, setModalActive] = useState(false)

  return (


    <div className={styles.Calendar}>
      {
        daysArray.map((dayItem) => (
          <div
            key={dayItem.format('DDMMYYYY')}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}

            className={styles.Calendar__wrapper}>

            <div className={styles.Calendar__plus} onClick={() => setModalActive(true)}>+</div>
            <Modal active={modalActive} setActive={setModalActive} />
            <div className={styles.Calendar__rowInCell}>
              <div className={styles.Calendar__dayWrapper}>
                {!isCurrentDay(dayItem) && dayItem.format('D')}
                {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('D')}</CurrentDay>}

              </div>
            </div>
          </div>
        )
        )
      }
    </div>


  )
}
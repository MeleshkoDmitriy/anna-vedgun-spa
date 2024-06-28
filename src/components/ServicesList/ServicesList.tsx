import styles from './ServicesList.module.scss';
import '../../styles/global.scss';
import {
  Contacts,
  notWorkingWith,
  workingWith,
} from '../../constants/Contacts';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';
import { BookingButton } from '../common/IconLink/BookingButton/BookingButton';

export const ServicesList = () => {
  return (
    <section className="blockGreen">
      <div className={styles.wrapper}>
        <div className={styles.workWith}>
          <h3>С какими запросами я работаю:</h3>
          <ul className={styles.list}>
            {workingWith.map((elem, i) => (
              <li key={i}>
                <FaUserCheck className={styles.icon} />
                <span className={styles.text}>{elem}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.notWorkWith}>
          <h3>С чем я не работаю:</h3>
          <ul className={styles.list}>
            {notWorkingWith.map((elem, i) => (
              <li key={i}>
                <FaUserTimes className={styles.icon} />
                <span className={styles.text}>{elem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <BookingButton link={Contacts.TELEGRAM} color="light" />
      </div>
    </section>
  );
};

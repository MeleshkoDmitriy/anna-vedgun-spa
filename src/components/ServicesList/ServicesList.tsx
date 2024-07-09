import styles from './ServicesList.module.scss';
import '../../styles/global.scss';
import { notWorkingWith, workingWith } from '../../constants/Contacts';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';

export const ServicesList = () => {
  return (
    <section className="blockGreen" id="services">
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
    </section>
  );
};

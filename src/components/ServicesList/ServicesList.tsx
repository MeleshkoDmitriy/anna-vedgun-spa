import styles from './ServicesList.module.scss';
import '../../styles/global.scss';
import { notWorkingWith, workingWith } from '../../constants/Contacts';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';
import tape from '../../assets/images/details/tape2.png';

export const ServicesList = () => {
  return (
    <div className={styles.outer}>
      <section className="blockGreenDouble" id="services">
        <div className={styles.wrapper}>
          <div className={`${styles.workWith} gradient-one`}>
            <h3 className={styles.title}>С какими запросами я работаю:</h3>
            <ul className={styles.list}>
              {workingWith.map((elem, i) => (
                <li key={i} className={styles.item}>
                  <FaUserCheck className={styles.icon} />
                  <span className={styles.text}>{elem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.notWorkWith} gradient-two`}>
            <h3 className={styles.title}>С чем я не работаю:</h3>
            <ul className={styles.list}>
              {notWorkingWith.map((elem, i) => (
                <li key={i} className={styles.item}>
                  <FaUserTimes className={styles.icon} />
                  <span className={styles.text}>{elem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <img src={tape} alt="tape" className={styles.tape} />
    </div>
  );
};

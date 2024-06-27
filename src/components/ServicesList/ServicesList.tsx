import styles from './ServicesList.module.scss';
import '../../styles/global.scss';
import { notWorkingWith, workingWith } from '../../constants/Contacts';

export const ServicesList = () => {
  return (
    <section className="blockGreen">
      <div className={styles.wrapper}>
        <div className={styles.workWith}>
          <h3>С какими запросами я работаю:</h3>
          <ul>
            {workingWith.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ul>
        </div>
        <div className={styles.notWorkWith}>
          <h3>С чем я не работаю:</h3>
          <ul>
            {notWorkingWith.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

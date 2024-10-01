import styles from './Methods.module.scss';
import '../../styles/global.scss';
import { MdOutlinePsychology } from 'react-icons/md';
import flower from '../../assets/images/flowers/bg-flowers2.png';
import tape from '../../assets/images/details/tape.png';
import { useState } from 'react';
import clsx from 'clsx';

export const Methods = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className={styles.outer}>
      <div className={styles.tabs}>
        <div
          className={clsx(styles.tab, {
            [styles.active]: tabIndex === 0,
          })}
        >
          <button onClick={() => setTabIndex(0)}>КПТ</button>
        </div>
        <div
          className={clsx(styles.tab, {
            [styles.active]: tabIndex === 1,
          })}
        >
          <button
            className={tabIndex === 1 ? styles.active : ''}
            onClick={() => setTabIndex(1)}
          >
            Схема-терапия
          </button>
        </div>
      </div>
      <section className="blockBlur" id="methods">
        <div className={styles.wrapper}>
          <h2>Методы</h2>
          <div className={styles.methods}>
            {tabIndex === 0 && (
              <div className={styles.method}>
                <p>
                  <span className={styles.definition}>
                    <MdOutlinePsychology className={styles.icon} />
                    Когнитивно-поведенческая терапия (КПТ)
                  </span>{' '}
                  — это психологический подход, основанный на идее, что мысли и
                  убеждения влияют на эмоциональное состояние человека.
                </p>
                <p>
                  С точки зрения этого подхода причина негативных переживаний —
                  не в жизненных обстоятельствах, а в их интерпретации
                  человеком, которая часто опирается на ложные убеждения о себе,
                  других людях и мире.
                </p>
                <p>
                  КПТ учит выявлять убеждения и ошибки мышления, которые
                  искажают восприятие реальности, а также формировать на их
                  месте более реалистичные и изменять поведение, опираясь на
                  новую картину мира.
                </p>
              </div>
            )}
            {tabIndex === 1 && (
              <div className={styles.method}>
                <p>
                  <span className={styles.definition}>
                    <MdOutlinePsychology className={styles.icon} />
                    Схема-терапия
                  </span>{' '}
                  основана на принципах КПТ, но этот метод также включает в себя
                  избранные техники гештальт-терапии, психоанализа,
                  гуманистической терапии.
                </p>
                <p>
                  В схема-терапии гораздо большее внимания уделяется раннему
                  детскому опыту человека, его проблемным эмоциям и
                  удовлетворению его эмоциональных потребностей.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <img className={styles.flower} src={flower} alt="flower" />
      <img className={styles.tape} src={tape} alt="tape" />
    </div>
  );
};

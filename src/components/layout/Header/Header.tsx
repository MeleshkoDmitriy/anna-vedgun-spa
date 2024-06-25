import styles from './Header.module.scss';
import '../../../styles/global.scss';
import { NavLinks } from '../../NavLinks/NavLinks';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <h1>Анна Ведьгун</h1>
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

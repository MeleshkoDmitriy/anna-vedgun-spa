import styles from './SocialsBar.module.scss'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { Contacts } from '../../constants/Contacts';

export const SocialsBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <a href={Contacts.TELEGRAM} target='blank'>
          <FaTelegramPlane className={styles.icon} />
        </a>
      </div>
      <div className={styles.item}>
        <a href={Contacts.INSTAGRAM} target='blank'>
          <FaInstagram className={styles.icon} />
        </a>
      </div>
      <div className={styles.item}>
        <a href={Contacts.B17} target='blank'>
          <MdLibraryBooks className={styles.icon} />
        </a>
      </div>
    </div>
  )
}
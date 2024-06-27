import { Contacts } from '../../../constants/Contacts';
import '../../../styles/global.scss';
import { IconLink } from '../../common/IconLink/IconLink';
import styles from './Footer.module.scss';
import { FaInstagram, FaPhone } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <IconLink
            link={Contacts.TELEGRAM}
            icon={<FaTelegramPlane />}
            size="md"
            text="Telegram"
          />
          <IconLink
            link={Contacts.INSTAGRAM}
            icon={<FaInstagram />}
            size="md"
            text="Instagram"
          />
          <IconLink
            link={Contacts.B17}
            icon={<MdLibraryBooks />}
            size="md"
            text="B17"
          />
          <IconLink icon={<FaPhone />} size="sm" text={Contacts.PHONE_NUMBER} />
        </div>
      </div>
    </footer>
  );
};

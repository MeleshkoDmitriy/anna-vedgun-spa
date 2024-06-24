import { Contacts } from '../../../constants/Contacts';
import '../../../styles/global.scss';
import { IconLink } from '../../common/IconLink/IconLink';
import styles from './Footer.module.scss';
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <IconLink link={Contacts.TELEGRAM} icon={<FaTelegramPlane />} iconSize="md" iconColor="dark" />
        <IconLink link={Contacts.INSTAGRAM} icon={<FaInstagram />} iconSize="md" iconColor="dark" />
        <IconLink link={Contacts.B17} icon={<MdLibraryBooks />} iconSize="md" iconColor="dark" />
      </div>
    </footer>
  );
};


import { Contacts } from '../../../constants/Contacts';
import '../../../styles/global.scss';
import { IconLink } from '../../common/IconLink/IconLink';
import styles from './Footer.module.scss';
import { FaTelegram, FaInstagram, FaBook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <IconLink link={Contacts.TELEGRAM} icon={<FaTelegramPlane />} iconSize="md" iconColor="dark" />
        <IconLink link={Contacts.INSTAGRAM} icon={<FaInstagram />} iconSize="md" iconColor="dark" />
        <IconLink link={Contacts.B17} icon={<TbWorld />} iconSize="md" iconColor="dark" />
      </div>
    </footer>
  );
};


import { Contacts } from '../../../constants/Contacts';
import '../../../styles/global.scss';
import { IconLink } from '../../common/IconLink/IconLink';
import styles from './Footer.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import qrCode from '../../../assets/images/qr/qr-code.png';
import flower from '../../../assets/images/flowers/bg-flowers5.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.socials}>
            <IconLink
              link={Contacts.TELEGRAM}
              icon={<FaTelegramPlane />}
              size="md"
              text=""
            />
            <IconLink
              link={Contacts.INSTAGRAM}
              icon={<FaInstagram />}
              size="md"
              text=""
            />
            <IconLink
              link={Contacts.B17}
              icon={<MdLibraryBooks />}
              size="md"
              text=""
            />
          </div>
          <div className={styles.qrWrapper}>
            <img className={styles.qr} src={qrCode} alt="qrCode" />
          </div>
          {/* <img src={flower} alt="flower" className={styles.flower} /> */}
        </div>
      </div>
    </footer>
  );
};

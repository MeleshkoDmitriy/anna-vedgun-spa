import { anchors, Contacts } from '../../../constants/Contacts';
import '../../../styles/global.scss';
import { IconLink } from '../../common/IconLink/IconLink';
import styles from './Footer.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import qrCode from '../../../assets/images/qr/qr-code.png';
import { Paths } from '../../../constants/Paths';
import { useNavigate } from 'react-router-dom';

import { FaPhone } from 'react-icons/fa6';
import { BsPeopleFill } from 'react-icons/bs';
import { IoWallet } from 'react-icons/io5';
import { IoSchool } from 'react-icons/io5';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { MdFeedback } from 'react-icons/md';

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (anchor: string) => {
    navigate(`${Paths.HOME}#${anchor}`);
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <h3 className={styles.title}>Меню</h3>
            <ul className={styles.list}>
              <li onClick={() => handleLinkClick('contacts')}>
                <FaPhone className={styles.icon} />
                <a href="#contacts" className={styles.name}>
                  {anchors.CONTACTS}
                </a>
              </li>
              <li onClick={() => handleLinkClick('services')}>
                <BsPeopleFill className={styles.icon} />
                <a href="#services" className={styles.name}>
                  {anchors.SERVICES}
                </a>
              </li>
              <li onClick={() => handleLinkClick('price')}>
                <IoWallet className={styles.icon} />
                <a href="#price" className={styles.name}>
                  {anchors.PRICE}
                </a>
              </li>
              <li onClick={() => handleLinkClick('education')}>
                <IoSchool className={styles.icon} />
                <a href="#education" className={styles.name}>
                  {anchors.EDUCATION}
                </a>
              </li>
              <li onClick={() => handleLinkClick('methods')}>
                <FaHandshakeSimple className={styles.icon} />
                <a href="#methods" className={styles.name}>
                  {anchors.METHODS}
                </a>
              </li>
              <li onClick={() => handleLinkClick('feedbacks')}>
                <MdFeedback className={styles.icon} />
                <a href="#feedbacks" className={styles.name}>
                  {anchors.FEEDBACKS}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.title}>Социальные сети</h3>
            <ul className={styles.list}>
              <IconLink
                link={Contacts.TELEGRAM}
                icon={<FaTelegramPlane />}
                size="sm"
                text="Telegram"
              />
              <IconLink
                link={Contacts.INSTAGRAM}
                icon={<FaInstagram />}
                size="sm"
                text="Instagram"
              />
              <IconLink
                link={Contacts.B17}
                icon={<MdLibraryBooks />}
                size="sm"
                text="B17"
              />
            </ul>
          </div>
          <div className={styles.qrWrapper}>
            <img className={styles.qr} src={qrCode} alt="qrCode" />
          </div>
        </div>
      </div>
    </footer>
  );
};

import styles from './DropdownMenu.module.scss';
import { Paths } from '../../constants/Paths';

import { useNavigate } from 'react-router-dom';
import { Anchors } from '../../constants/Contacts';

import { FaPhone } from "react-icons/fa6";
import { BsPeopleFill } from 'react-icons/bs';
import { IoWallet } from 'react-icons/io5';
import { IoSchool } from 'react-icons/io5';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { MdFeedback } from 'react-icons/md';

export const DropdownMenu = () => {
  const navigate = useNavigate();

  const handleLinkClick = (anchor: string) => {
    navigate(`${Paths.HOME}#${anchor}`);
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li onClick={() => handleLinkClick('contacts')}>
          <FaPhone className={styles.icon} />
          <a href="#contacts" className={styles.name}>
            {Anchors.CONTACTS}
          </a>
        </li>
        <li onClick={() => handleLinkClick('services')}>
          <BsPeopleFill className={styles.icon} />
          <a href="#services" className={styles.name}>
            {Anchors.SERVICES}
          </a>
        </li>
        <li onClick={() => handleLinkClick('price')}>
          <IoWallet className={styles.icon} />
          <a href="#price" className={styles.name}>
            {Anchors.PRICE}
          </a>
        </li>
        <li onClick={() => handleLinkClick('education')}>
          <IoSchool className={styles.icon} />
          <a href="#education" className={styles.name}>
            {Anchors.EDUCATION}
          </a>
        </li>
        <li onClick={() => handleLinkClick('methods')}>
          <FaHandshakeSimple className={styles.icon} />
          <a href="#methods" className={styles.name}>
            {Anchors.METHODS}
          </a>
        </li>
        <li onClick={() => handleLinkClick('feedbacks')}>
          <MdFeedback className={styles.icon} />
          <a href="#feedbacks" className={styles.name}>
            {Anchors.FEEDBACKS}
          </a>
        </li>
      </ul>
    </div>
  );
};

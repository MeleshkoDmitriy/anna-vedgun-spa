import { useEffect, useState } from 'react';
import styles from './ButtonUp.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import clsx from 'clsx';

export const ButtonUp = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.show]: showButton,
      })}
      onClick={handleClick}
    >
      <IoIosArrowUp className={styles.icon} />
    </div>
  );
};

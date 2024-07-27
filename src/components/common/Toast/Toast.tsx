import { FC, useEffect, useState } from 'react';
import styles from './Toast.module.scss';
import clsx from 'clsx';
import { IoCloseOutline } from 'react-icons/io5';
import { IoCheckmarkOutline } from 'react-icons/io5';

interface ToastProps {
  message: string | null;
  type: 'success' | 'error' | null;
  duration?: number;
}

export const Toast: FC<ToastProps> = ({ message, type, duration = 1500 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!message || !type) {
      return;
    } else {
      setIsShown(true);
    }

    const timerId = setTimeout(() => {
      setIsShown(false);
    }, duration);

    return () => clearTimeout(timerId);
  }, [message, type, duration]);

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.show]: isShown,
      })}
    >
      <div className={styles.content}>
        {type === 'success' ? (
          <IoCheckmarkOutline className={styles.icon} />
        ) : type === 'error' ? (
          <IoCloseOutline className={styles.icon} />
        ) : null}
        <span className={styles.message}>{message}</span>
      </div>
    </div>
  );
};

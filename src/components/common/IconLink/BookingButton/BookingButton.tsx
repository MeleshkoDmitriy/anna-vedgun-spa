import { FC } from 'react';
import styles from './BookingButton.module.scss';
import clsx from 'clsx';

interface BookingButtonProps {
  link: string;
  color: 'light' | 'green';
}

export const BookingButton: FC<BookingButtonProps> = ({ link, color }) => {
  const classes = clsx(styles.wrapper, {
    [styles.light]: color === 'light',
    [styles.green]: color === 'green',
  });

  return (
    <a
      className={classes}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={styles.button}>
        <span className={styles.text}>Записаться</span>
      </button>
    </a>
  );
};

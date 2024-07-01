import { FC } from 'react';
import styles from './TextButton.module.scss';
import clsx from 'clsx';

interface TextButtonProps {
  color: 'light' | 'green';
  text: string;
  link?: string;
  onClick?: (event: Event) => void;
}

export const TextButton: FC<TextButtonProps> = ({ link, color, text, onClick }) => {
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
      <button className={styles.button} onClick={onClick}>
        <span className={styles.text}>{text}</span>
      </button>
    </a>
  );
};

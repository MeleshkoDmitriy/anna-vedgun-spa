import { FC } from 'react';
import styles from './Post.module.scss';
import { FaLink } from 'react-icons/fa6';

interface PostProps {
  date: string;
  title: string;
  text: string;
  url: string;
}

export const Post: FC<PostProps> = ({ date, title, text, url }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
      <div className={styles.content}>
        <p>{text}</p>
      </div>
      <div className={styles.footer}>
        <a href={url} target="_blank" rel="noreferrer">
          <FaLink />
          <span>Перейти на сайт</span>
        </a>
      </div>
    </div>
  );
};

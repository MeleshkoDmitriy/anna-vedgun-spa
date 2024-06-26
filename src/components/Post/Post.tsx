import { FC } from 'react';
import styles from './Post.module.scss';
import { FaLink } from 'react-icons/fa6';
import author from '../../assets/images/user/avatar.png';

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
        <div className={styles.author}>
          <img src={author} alt="author" />
        </div>
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

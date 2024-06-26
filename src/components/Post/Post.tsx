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

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, children }) => (
  <p className={className}>{children}</p>
);

const formatText = (text: string) => {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((paragraph, index) => (
    <Paragraph key={index} className={styles.paragraph}>
      {paragraph.split('\n').map((line, lineIndex) => (
        <span key={lineIndex} className={styles.line}>
          {line}
          {lineIndex < paragraph.split('\n').length - 1 && <br />}
        </span>
      ))}
    </Paragraph>
  ));
};

export const Post: FC<PostProps> = ({ date, title, text, url }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.author}>
          <img src={author} alt="author" />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.content}>{formatText(text)}</div>
      {url && (
        <div className={styles.footer}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <FaLink className={styles.icon} />
            <span>Перейти на сайт</span>
          </a>
        </div>
      )}
    </div>
  );
};

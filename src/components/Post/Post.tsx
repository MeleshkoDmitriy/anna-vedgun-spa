import { FC, useRef } from 'react';
import styles from './Post.module.scss';
import { FaLink } from 'react-icons/fa6';
import author from '../../assets/images/user/avatar.png';
import { IoIosArrowUp } from 'react-icons/io';

interface PostProps {
  id: number;
  date: string;
  title: string;
  text: string;
  url: string;
  onClick: () => void;
  isOpen: boolean;
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

export const Post: FC<PostProps> = ({
  date,
  title,
  text,
  url,
  onClick,
  isOpen,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <button className={styles.wrapper} onClick={() => onClick()}>
      <div className={styles.header}>
        <div className={styles.author}>
          <img src={author} alt="author" />
        </div>
        <h3 className={`${styles.title} ${isOpen ? styles.openTitle : ''}`}>
          {title}
        </h3>
        <span className={styles.date}>{date}</span>
        <span>
          <IoIosArrowUp
            className={`${styles.arrow} ${isOpen ? styles.openArrow : ''}`}
          />
        </span>
      </div>
      <div
        className={styles.collapse}
        style={
          isOpen
            ? { height: `${itemRef.current?.scrollHeight + 15}px` }
            : { height: '0px' }
        }
      >
        <div className={styles.content} ref={itemRef}>
          {formatText(text)}
          {url && (
            <div className={styles.footer}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FaLink className={styles.icon} />
                <span>Узнать больше</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

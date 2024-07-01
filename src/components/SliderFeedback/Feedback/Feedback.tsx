import { FC } from 'react';
import styles from './Feedback.module.scss';

interface FeedbackProps {
  text: string;
  date: string;
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

export const Feedback: FC<FeedbackProps> = ({ text, date }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>{formatText(text)}</div>
      <span className={styles.date}>{date}</span>
      <div className={styles.mt}>-</div>
    </div>
  );
};

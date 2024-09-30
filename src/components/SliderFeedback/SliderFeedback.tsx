import styles from './SliderFeedback.module.scss';
import '../../styles/global.scss';
import { useEffect, useState } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { FaRegCircleDot } from 'react-icons/fa6';
import { FaCircleDot } from 'react-icons/fa6';
import { useGetFeedbacksQuery } from '../../store/slice/api/apiSlice';
import { TFeedback } from '../../types/types';
import { Feedback } from './Feedback/Feedback';
import { TextButton } from '../common/TextButton/TextButton';
// import { Contacts } from '../../constants/Contacts';
import { FormFeedback } from '../FormFeedback/FormFeedback';
import ReactDOM from 'react-dom';

export const SliderFeedback = () => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState<TFeedback[] | []>([]);

  const [isForm, setIsForm] = useState(false);

  const { data, isLoading, isError } = useGetFeedbacksQuery();

  useEffect(() => {
    if (!!data && !isLoading && !isError) {
      const reversedFeedbacks = [...data].reverse();
      setFeedbacks(reversedFeedbacks);
    }
  }, [data]);

  const showPrevFeedback = () => {
    setFeedbackIndex((feedbackIndex) => {
      if (feedbackIndex === 0) {
        return feedbacks.length - 1;
      } else {
        return feedbackIndex - 1;
      }
    });
  };

  const showNextFeedback = () => {
    setFeedbackIndex((feedbackIndex) => {
      if (feedbackIndex === feedbacks.length - 1) {
        return 0;
      } else {
        return feedbackIndex + 1;
      }
    });
  };

  const handleShowForm = () => {
    setIsForm(true);
  };

  const handleCloseForm = () => {
    setIsForm(false);
  };

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <section className="blockGreen gradient-three" id="feedbacks">
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          {feedbacks.length > 0 && (
            <Feedback
              text={feedbacks[feedbackIndex].text}
              date={feedbacks[feedbackIndex].date}
            />
          )}
        </div>

        <button
          onClick={showPrevFeedback}
          className={`${styles.button}  ${styles.left}`}
        >
          <IoIosArrowDropleftCircle className={styles.icon} />
        </button>
        <button
          onClick={showNextFeedback}
          className={`${styles.button}  ${styles.right}`}
        >
          <IoIosArrowDroprightCircle className={styles.icon} />
        </button>
        <div className={styles.indexWrapper}>
          {feedbacks.map((_, index) => (
            <button
              className={styles.indexButton}
              onClick={() => setFeedbackIndex(index)}
              key={index}
            >
              {index === feedbackIndex ? (
                <FaCircleDot
                  className={`${styles.indexIcon} ${styles.chosen}`}
                />
              ) : (
                <FaRegCircleDot className={styles.indexIcon} />
              )}
            </button>
          ))}
        </div>
      </div>
      <TextButton
        color="light"
        text="Оставить отзыв"
        onClick={handleShowForm}
      />
      {isForm &&
        ReactDOM.createPortal(
          <FormFeedback onClose={handleCloseForm} />,
          document.body,
        )}
    </section>
  );
};

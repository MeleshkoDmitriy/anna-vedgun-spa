import { useForm } from 'react-hook-form';
import styles from './FormFeedback.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import { usePostMessageMutation } from '../../store/slice/api/apiSlice';
import { TMessage } from '../../types/types';
import { calcDate } from '../../utils/calcDate';
import { useClickOutside } from '../../hooks/useClickOutside';

type Message = Omit<TMessage, 'date'>;

export const FormFeedback = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [buttonText, setButtonText] = useState('Отправить');

  const formRef = useRef<HTMLDivElement>(null);
  useClickOutside(formRef, () => {
    onClose();
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const [postMessage] = usePostMessageMutation();

  const onHandleSubmit = async (data: Message) => {
    const nameValue = data.name.trim() === '' ? 'Аноним' : data.name;

    const newMessage: TMessage = {
      name: nameValue,
      text: data.text,
      isAllowed: data.isAllowed,
      date: calcDate(),
    };

    try {
      await postMessage(newMessage).unwrap();
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setButtonText('Отправлено!');

    setTimeout(() => {
      reset();
      onClose();
      setButtonText('Отправить');
    }, 1500);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={formRef}>
        <div className={styles.close}>
          <button onClick={onClose} type="button">
            <IoCloseOutline className={styles.icon} />
          </button>
        </div>
        <h2 className={styles.title}>Ваш отзыв</h2>
        <form className={styles.form} onSubmit={handleSubmit(onHandleSubmit)}>
          <div className={styles.actions}>
            <input
              className={styles.name}
              {...register('name')}
              type="text"
              placeholder="Ваше имя"
            />
          </div>
          <div className={styles.actions}>
            <textarea
              className={styles.text}
              {...register('text', {
                required: 'Поле с отзывом является обязательным!',
              })}
              placeholder="Ваш отзыв*"
            />
            {errors.text ? (
              <span className={styles.error}>{errors.text.message}</span>
            ) : (
              <span className={styles.empty}>-</span>
            )}
          </div>
          <div className={styles.actions}>
            <button className={styles.submit} type="submit">
              {buttonText}
            </button>
          </div>
          <div className={`${styles.actions} ${styles.confirm}`}>
            <span className={styles.confirmText}>
              Я разрешаю анонимную публикацию отзыва на этом сайте:
            </span>
            <input
              {...register('isAllowed')}
              type="checkbox"
              className={styles.checkbox}
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

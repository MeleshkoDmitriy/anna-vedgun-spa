import { useForm } from 'react-hook-form';
import styles from './FormFeedback.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import { usePostMessageMutation } from '../../store/slice/api/apiSlice';
import { TMessage } from '../../types/types';
import { calcDate } from '../../utils/calcDate';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Toast } from '../common/Toast/Toast';

type Message = Omit<TMessage, 'date'>;

export const FormFeedback = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [buttonText, setButtonText] = useState('Отправить');
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<'success' | 'error' | null>(null);

  const formRef = useRef<HTMLDivElement>(null);
  useClickOutside(formRef, () => {
    onClose();
  });

  const { register, handleSubmit, reset } = useForm({});

  const [postMessage] = usePostMessageMutation();

  const onHandleSubmit = async (
    data: Message,
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const nameValue = data.name.trim() === '' ? 'Аноним' : data.name;
    const textValue = data.text.trim();

    if (textValue === '') {
      setType('error');
      setMessage('Поле с отзывом является обязательным!');
      return;
    }

    const newMessage: TMessage = {
      name: nameValue,
      text: textValue,
      isAllowed: data.isAllowed,
      date: calcDate(),
    };

    try {
      await postMessage(newMessage).unwrap();
      setType('success');
      setMessage('Спасибо за ваш отзыв!');
      setButtonText('Отправлено!');
      reset();
    } catch (error) {
      setType('error');
      setMessage('Что-то пошло не так..');
      console.error('Error sending message:', error);
    }

    setTimeout(() => {
      onClose();
      setButtonText('Отправить');
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(onHandleSubmit)(e);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [message, type]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={formRef}>
        <div className={styles.close}>
          <button onClick={onClose} type="button">
            <IoCloseOutline className={styles.icon} />
          </button>
        </div>
        <h2 className={styles.title}>Ваш отзыв</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onHandleSubmit)}
          onKeyDown={handleKeyPress}
        >
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
      <Toast message={message} type={type} />
    </div>
  );
};

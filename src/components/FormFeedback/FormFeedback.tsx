import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './FormFeedback.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useCallback, useRef, useState } from 'react';
import { usePostMessageMutation } from '../../store/slice/api/apiSlice';
import { TMessage } from '../../types/types';
import { calcDate } from '../../utils/calcDate';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Toast } from '../common/Toast/Toast';
import { Checkbox } from '../common/Checkbox/Checkbox';

type Message = Omit<TMessage, 'date'>;

interface FormFeedbackProps {
  onClose: () => void;
}

export const FormFeedback: React.FC<FormFeedbackProps> = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [buttonText, setButtonText] = useState('Отправить');
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<'success' | 'error' | null>(null);

  const formRef = useRef<HTMLDivElement>(null);
  useClickOutside(formRef, onClose);

  const { register, handleSubmit, reset } = useForm<Message>({});

  const [postMessage] = usePostMessageMutation();

  const onHandleSubmit: SubmitHandler<Message> = async (data, e) => {
    e?.preventDefault();
  
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
      isAllowed: isChecked,
      date: calcDate(),
    };
  
    try {
      await postMessage(newMessage);
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
      setMessage(null);
      setType(null);
    }, 2000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(onHandleSubmit)(e);
    }
  };

  const onCheckboxClick = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, [isChecked]);

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
              {...register('text')}
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
            <Checkbox isChecked={isChecked} onChange={onCheckboxClick} />
          </div>
        </form>
      </div>
      <Toast message={message} type={type} />
    </div>
  );
};

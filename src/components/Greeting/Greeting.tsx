import styles from './Greeting.module.scss';
import '../.././styles/global.scss';
import image from '../../assets/images/user/avatar.png';

export const Greeting = () => {
  return (
    <section className="blockWhite">
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={image} alt="Анна Ведьгун" title="Анна Ведьгун" />
        </div>
        <div className={styles.body}>
          <h2>Приветствую 👋🏼</h2>
          <p>Меня зовут Ведьгун Анна, я практикующий психолог :)</p>
          <p>
            Изучаю психологию уже 8 лет, а практикую 3 года. В работе использую
            когнитивно-поведенческую терапию и схема-терапию. Провожу
            индивидуальные сессии в онлайн и офлайн формате.
          </p>
        </div>
      </div>
    </section>
  );
};

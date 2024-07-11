import styles from './Offer.module.scss';
import '../../styles/global.scss';
import detail from '../../assets/images/details/datail1.png'

export const Offer = () => {
  return (
    <div className={styles.outer}>
      <section className="blockGreen">
        <h1>Публичный договор</h1>
      </section>
      <img src={detail} alt="detail" className={styles.detail} />
    </div>
  );
};

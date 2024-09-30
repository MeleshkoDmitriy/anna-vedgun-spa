import styles from './PriceList.module.scss';
import '../../styles/global.scss';
import { TextButton } from '../common/TextButton/TextButton';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/Paths';
import { Contacts } from '../../constants/Contacts';
import { FaLink } from 'react-icons/fa6';
import flower from '../../assets/images/flowers/bg-flowers.png';
import { useGetOwnerInfoQuery } from '../../store/slice/api/apiSlice';

export const PriceList = () => {
  const { data: user } = useGetOwnerInfoQuery();
  
  return (
    <div className={styles.outer}>
      <section className="blockBlur" id="price">
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h2 className={styles.title}>Цена консультации</h2>
            <div className={styles.body}>
              <div className={styles.subWrapper}>
                <div className={styles.format}>
                  <div className={styles.session}>online / offline</div>
                  <div className={styles.session}>сессия 50 минут</div>
                </div>
                <div className={styles.price}>
                  <span className={styles.number}>{user ? user[0].price : '50'}</span>
                  <span className={styles.currency}>BYN</span>
                </div>
              </div>
              <TextButton
                link={Contacts.TELEGRAM}
                color="green"
                text="Записаться на консультацию"
              />
              <Link to={Paths.OFFER}>
                <span className={styles.link}>
                  <FaLink className={styles.icon} />
                  Ознакомиться с публичным договором
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <img className={styles.flower} src={flower} alt="flower" />
    </div>
  );
};

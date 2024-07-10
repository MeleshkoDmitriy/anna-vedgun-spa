import styles from './PriceList.module.scss';
import '../../styles/global.scss';
import { useEffect, useState } from 'react';
import { TextButton } from '../common/TextButton/TextButton';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/Paths';
import { Contacts } from '../../constants/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/slice/userSlice';
import { FaLink } from 'react-icons/fa6';
import flower from '../../assets/images/flowers/bg-flowers.png';

export const PriceList = () => {
  const [price, setPrice] = useState(50);

  const dispatch = useDispatch();

  const { price: fetchedPrice, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      setPrice(fetchedPrice);
    }
  }, [isLoading, fetchedPrice]);

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
                  <span className={styles.number}>{price}</span>
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

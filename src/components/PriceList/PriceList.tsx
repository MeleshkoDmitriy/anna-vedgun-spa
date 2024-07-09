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
    <section className="blockWhite" id="price">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Цена консультации</h2>
        <div className={styles.body}>
          <div className={styles.session}>online / offline сессия 50 минут</div>
          <div className={styles.price}>
            <span className={styles.number}>{price}</span>
            <span className={styles.currency}>BYN</span>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <TextButton
            link={Contacts.TELEGRAM}
            color="green"
            text="Записаться на консультацию"
          />
        </div>
        <div className={styles.linkWrapper}>
          <Link to={Paths.OFFER}>
            <span className={styles.link}>
              <FaLink className={styles.icon} />
              Ознакомиться с публичным договором
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

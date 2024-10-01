import { useNavigate } from 'react-router-dom';
import { TextButton } from '../../components/common/TextButton/TextButton';
import { Layout } from '../../components/layout/Layout/Layout';
import styles from './NotFoundPage.module.scss';
import { Contacts } from '../../constants/Contacts';

export const NotFoundPage = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  }

  return (
    <Layout>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Такой страницы не существует!</h2>
        <div className={styles.buttons}>
          <TextButton color='green' text='Назад' onClick={handleGoBack} />
          <TextButton color='green' text='На главную' onClick={handleGoHome} />
          <TextButton color='light' text='Консультация' link={Contacts.TELEGRAM} />
        </div>
      </section>
    </Layout>
  );
};

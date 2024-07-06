import { Greeting } from '../../components/Greeting/Greeting';
import { Methods } from '../../components/Methods/Methods';
import { PriceList } from '../../components/PriceList/PriceList';
import { ServicesList } from '../../components/ServicesList/ServicesList';
import { SliderFeedback } from '../../components/SliderFeedback/SliderFeedback';
import { SliderImage } from '../../components/SliderImage/SliderImage';
import { Layout } from '../../components/layout/Layout/Layout';
// import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <Layout>
      <Greeting />
      <ServicesList />
      <PriceList />
      <SliderImage />
      <Methods />
      <SliderFeedback />
    </Layout>
  );
};

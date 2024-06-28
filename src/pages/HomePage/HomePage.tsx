import { Greeting } from '../../components/Greeting/Greeting';
import { ServicesList } from '../../components/ServicesList/ServicesList';
import { Slider } from '../../components/Slider/Slider';
import { Layout } from '../../components/layout/Layout/Layout';
// import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <Layout>
      <Greeting />
      <ServicesList />
      <Slider />
    </Layout>
  );
};

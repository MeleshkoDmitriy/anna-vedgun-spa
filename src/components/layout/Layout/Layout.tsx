import React, { FC } from 'react';
import styles from './Layout.module.scss';
import '../../../styles/global.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import clsx from 'clsx';
import { ButtonUp } from '../../ButtonUp/ButtonUp';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={clsx(styles.content, 'container')}>{children}</main>
      <ButtonUp />
      <Footer />
    </div>
  );
};

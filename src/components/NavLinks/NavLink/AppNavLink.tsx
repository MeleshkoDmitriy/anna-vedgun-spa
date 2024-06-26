import { FC } from 'react';
import styles from './AppNavLink.module.scss';
import { TLink } from '../../../types/types';
import { NavLink } from 'react-router-dom';

interface LinkProps {
  link: TLink;
  onClick?: () => void;
}

export const AppNavLink: FC<LinkProps> = ({ link, onClick }: LinkProps) => {
  const { path, title } = link;

  return (
    <NavLink
      to={path}
      key={title}
      onClick={onClick}
      className={({ isActive }) => {
        return isActive ? `${styles.active} ${styles.link}` : `${styles.link}`;
      }}
    >
      {title}
    </NavLink>
  );
};

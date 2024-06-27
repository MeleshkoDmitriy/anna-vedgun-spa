import { FC, useEffect, useState } from 'react';
import styles from './AppNavLink.module.scss';
import { TLink } from '../../../types/types';
import { NavLink } from 'react-router-dom';
import { useGetPostsQuery } from '../../../store/slice/api/apiSlice';

interface LinkProps {
  link: TLink;
  onClick?: () => void;
}

export const AppNavLink: FC<LinkProps> = ({ link, onClick }: LinkProps) => {
  const { path, title } = link;

  const [length, setLength] = useState(0);

  const { data, isLoading } = useGetPostsQuery();

  useEffect(() => {
    if (!!data && !isLoading) {
      setLength(data.length);
    }
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <NavLink
        to={path}
        key={title}
        onClick={onClick}
        className={({ isActive }) => {
          return isActive
            ? `${styles.link} ${styles.active}`
            : `${styles.link}`;
        }}
      >
        <span>{title}</span>
      </NavLink>
      {path === '/blog' && length > 0 && (
        <div className={styles.badge}>{length}</div>
      )}
    </div>
  );
};

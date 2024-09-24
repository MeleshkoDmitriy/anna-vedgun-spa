import { FC, useEffect, useState } from 'react';
import styles from './AppNavLink.module.scss';
import { TLink } from '../../../types/types';
import { NavLink } from 'react-router-dom';
import { useGetPostsQuery } from '../../../store/slice/api/apiSlice';
import { IoIosArrowUp } from 'react-icons/io';
import { DropdownMenu } from '../../DropdownMenu/DropdownMenu';

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
        {title === 'Главная' && (
          <span className={styles.iconWrapper}>
            <IoIosArrowUp className={styles.icon} />
          </span>
        )}
      </NavLink>
      {path === '/blog' && length > 0 && (
        <div className={styles.badge}>
          <span className={styles.length}>{length}</span>
        </div>
      )}
      {title === 'Главная' && (
        <div className={styles.dropdownWrapper}>
          <DropdownMenu />
        </div>
      )}
    </div>
  );
};

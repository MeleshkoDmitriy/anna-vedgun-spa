import React, { FC } from 'react';
import styles from './IconLink.module.scss';
import clsx from 'clsx';

type IconSize = 'sm' | 'md' | 'xl';
type IconColor = 'dark' | 'light';

interface IconLinkProps {
  icon: React.ReactNode;
  link: string;
  iconSize: IconSize;
  iconColor: IconColor;
}

export const IconLink: FC<IconLinkProps> = ({
  icon,
  link,
  iconSize,
  iconColor,
}) => {
  const iconClasses = clsx(styles.icon, {
    [styles[`icon--${iconSize}`]]: iconSize,
    [styles[`icon--${iconColor}`]]: iconColor,
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={iconClasses}
    >
      {icon}
    </a>
  );
};

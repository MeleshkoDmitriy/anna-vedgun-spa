import React, { FC } from 'react';
import styles from './IconLink.module.scss';

type TSize = 'sm' | 'md' | 'xl';

interface IconLinkProps {
  icon: React.ReactNode;
  link?: string;
  size: TSize;
  text?: string;
}

export const IconLink: FC<IconLinkProps> = ({ icon, link, size, text }) => {
  const sizeClass = styles[`icon--${size}`];

  return (
    <a
      href={link}
      target={link ? '_blank' : ''}
      rel="noopener noreferrer"
      className={`${styles.icon} ${sizeClass}`}
    >
      <span>{icon}</span>
      {text && <span>{text}</span>}
    </a>
  );
};

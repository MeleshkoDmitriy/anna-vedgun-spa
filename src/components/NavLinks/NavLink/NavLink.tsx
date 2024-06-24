import { FC } from "react";
import styles from "./NavLink.module.scss";
import { TLink } from "../../../types/types";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

interface LinkProps {
  link: TLink;
  onClick?: () => void;
}

export const NavLink: FC<LinkProps> = ({ link, onClick }: LinkProps) => {
  const { title, path } = link;

  const location = useLocation();

  const linkClasses = clsx(styles.link, {
    [styles.active]: location.pathname === link.path,
  });

  return (
    <Link
      to={path}
      key={link.title}
      onClick={onClick}
      className={linkClasses}
    >
      {title}
    </Link>
  );
};

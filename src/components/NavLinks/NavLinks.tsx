import styles from './NavLinks.module.scss';
import { TbMenu2 } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
import { Links } from '../../constants/Contacts';
import { AppNavLink } from './NavLink/AppNavLink';

export const NavLinks = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {Links.map((link) => {
          return <AppNavLink link={link} key={link.title} />;
        })}
      </nav>

      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className={styles.burgerButton}
      >
        {isMenuOpen ? (
          <CgClose className={styles.burgerIcon} />
        ) : (
          <TbMenu2 className={styles.burgerIcon} />
        )}
      </button>
      {isMenuOpen && (
        <nav className={styles.navMobile}>
          {Links.map((link) => {
            return (
              <AppNavLink
                key={link.title}
                link={link}
                onClick={handleCloseMenu}
              />
            );
          })}
        </nav>
      )}
    </div>
  );
};

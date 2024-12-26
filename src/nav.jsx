import { useState } from 'preact/hooks';
import { Hamburger } from './Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';

export function Nav() {
  const [navActive, setNavActive] = useState(true);

  const toggleShowNav = () => {
    setNavActive(!navActive);
  };

  const links = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Solutions',
      href: '#solutions',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <>
      <div className={styles.hamburgerContainer} onClick={toggleShowNav}>
        <Hamburger isOpen={navActive} onClick={toggleShowNav} />
      </div>
      <div
        className={
          navActive
            ? [styles.navActive, styles.navContainer].join(' ')
            : styles.navContainer
        }
      >
        <div className={styles.navItemsContainer}>
          {links.map((link, index) => (
            <a href={link.href} onClick={toggleShowNav} key={index}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from 'preact/hooks';
import { Hamburger, useScrollLock } from '../layout/index';
import logo from '../assets/logo2.png';

import styles from '../assets/styles/Nav.module.css';

function Nav({ scrollDirection, top }) {
  const [navActive, setNavActive] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleShowNav = () => {
    setNavActive(!navActive);
    if (navActive) {
      unlockScroll();
    } else {
      lockScroll();
    }
  };

  const items = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Services',
      href: '#services',
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
          <img src={logo} className={styles.logo} />
          {items.map((item, index) => (
            <div className={styles.linkContainer}>
              <a
                href={item.href}
                onClick={toggleShowNav}
                key={index}
                className={styles.links}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Nav;

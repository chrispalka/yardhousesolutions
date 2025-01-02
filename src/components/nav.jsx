import { useState } from 'preact/hooks';
import { Hamburger } from './hamburger';
import styles from '../assets/styles/Nav.module.css';

function Nav() {
  const [navActive, setNavActive] = useState(false);

  const toggleShowNav = () => {
    setNavActive(!navActive);
  };

  const items = [
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

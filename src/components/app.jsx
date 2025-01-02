import { useState } from 'preact/hooks';
import {
  Nav,
  Hero,
  About,
  Services,
  Contact,
  Footer,
} from '../layout/index.js';

import styles from '../assets/styles/App.module.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <div id='about' className={[styles.section, styles.section1].join(' ')}>
        <About />
      </div>
      <div
        id='services'
        className={[styles.section, styles.section2].join(' ')}
      >
        <Services />
      </div>
      <div id='contact' className={[styles.section, styles.section3].join(' ')}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

import { useState } from 'preact/hooks';
import { Nav } from './nav';
// import preactLogo from './assets/preact.svg';
// import viteLogo from '/vite.svg';
import styles from './App.module.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div style={'color: red'} id={styles.content}>
        hi
      </div>
    </>
  );
}

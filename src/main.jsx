import { render } from 'preact';
import './assets/styles/index.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/bebas-neue/400.css';
import { App } from './components/app.jsx';

render(<App />, document.getElementById('app'));

import './app.css'
import App from './lib/App.svelte'
import { theme } from './theme';

const target = document.getElementById('app');

// @ts-ignore
const app = new App({
    target,
});

for (const [key, value] of Object.entries(theme)) {
    target.style.setProperty('--' + key, value);
}

import './fb';

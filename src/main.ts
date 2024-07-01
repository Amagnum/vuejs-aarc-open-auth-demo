import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Aarc from '@aarc-dev/auth-widget-vuejs';
import '../node_modules/@aarc-dev/auth-widget-vuejs/dist/style.css';

const app = createApp(App);

Aarc.initAarcAuthKit(app);

app.mount('#app');

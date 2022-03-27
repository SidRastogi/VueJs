import { createApp } from 'vue';
import Vue3Material from 'vue3-material';
import routers from './routers';
import store from './store';
import App from './App.vue';
import apolloProvider from './apolloProvider';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

const app = createApp(App);

app.use(routers);
app.use(store);
app.use(apolloProvider);
app.use(Vue3Material);

app.mount('#app');

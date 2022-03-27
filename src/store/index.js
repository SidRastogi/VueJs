import { createStore } from 'vuex';
import machinesModule from './modules/machines.js';

const store = createStore({
  ...machinesModule,
});

export default store;

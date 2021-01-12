import Vue from 'vue';
import Bingo from './components/Bingo.vue';

Vue.component('bingo', Bingo);

(new Vue({})).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue";
import { initializeApp } from "firebase/app";

import gsap from 'gsap'

import './assets/style/main.scss';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(gsap);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJbmDP0s_OJOSI7l3u4a8Wp5TQU2mEOpE",
  authDomain: "vue-si.firebaseapp.com",
  databaseURL: "https://vue-si-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-si",
  storageBucket: "vue-si.appspot.com",
  messagingSenderId: "875488757911",
  appId: "1:875488757911:web:a6338616e34f962c8f81d2",
  measurementId: "G-XY3SLR677P"
};

// Initialize Firebase
initializeApp(firebaseConfig);

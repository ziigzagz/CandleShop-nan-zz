import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false
Vue.config.silent = true;

const config = {
    apiKey: "AIzaSyDhfmodZEz_HNsUH7P88f4EGh5rPvoxY90",
    authDomain: "my-project-2fb8a.firebaseapp.com",
    databaseURL: "https://my-project-2fb8a.firebaseio.com",
    projectId: "my-project-2fb8a",
    storageBucket: "my-project-2fb8a.appspot.com",
    messagingSenderId: "52088696948",
    appId: "1:52088696948:web:87e92c945a459446d8e121",
    measurementId: "G-VR5Y4G8C40"
};

firebase.initializeApp(config)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDipP9xoMGfAVpYDi0ssSHGBYVsApzodp4",
  authDomain: "vue-firebase-auth-3538c.firebaseapp.com",
  projectId: "vue-firebase-auth-3538c",
  storageBucket: "vue-firebase-auth-3538c.appspot.com",
  messagingSenderId: "430077241382",
  appId: "1:430077241382:web:155d3f326daa3572779ee7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

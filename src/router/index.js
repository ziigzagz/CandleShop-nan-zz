import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
Vue.use(VueRouter);
// function check(to, from, next) {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//       alert("No Logged /in");
//       next({
//         path: "/Login",
//       });
//     } else {
//       alert("Logged in");
//       next();
//     }
//   });
// }

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Passing",
    name: "Passing",
    component: () => import("../views/Passing.vue"),
  },
  {
    path: "/ProductEdit",
    name: "ProductEdit",
    component: () => import("../views/ProductEdit.vue"),
  },
  {
    path: "/Logout",
    name: "Logout",
    component: () => import("../views/Logout.vue"),
  },
  {
    path: "/Order",
    name: "Order",
    component: () => import("../views/Order.vue"),
  },
  {
    path: "/Payment",
    name: "Payment",
    // beforeEnter: check,
    component: () => import("../views/Payment.vue"),
  },
  {
    path: "/Manage",
    name: "Manage",
    component: () => import("../views/Manage.vue"),
  },
  {
    path: "/AddProduct",
    name: "AddProduct",
    component: () => import("../views/AddProduct.vue"),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/Forgetpass",
    name: "Forgetpass",
    component: () => import("../views/Forgetpass.vue"),
  },
  {
    path: "/InfoOrder",
    name: "InfoOrder",
    component: () => import("../views/InfoOrder.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
import Ticket from "../views/Ticket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () =>
  //   //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  //   component: About,
  // },
  {
    path: "/event/:id",
    name: "Event",
    component: Event,
  },
  {
    path: "/ticket/:id",
    name: "Ticket",
    component: Ticket,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Drinks from "../views/Drinks.vue";
import Cart from "../views/Cart.vue";
import OrderStatus from "../views/OrderStatus.vue";
import Snacks from "../views/Snacks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/drinks",
    name: "Drinks",
    component: Drinks
  },
  {
    path: "/orders",
    name: "Order Status",
    component: OrderStatus
  },
  {
    path: "/snacks",
    name: "Snacks",
    component: Snacks
  }
];

const router = new VueRouter({
  routes,
});

export default router;

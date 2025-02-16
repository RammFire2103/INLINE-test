import { createRouter, createWebHistory } from "vue-router";

import Description from "../pages/description.vue";
import Reviews from "../pages/Reviews.vue";
import FromWhere from "../pages/FromWhere.vue";

const routes = [
  {
    path: "/",
    name: "description",
    component: Description,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  },
  {
    path: "/fromWhere",
    name: "fromWhere",
    component: FromWhere,
  },
];

const router = createRouter({
  history: createWebHistory("/INLINE-test/"),
  routes,
});

export default router;

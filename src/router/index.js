import { createRouter, createWebHistory } from "vue-router";

// Импорт страниц
import Description from "../pages/description.vue";
import Reviews from "../pages/Reviews.vue";
import FromWhere from "../pages/FromWhere.vue";

// Настройка маршрутов
const routes = [
  {
    path: "/description",
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

// Создание экземпляра маршрутизатора
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

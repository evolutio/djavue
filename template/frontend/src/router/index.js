import { createRouter, createWebHistory } from "vue-router"
import accountsRoutes from "./accounts.routes"
import basicRoutes from "./basic.routes"
import tasksRoutes from "./tasks.routes"
import Page404View from "@/views/basic/Page404View.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...basicRoutes,
    ...accountsRoutes,
    ...tasksRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "page-not-found-404",
      component: Page404View,
    },
  ],
})

export default router

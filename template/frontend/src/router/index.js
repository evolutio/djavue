import { createRouter, createWebHistory } from "vue-router"
import accountsRoutes from "./accounts.routes"
import baseRoutes from "./base.routes"
import tasksRoutes from "./tasks.routes"
import Page404View from "@/views/base/Page404View.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...baseRoutes,
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

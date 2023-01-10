import { createRouter, createWebHistory } from "vue-router"
import accountsRoutes from "./accounts.routes"
import basicRoutes from "./basic.routes"
import tasksRoutes from "./tasks.routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...basicRoutes, ...accountsRoutes, ...tasksRoutes],
})

export default router

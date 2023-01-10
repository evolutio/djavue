// Composables
import EmptyLayout from "@/layouts/default/EmptyLayout.vue"
import HomeView from "@/views/basic/HomeView.vue"
import TestView from "@/views/basic/TestView.vue"

export default [
  {
    path: "/",
    component: EmptyLayout,
    children: [
      {
        path: "",
        name: "basic-home",
        component: HomeView,
      },
      {
        path: "test",
        name: "Test",
        component: TestView,
      },
    ],
  },
]

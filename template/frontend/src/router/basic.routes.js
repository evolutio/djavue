// Composables
import EmptyLayout from "@/layouts/default/EmptyLayout.vue"
import HomeView from "@/views/basic/HomeView.vue"
import GetStartedView from "@/views/basic/GetStartedView.vue"

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
        path: "getstarted",
        name: "basic-getstarted",
        component: GetStartedView,
      },
    ],
  },
]

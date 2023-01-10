// Composables
import EmptyLayout from "@/layouts/default/EmptyLayout.vue"
import LoginView from "@/views/accounts/LoginView.vue"

export default [
  {
    path: "/accounts",
    component: EmptyLayout,
    children: [
      {
        path: "login",
        name: "accounts-login",
        component: LoginView,
      },
      {
        path: "logout",
        name: "accounts-logout",
        component: LoginView,
      },
    ],
  },
]

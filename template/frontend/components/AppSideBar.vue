<template>
  <v-navigation-drawer
    v-model="drawerData"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact>
        <v-list-item-action>
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="user" :to="'/tasks/list'" router exact>
        <v-list-item-action>
          <v-icon> mdi-apps </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Tasks List'" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="user" :to="'/accounts/logout'" router exact>
        <v-list-item-action>
          <v-icon> mdi-apps </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Logout'" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-else :to="'/accounts/login'" router exact>
        <v-list-item-action>
          <v-icon> mdi-apps </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Login'" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
    clipped: {
      type: Boolean,
      required: true,
    },
    miniVariant: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
    },
  },
  data: () => {
    return {
      drawerData: false,
    }
  },
  watch: {
    drawer: function () {
      this.drawerData = !this.drawerData
    },
  },
}
</script>

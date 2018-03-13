<template>
  <v-app>
    <toolbar :state="layout"/>
    <sidenav-right :state="layout"/>
    <sidenav-left :state="layout"/>
    <sidenav-left-temp :state="layout"/>
    <sidenav-right-temp :state="layout"/>
    <v-content>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>
    <le-footer/>
  </v-app>
</template>

<script>
  import toolbar from '~/components/toolbar.vue'
  import sidenavLeft from '~/components/sidenav-left.vue'
  import sidenavRight from '~/components/sidenav-right.vue'
  import sidenavLeftTemp from '~/components/sidenav-left-temp.vue'
  import sidenavRightTemp from '~/components/sidenav-right-temp.vue'
  import footer from '~/components/footer.vue'
  export default {
    components: {
      toolbar,
      sidenavLeft,
      sidenavRight,
      sidenavLeftTemp,
      sidenavRightTemp,
      leFooter: footer
    },
    data: () => ({
      layout: {
        drawer: true,
        drawerRight: true,
        right: null,
        left: null
      },
    })
  }
</script>
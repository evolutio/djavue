<template>
  <main>
    <!-- <v-container fluid class="main-content"> -->
      <v-layout row wrap>
        <v-flex xs12 sm8 md4 offset-sm2 class="px-2" :class="{'pt-5': $vuetify.breakpoint.mdAndUp, 'pt-3': $vuetify.breakpoint.smAndDown}">
          <h3>A tecnologia evolui.</h3>
          <h5>A gente te ajuda a evoluir junto.</h5>
        </v-flex>
        <v-flex xs12 md4 v-if="$vuetify.breakpoint.mdAndUp">
          <p class="text-sm-right"><img src="/images/minecraft.png" ></p>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 d-flex>
          <v-card id="course-list">
            <v-toolbar class="light-blue">
              <v-toolbar-title>Cursos</v-toolbar-title>
            </v-toolbar>
            <v-list three-line subheader>
                <v-list-tile v-for="course in courses" :key="course.code" :router="true" :to="{name: 'curso-code', params:{code: course.code}}">
                  <v-list-tile-avatar>
                    <img v-if="course.icon" :src="course.icon">
                    <v-icon v-if="!course.icon" class="grey white--text">folder</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>\{{ course.name }}, com <strong>\{{ course.teachers }}</strong></v-list-tile-title>
                    <v-list-tile-sub-title>\{{ course.description }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    <!-- </v-container> -->
  </main>
</template>

<script>

import AppApi from '~apijs'

export default {
  asyncData(ctx) {
    return AppApi.list_courses().then((response) => {
        return {courses: response.data}
    });
  },
  data(){
    return {
      courses: [],
    }
  },
  methods: {
  },
  head(){
    return {
      title: "{{name}}",
      meta: [
        {property: 'og:url', content: 'http://{{name}}.com'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'O titulo do link no facebook'},
        {property: 'og:description', content: 'A descrição do link no facebook.'},
        {property: 'og:image', content: 'http://imagens.com/imagem_pro_facebook.png'},
      ]
    }
  },
}
</script>

<style scoped>
  /*.title {
    padding-left: 20px;
  }
  .main-content{
    max-width: 900px
  }*/
</style>

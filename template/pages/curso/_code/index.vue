<template>
  <main>
    <v-container fluid class="main-content">
      <v-card>
        <v-card-media :src="bannersrc" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">\{{course.name}}</h3>
            <div>\{{course.description}}</div>
          </div>
        </v-card-title>
      </v-card>

      <v-list two-line subheader>
        <v-list-tile v-for="content in course.contents" :key="content.id">
          <v-list-tile-avatar>
            <v-icon v-if="content.kind == 'youtube' || content.kind == 'vimeo'" class="grey white--text">ondemand_video</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="video-link" @click="open_content(content, $event)">\{{content.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-container>

    <YoutubeDialog></YoutubeDialog>

  </main>
</template>

<script>

import AppApi from '~apijs'
import Vuex from 'vuex'
import YoutubeDialog from '~/components/YoutubeDialog.vue'
import Toasts from '~/components/Toasts.js'

export default {
  head(){
    return {
      title: "{{name}} - "+this.course.name,
      meta: [
        {property: 'og:url', content: 'http://{{name}}.com/curso/'+this.course.code},
        {property: 'og:type', content: 'video.tv_show'},
        {property: 'og:title', content: this.course.name},
        {property: 'og:description', content: this.course.description},
        {property: 'og:image', content: 'http://{{name}}.com'+this.bannersrc},
      ]
    }
  },
  asyncData (context) {
    return AppApi.get_course(context.params.code).then((response) => {
      return {course: response.data}
    });
  },
  data () {
    return {
      active: 'material',
      dialog_precompra: false,
      dialog_poscompra: false,
      loading_pagseguro: false,
    };
  },
  computed: Object.assign({
    bannersrc(){
      return this.course.banner || '/images/desert.jpg';
    }
  }, Vuex.mapGetters([
    'logged_user',
  ])),
  methods: {
    open_content(content, evt){
      if(content.kind == 'youtube'){
        YoutubeDialog.data().open(content);
      }
      evt.stopPropagation();
    },
  },
  components: {YoutubeDialog},
}
</script>

<style scoped >
  .main-content{
    max-width: 900px
  }
  .tabs-bar{
    background-color: white;
  }
  .video-link:hover{
    cursor: pointer;
    text-decoration: underline;
  }

</style>
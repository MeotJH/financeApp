<template>
  <v-app>
  <v-navigation-drawer app>
    <Left/>
  </v-navigation-drawer>

  <v-app-bar app>
    {{ titleName }}
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
    footer
  </v-footer>
</v-app>
</template>

<script>
import Left from './views/layout/Left.vue'


export default {
  components: { Left },
  name: 'App',
  data() {
    return {
      routes: this.$store.state,
      titleName: '',
    }
  },
  computed:{

  },
  created(){
    this.findMenuName()
  },
  updated(){
    this.findMenuName()
  },
  methods:{
    findMenuName(){
      for(let item in this.routes){
        if(this.routes[item].menuPath == this.$route.path){
          this.titleName = this.routes[item].title
        }
      }
    },
  }
};
</script>

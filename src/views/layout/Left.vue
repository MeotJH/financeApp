<template>
    <div>
    <v-system-bar></v-system-bar>
    <v-list>
    <v-list-item>
        <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
    </v-list-item>

    <v-list-item link>
        <v-list-item-content>
        <v-list-item-title class="text-h6">
            MeotJH
        </v-list-item-title>
        <v-list-item-subtitle>Meot@Meot.com</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
        <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
    </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav>
        <v-list-item-group>
            <v-list-item v-for="{nameKor,path} in routes" v-bind:key="nameKor" v-on:click="goPage(path)">
                {{nameKor}}
            </v-list-item>
        </v-list-item-group>
    </v-list>
    </div>
</template>

<script>

export default {
  name: 'leftMenu',
  data() {
    return {
      routes: this.$store.state.menu
    }
  },
  methods:{
      //메뉴클릭했을때 해당경로로 보내는 메소드
      goPage(menuPath){
          const router = this.$router

          if(this.$route.path == menuPath ){
            return
          } 
          
          router.push(menuPath)
      },
  },
  mounted(){
      console.info('this.$store.state',this.$store.state);
      console.info('routes',this.routes)
  }
};
</script>

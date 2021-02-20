<template>
  <v-app-bar
      dark
      flat
      fixed
      class="app"
      :color="appColor"
      style="background: linear-gradient(180.74deg, rgba(255, 255, 255, 0.2) -163.83%, rgba(0, 0, 0, 0.3) 59%)"



  >
    <v-app-bar-nav-icon  class="hidden-md-and-up mt-4" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
        v-model="drawer"
        app
        disable-resize-watcher
        hide-overlay
        color="white"

    >
      <div style="margin-top: 42px; margin-left: 16px; margin-bottom: 90px">
        <span @mouseover="drawer=false" class="black--text">Close X</span>
      </div>
      <slot name="drawer-content"></slot>

    </v-navigation-drawer>

    <div class="mt-6 mb-5 d-flex justify-sm-space-around" style="width: 100%">
    <img style="cursor: pointer" src="@/assets/v-logo.png" @click="goToHomePage" alt="" height="30" />
      <slot name="header-content"></slot>

    </div>
  </v-app-bar>
</template>

<script>
export default {
name: "Header",
  data: () => ({
    drawer: false,
    group: null,
    scroll:null
  }),
  props:{
  appColor:{
    type: String,
    default: 'transparent'
  }
  },

  watch: {
    group () {
      this.drawer = false
    },
  },
  methods:{
   goToHomePage(){
     if(this.$router.currentRoute.path !== '/'){
       this.$router.push('/')
     }
   }
  }

}
</script>

<style scoped>
.action-text{
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #FDFDFD;
}
.get-started{
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 10px;
  color: #FF7E1D;
}
.app{
  /*background:#FFB303;*/
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
}
.explore-list .v-list-item{
  border-bottom:1px solid #E5EEFA;
  padding:3px;
  margin:2px;
  color: black;
}
.v-list-item-title{
  color: #2B1C1C;
}
.btn-scroll{
  margin-left: 17px !important;
}

</style>
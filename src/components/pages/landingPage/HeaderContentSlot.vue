<template>
  <div class="justify-lg-space-between" :style="[!$vuetify.breakpoint.mobile ?{display:'flex'}:{display: 'none'}]" style="width:52%" >
    <div class="d-flex justify-space-between" style="width: 640px">
    <v-btn class="action-text mt-1" :color="textColor" small text to="/">
      Home
    </v-btn>
    <v-btn class="action-text mt-1" :color="textColor"  small text>
      About
    </v-btn>
    <v-btn class="action-text mt-1" :color="textColor"  small text>
      Service
    </v-btn>
    <v-btn class="action-text mt-1" :color="textColor"  small text>
      Plans
    </v-btn>

    <v-btn class="action-text btn-scroll" :color="textColor"  outlined>
      Blog
    </v-btn>
    </div>

    <slot name="get-started-btn"></slot>

  </div>
</template>

<script>
export default {
name: "HeaderContentSlot",
  props:{
    textColor:{
      type:String,
      default:"#FDFDFD"
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

</style>
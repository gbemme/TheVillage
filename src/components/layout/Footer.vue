<template>
<div class="footer-wrapper">
  <div class=" d-flex justify-space-around align-center white--text pb-8" :style="[!$vuetify.breakpoint.mobile?{marginTop:'105px'}:{marginTop: '30px',flexDirection:'column',textAlign:'center'}]">
    <div>
      <img src="@/assets/v-logo.png" alt="">
    </div>
    <div style="" :style="[!$vuetify.breakpoint.mobile?{marginTop:'40px'}:{marginTop: 0}]">
      <h3  style="padding-top: 40px;margin-left: 15px">
      Quick Links
      </h3>
      <br>
      <div class="d-flex justify-center align-center" style="width: 60px">
        <div>
          <v-btn text color="white">Home</v-btn>
          <v-btn text color="white">About</v-btn>
          <v-btn text color="white">Plans</v-btn>
        </div>
        <div>
          <v-btn text color="white">Services</v-btn>
          <v-btn text color="white">Blog</v-btn>
          <v-btn text color="white">Contact</v-btn>
        </div>

      </div>
    </div>
      <div style="margin-top: 10px">
        <h3  style="">Office Location</h3>
        <br>
        <p>371, Borno way, Spencer Street Alagomeji-Yaba, Lagos</p>
      </div>
      <div style="margin-top: 40px">
        <div class="d-flex">
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>

        </div>
        <br>
        <div class="d-flex">
        <v-icon color="white" class="ml-6 mr-3">mdi-phone</v-icon>
          <p class="mt-3">0828 859 6665</p>
        </div>
        <div class="d-flex">
        <v-icon color="white" class="ml-6 mr-3">mdi-phone</v-icon>
          <p class="mt-3">0828 859 6665</p>
        </div>
      </div>


  </div>

  <div class="text-center  pb-8">
    <v-divider dark class="white--text"></v-divider>
    <br>
    <span class="white--text">Copyright 2021 | The Village</span>
  </div>

</div>
</template>

<script>
export default {
name: "Footer",
  data(){
  return{
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }
  }
}
</script>

<style scoped>
.footer-wrapper{
  background: #111111;
  margin-top: -60px;
  padding-top: 30px;
  padding-bottom: 5px;
}
</style>
<template>
<div  :style="[!$vuetify.breakpoint.mobile?{display:'flex'}:{display: 'block', width:'100%'}]">
  <div class="img-div" :style="[!$vuetify.breakpoint.mobile?{display:'block'}:{display: 'none'}]">
    <div class="white--text">
      <a href="/"><img src="@/assets/v-logo.png" alt=""></a>
    </div>
    <div class=" mx-auto mt-7" style="width: 400px" >
      <h3 class="welcome">Join us at the village</h3>
      <br>
      <p class="welcome-txt">Foster a community that bolsters creative and innovative partnerships.</p>
    </div>

    <div class=" mx-auto  white--text" style="padding-top: 15rem !important; width: 400px">Copyright @{{ new Date().getFullYear() }} | Village NG</div>


  </div>
  <div class=" justify-space-between pa-4"  :style="[!$vuetify.breakpoint.mobile?{display:'none'}:{display: 'flex'}]">
    <div class="">
      <a href="/"><img src="@/assets/v-logo-color.png" alt=""></a>
    </div>
    <v-btn depressed color="#FF6D00" class="white--text mt-3">Contact Us</v-btn>
  </div>
  <div class="mx-auto my-auto"  :style="[!$vuetify.breakpoint.mobile?{padding:0,width:'420px'}:{padding: '60px !important',paddingTop:'10rem !important'}]">
    <v-form>
      <div class="d-flex">
      <v-text-field
          outlined
          color="#FF6D00"
          label="First Name"
          class="mr-3"
      >

      </v-text-field>
      <v-text-field
          outlined
          color="#FF6D00"
          label="Last Name"
      >

      </v-text-field>
      </div>
      <v-text-field
          outlined
          color="#FF6D00"
          label="email"
      >

      </v-text-field>
      <v-text-field
          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (value = !value)"
          :type="value ? 'password' : 'text'"
          outlined
          color="#FF6D00"
          label="password"
      >

      </v-text-field>

      <v-btn class="white--text text-capitalize mb-3" x-large color="#FF6D00" block depressed>Create Account</v-btn>

      <div class="d-flex justify-space-between no-account">
        <span class="mt-2">Have an Account ?</span>
        <v-btn text color="#FF6D00" class="text-capitalize font-weight-bold" to="/login">Login here</v-btn>

      </div>
    </v-form>
  </div>

</div>
</template>

<script>
export default {
name: "Register",
  data(){
  return{
    value: true,
  }
  }
}
</script>

<style scoped>
.img-div{
  background-image: url('~@/assets/new-pattern.png') !important;
  border-radius: 0px;
  height: 100vh;
  width: 652px;
  padding: 40px;
}
.welcome{
  margin-top: 13rem;
  /*width: 330px;*/
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 70px;
  color: #FFFFFF;
}
.welcome-txt{
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  width: 310px;
  color: #FFFFFF;

}
.forgot{
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #FF6D00;
}
.no-account{
  font-family: Work Sans;
  font-style: normal;
  /*font-weight: 600;*/
  font-size: 17px;
  line-height: 20px;
}
</style>
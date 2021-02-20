<template>
<div class="d-flex">
  <div class="img-div">
    <div class="white--text">
      <img src="@/assets/v-logo.png" alt="">
    </div>
    <div class="my-auto mx-auto d-flex flex-column justify-center align-center">
      <h3>Welcome Back</h3>
      <p>Foster a community that bolsters creative and innovative partnerships.</p>
    </div>


  </div>
  <div class="mx-auto my-auto">
    <v-form>
      <v-text-field
          outlined
          color="orange"
          label="email"
      >

      </v-text-field>
      <v-text-field
          outlined
          color="orange"
          label="password"
      >

      </v-text-field>
    </v-form>
  </div>

</div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>
.img-div{
  background-image: url('~@/assets/new-pattern.png') !important;
  border-radius: 0px;
  height: 100vh;
  width: 652px;
}

</style>
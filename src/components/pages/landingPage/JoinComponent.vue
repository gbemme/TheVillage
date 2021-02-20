<template>
<div class="join-wrapper mx-auto">
  <div class="d-flex">
    <div class="mx-auto my-auto pl-7 join-text">
      <h3>Join us at Village</h3>
      <p>Our focus is on motivation and innovation to enable Community building for Freelancers, Startups, and Enterprises</p>
      <br>
      <v-btn depressed color="white" to="/login" class="black--text" large>
        Get Started
      </v-btn>
    </div>
    <div>
      <img alt="" src="@/assets/join-image.png">
    </div>

  </div>

</div>
</template>

<script>
export default {
name: "JoinComponent"
}
</script>

<style scoped>
.join-wrapper{
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
  margin: 0 auto;
  background: #FF6D00;
  border-radius: 20px;
  width: 900px;
  position: relative;
}
.join-text h3{
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  width: 419px;

  color: #FFFFFF;
}
.join-text p{
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
width: 569px;
  color: #FFFFFF;

}

</style>
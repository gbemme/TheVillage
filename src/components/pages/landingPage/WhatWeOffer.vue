<template>
  <div class="offer-wrapper">

    <div class="text-center offer-heading-text">
      <h3>What We Offer</h3>
      <p>Here’s what village has to offer to you</p>
    </div>
    <div class="justify-space-around" :style="[!$vuetify.breakpoint.mobile? {display:'flex', flexDirection:'row',paddingBottom:'20px'}:{flexDirection:'column !important',display: 'flex',padding:'20px'}]">
      <div class="text-left offer-sub-text">
        <h4>Conducive Work Environment</h4>
        <br>
        <p>Well-aired & excellently furnished office</p>
        <p>Fast & unlimited internet access</p>
        <p>Uninterrupted power supply</p>
      </div>
      <div class="text-left offer-sub-text">
        <h4>Conducive Work Environment</h4>
        <br>
        <p>Well-aired & excellently furnished office</p>
        <p>Fast & unlimited internet access</p>
        <p>Uninterrupted power supply</p>
      </div>
      <div class="text-left  offer-sub-text">
        <h4>Conducive Work Environment</h4>
        <br>
        <p>Well-aired & excellently furnished office</p>
        <p>Fast & unlimited internet access</p>
        <p>Uninterrupted power supply</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
name: "WhatWeOffer"
}
</script>

<style scoped>
.offer-wrapper{
  background: #FF6D00;
  margin: 0 auto;
  padding-bottom: 40px;
}
.offer-heading-text h3{
  font-family: Work Sans,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;
  padding-bottom: 10px;
  padding-top: 70px !important;
}
.offer-heading-text p{
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding-bottom: 40px !important;

  color: #FFFFFF;

}
.offer-sub-text h4{
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.offer-sub-text p{
  font-family: Font Awesome,serif ;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

</style>
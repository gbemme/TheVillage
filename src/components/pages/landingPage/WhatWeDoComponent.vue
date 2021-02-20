<template>
  <div class="wrapper" :style="[!$vuetify.breakpoint.mobile? {marginLeft:'150px'}:{padding: 'auto'}]">
    <div class="d-flex justify-space-between">
      <img sizes="(max-width: 501px) 100vw, 501px"
             src="@/assets/withshadeddots.png"
             :srcset="require('@/assets/withshadeddots.png') + ' 200w, '
               + require('@/assets/withshadeddots.png') + ' 378w, '
               + require('@/assets/withshadeddots.png') + ' 501w ' "
             alt="">

      <div class="img-wrapper justify-center align-center" :style="[!$vuetify.breakpoint.mobile? {display:'flex', flexDirection:'row'}:{flexDirection:'column !important',display: 'flex'}]">
        <img sizes="(max-width: 383px) 100vw, 383px"
             src="@/assets/image-pattern.png"
             :srcset="require('@/assets/image-pattern.png') + ' 200w, '
               + require('@/assets/image-pattern.png') + ' 383w, ' "
             alt="">
        <div  class="text-Ontop  my-auto"  :style="[!$vuetify.breakpoint.mobile? {marginLeft:'-120px'}:{padding:'18px'}]">
          <h3>What We Do </h3>
          <p>The Village is a coworking space served with motivation and innovation that is
            focused on Community building for freelancers, startups, and enterprises,
            who have a strong desire for productivity.</p>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "WhatWeDoComponent"
}
</script>

<style scoped>
.wrapper{
  /*margin-left: 150px;*/
  margin-top: 65px;
  margin-bottom: 40px;
}
.img-wrapper{
  position: relative;
  /*display: inline-block;*/
}
.text-Ontop{
  position: absolute;
}
</style>
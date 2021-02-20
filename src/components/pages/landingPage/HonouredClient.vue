<template>
  <div class="pt-10" style="background: rgba(128, 128, 128, 0.05)">
    <div class="text-center">
      <h3>
        Honoured Clients
      </h3>
      <p>Organizations that trust the Village to deliver</p>

    </div>
    <div class="mt-4">
      <VueSlickCarousel v-bind="settings">
        <div v-for="(img,i) in imgList" :key="i">
          <img :src="img" alt=""  class="ml-3"/>
        </div>
      </VueSlickCarousel>
    </div>

  </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
name: "HonouredClient",
  components:{VueSlickCarousel},
  data(){
    return{
      imgList: [
        require('@/assets/atom.png'),
        require('@/assets/almpo.png'),
        require('@/assets/money.png'),
        require('@/assets/social.png')
      ],
      currentImg: 0,
      listImg:[],
      settings:{
        "infinite": true,
        "speed": 700,
        "autoplay":true,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      }
    }
  },
}
</script>

<style scoped>

</style>
<template>
    <div class="pb-5">
      <div class="text-center testimonials-text">
        <h3>
          Testimonials
        </h3>
        <p>Let’s hear from our customers</p>

      </div>
      <div class="d-flex mt-5 justify-center align-center" :style="[!$vuetify.breakpoint.mobile? {marginLeft:'50px'}:{paddingLeft:'8px',paddingRight:'8px'}]">
        <v-carousel continuous hide-delimiter-background cycle progress-color="red" progress :show-arrows="false"  dark>
          <v-carousel-item
              style=""
              v-for="(item,i) in items"
              :key="i"
          >
            <img   sizes="(max-width: 1151px) 100vw, 1151px"
                 :src="item.src"
                 :srcset="item.src + ' 200w, '
               +item.src + ' 621w, '
                + item.src + ' 909w, '
                 + item.src + ' 1151w, ' "
                 alt="">
<!--            <div class="d-flex justify-center align-center mx-auto" style="height: 100%;"  :style="[!$vuetify.breakpoint.mobile? {width:'650px'}:{width: '100%'}]">-->
<!--              <div class="mx-auto my-auto text-center text-content">-->
<!--                <h3>Conducive Workspace for your team.</h3>-->
<!--                <br>-->
<!--                <p>We serve as a platform for hosting events relevant to professionals and entrepreneurs by partnering with leading organizations in Nigeria.</p>-->
<!--                <br>-->
<!--                <v-btn color="white" large depressed class="black&#45;&#45;text">-->
<!--                  Get Started-->
<!--                </v-btn>-->

<!--              </div>-->
<!--            </div>-->
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
</template>

<script>
export default {
name: "Testimonials",
  data () {
    return {
      items: [
        {
          src: require('@/assets/sam.png'),
        },
        {
          src: require('@/assets/sam.png'),
        },
        {
          src: require('@/assets/sam.png'),
        },
        {
          src: require('@/assets/sam.png'),
        },
      ],
    }
  },
  computed:{
    getCarouselDot(){
      return require('@/assets/dot.png')
    }
  }
}
</script>

<style scoped>
.testimonials-text h3{
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  padding-top: 40px;

  color: #000000;
}

.testimonials-text p{
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  color: #000000;

}
</style>
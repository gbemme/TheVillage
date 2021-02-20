<template>
<div>
  <Header>
    <template #header-content>
      <HeaderContentSlot>
        <template #get-started-btn>
          <v-btn depressed color="white" class="black--text" large>
            Contact Us
          </v-btn>
        </template>
        </HeaderContentSlot>
    </template>
  </Header>
  <v-carousel hide-delimiters height="760px" dark>
    <v-carousel-item
        style=""
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
    >
      <div class="d-flex justify-center align-center mx-auto" style="height: 100%;"  :style="[!$vuetify.breakpoint.mobile? {width:'650px'}:{width: '100%'}]">
        <div class="mx-auto my-auto text-center text-content">
          <h3>Conducive Workspace for your team.</h3>
          <br>
          <p>We serve as a platform for hosting events relevant to professionals and entrepreneurs by partnering with leading organizations in Nigeria.</p>
          <br>
          <v-btn color="white" large depressed class="black--text" to="/login">
            Get Started
          </v-btn>

        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
import Header from "@/components/layout/Header";
import HeaderContentSlot from "@/components/pages/HeaderContentSlot";
export default {
name: "HeaderWrapper",
  components: {HeaderContentSlot, Header},
  data () {
    return {
      items: [
        {
          src: require('@/assets/Surface Book - 10.png'),
        },
        {
          src: require('@/assets/Surface Book - 1.png'),
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  }
}
</script>

<style scoped>
.text-content h3{
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  text-align: center;

  color: #FFFFFF;

}
.text-content p{
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}

</style>
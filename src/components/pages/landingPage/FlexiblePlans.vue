<template>
    <div class="plan-wrapper" :style="[!$vuetify.breakpoint.mobile? {height:'800px'}:{height: 'auto'}]">
      <div class="text-center plan-heading-text">
        <h3>
          Flexible Plans
        </h3>
        <p>
          Choose a plan that works best for you and your team.
        </p>

      </div>
      <br>
      <div class="d-flex justify-center align-center" :style="[!$vuetify.breakpoint.mobile? {display:'flex', flexDirection:'row'}:{flexDirection:'column !important',display: 'flex'}]">
        <div class="mx-3">
          <v-card class="pa-5 mb-3 plans-text" width="320px" style="background: #FFFFFF;border-radius: 12px;"  @mouseover="hoverOver('1')" @mouseout="hoverOut('1')" :class="animateClass['1']">
            <v-card-title>
              <h3>FREELANCE</h3>
            </v-card-title>
            <v-card-subtitle>
              <h6>₦3,000/Day</h6>
            </v-card-subtitle>
            <v-card-text>
              <p>Uninterrupted Power Supply</p>
              <p> Unlimited Internet</p>
              <p> Unlimited Internet</p>
              <p> Unlimited Internet</p>
            </v-card-text>
            <v-card-actions>
              <v-btn block outlined color="" large class="black--text btn-style">Choose Plan</v-btn>
            </v-card-actions>

          </v-card>
        </div>

        <div class="mx-3">
          <v-card class="pa-5 mb-3 plans-text" width="320px" style="background: #FFFFFF;border-radius: 12px;"  @mouseover="hoverOver('2')" @mouseout="hoverOut('2')" :class="animateClass['2']">
            <v-card-title>
              <h3>FREELANCE</h3>
            </v-card-title>
            <v-card-subtitle>
              <h6>₦3,000/Day</h6>
            </v-card-subtitle>

            <v-card-text>
              <p>Uninterrupted Power Supply</p>
              <p> Unlimited Internet</p>
              <p> Unlimited Internet</p>
              <p> Unlimited Internet</p>
            </v-card-text>
            <v-card-actions>
              <v-btn block large outlined color="" class="black--text btn-style">Choose Plan</v-btn>
            </v-card-actions>

          </v-card>
        </div>
        <div class="mx-3">
          <v-card class="pa-5 mb-3 plans-text" width="320px" style="background: #FFFFFF;border-radius: 12px;"  @mouseover="hoverOver('3')" @mouseout="hoverOut('3')" :class="animateClass['3']">
            <v-card-title>
              <h3>FREELANCE</h3>
            </v-card-title>
            <v-card-subtitle>
              <h6>₦3,000/Day</h6>
            </v-card-subtitle>

            <v-card-text>
              <p>Uninterrupted Power Supply</p>
              <p> Unlimited Internet</p>
              <p> Unlimited Internet</p>
              <p> Unlimited Internet</p>
            </v-card-text>
            <v-card-actions >
              <v-btn block large outlined color="" class="black--text btn-style">Choose Plan</v-btn>
            </v-card-actions>

          </v-card>
        </div>

    </div>
      <div class="mt-8 d-flex justify-center align-center">
        <v-btn depressed class="white--text" large color="#008000">View all Plans</v-btn>
      </div>


  </div>
</template>

<script>
export default {
name: "FlexiblePlans",
  data(){
    return{
      animateClass: {
        "1": [],
        "2": [],
        "3": [],
        "4": []
      },
    }
  },
  methods: {
    hoverOver: function (key) {
      console.log('over')
      this.animateClass[key] = ['animate__animated ', 'animate__pulse', 'hover','white--text']
    },
    hoverOut: function (key) {
      this.animateClass[key] = []
    },


  }
}
</script>

<style scoped>
.plan-wrapper{
  background: rgba(255, 215, 0, 0.1);
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 60px;
  height: 800px;
}
.plan-heading-text h3{
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
}
.plan-heading-text p{
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;
}
.btn-style{
  border: 1.09516px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 8px;
}
.hover{
  /*background-color: red !important;*/
  background-color: #FF6D00 !important;
  box-shadow: 0px 4.8378px 69.1114px rgba(128, 128, 128, 0.15)!important;
  border-radius: 12px !important;
  height: 450px !important;
  color: white;
}
.plans-text h3{
 font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16.6821px;
  line-height: 22px;

  color: #000000;
}
.plans-text h6{
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 23.8316px;
  line-height: 31px;

  color: #000000;

}
.plans-text p{
  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 33px;
  letter-spacing: 0.02em;
  color: #008000;

}

</style>
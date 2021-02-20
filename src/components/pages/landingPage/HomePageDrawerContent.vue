<template>
<div>
  <v-list
      nav
      dense
  >
    <v-list-item-group
        class="d-flex flex-column align-center"

    >

      <v-list-item>
        <v-btn class="action-text mt-1"  :color="btnColor" small text>
          Home
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn class="action-text mt-1" :color="btnColor" small text>
          About
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn class="action-text mt-1"  :color="btnColor" small text>
          Service
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn class="action-text mt-1"  :color="btnColor" small text>
          Plans
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn class=" btn-scroll"   :color="btnColor" outlined>
          Blog
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn depressed  :color="btnColor" @click="goto('')" class="white--text btn-scroll p-5">
          Contact Us
        </v-btn>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</div>
</template>

<script>
export default {
name: "HomePageDrawerContent",
  props:{
    btnColor:{
      type:String,
      default:'black'
    }
  },
  methods:{
    goto(path){
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.action-text{
  font-weight: 600;
  font-size: 22px;
  line-height: 120%;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
}
.btn-scroll{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 16px;
  border-radius: 4px;
  width: 244px !important;
  margin-bottom: 10px;
}

</style>
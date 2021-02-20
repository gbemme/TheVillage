<template>
<div>
  <HeaderWrapper></HeaderWrapper>
  <WhatWeDoComponent/>
  <WhatWeOffer/>
  <FlexiblePlans/>
  <Testimonials/>
  <HonouredClient/>
  <JoinComponent/>
  <Footer/>
</div>
</template>

<script>
import HeaderWrapper from "@/components/wrapper/HeaderWrapper";
import WhatWeDoComponent from "@/components/pages/landingPage/WhatWeDoComponent";
import WhatWeOffer from "@/components/pages/landingPage/WhatWeOffer";
import FlexiblePlans from "@/components/pages/landingPage/FlexiblePlans";
import Testimonials from "@/components/pages/landingPage/Testimonials";
import HonouredClient from "@/components/pages/landingPage/HonouredClient";
import JoinComponent from "@/components/pages/landingPage/JoinComponent";
import Footer from "@/components/layout/Footer";
export default {
name: "HomePageWrapper",
  components: {
    Footer,
    JoinComponent, HonouredClient, Testimonials, FlexiblePlans, WhatWeOffer, WhatWeDoComponent, HeaderWrapper}
}
</script>

<style scoped>

</style>
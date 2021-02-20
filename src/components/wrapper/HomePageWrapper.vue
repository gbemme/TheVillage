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
import WhatWeDoComponent from "@/components/pages/WhatWeDoComponent";
import WhatWeOffer from "@/components/pages/WhatWeOffer";
import FlexiblePlans from "@/components/pages/FlexiblePlans";
import Testimonials from "@/components/pages/Testimonials";
import HonouredClient from "@/components/pages/HonouredClient";
import JoinComponent from "@/components/pages/JoinComponent";
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
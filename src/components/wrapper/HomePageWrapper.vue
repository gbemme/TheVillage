<template>
<div>
  <HeaderWrapper></HeaderWrapper>
  <WhatWeDoComponent/>
  <WhatWeOffer/>
  <FlexiblePlans/>
</div>
</template>

<script>
import HeaderWrapper from "@/components/wrapper/HeaderWrapper";
import WhatWeDoComponent from "@/components/pages/WhatWeDoComponent";
import WhatWeOffer from "@/components/pages/WhatWeOffer";
import FlexiblePlans from "@/components/pages/FlexiblePlans";
export default {
name: "HomePageWrapper",
  components: {FlexiblePlans, WhatWeOffer, WhatWeDoComponent, HeaderWrapper}
}
</script>

<style scoped>

</style>
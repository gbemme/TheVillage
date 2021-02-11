<template>
<div>
  <HeaderWrapper></HeaderWrapper>
  <WhatWeDoComponent/>
</div>
</template>

<script>
import HeaderWrapper from "@/components/wrapper/HeaderWrapper";
import WhatWeDoComponent from "@/components/pages/WhatWeDoComponent";
export default {
name: "HomePageWrapper",
  components: {WhatWeDoComponent, HeaderWrapper}
}
</script>

<style scoped>

</style>
<template>
  <doc-section>
    <template #title>Monkeys - Advanced</template>
    <template #introduction>Deep dive into the more advanced aspects of monkeys</template>
    <sub-section>
      <template #title>Overview</template>
      <template #content>Understanding the deeper mechanics of monkeys, expanding on basic knowledge</template>
    </sub-section>
    <sub-section>
      <template #title>Monkey Customization</template>
      <template #content>Guide on how to customize your monkeys with enhanced functionalities and configurations</template>
    </sub-section>
  </doc-section>
</template>

<script>
import SubSection from "@/components/SubSection.vue";
import DocSection from "@/components/DocSection.vue";

export default {
  name: 'MonkeysAdvanced',
  components: { DocSection, SubSection }
}
</script>

<style scoped>

</style>
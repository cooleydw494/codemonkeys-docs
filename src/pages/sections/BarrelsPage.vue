<template>
  <doc-section>
    <template #title>Barrels</template>
    <sub-section>
      <template #title>Overview</template>
      <template #content>
        Barrels in CodeMonkeys are a powerful way to bundle several components together to form a larger functionality. These are reusable and can vastly simplify the code structure.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Composing Barrels</template>
      <template #content>
        Barrels can be composed of various entities like Monkeys, Functions, and Commands. To compose a Barrel, you first need to define all these entities and then you can simply bundle them together using the 'compose' utility provided by the CodeMonkeys framework.
      </template>
    </sub-section>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue'
import Subsection from '@/components/SubSection.vue'
import SubSection from "@/components/SubSection.vue";

export default {
  name: 'BarrelsPage',
  components: {
    DocSection, SubSection
  },
}
</script>

<style scoped>
</style>
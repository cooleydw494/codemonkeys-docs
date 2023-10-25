<template>
  <section>
    <doc-section>
      <template #title>CodeMonkeys Explained</template>
      <template #introduction>
        In this section, we explain the origination of CodeMonkeys, progress so far, and our goals.
      </template>

      <sub-section>
        <template #title>Origination</template>
        <template #content>
          (Content about the origination of CodeMonkeys)
        </template>
      </sub-section>

      <sub-section>
        <template #title>Progress So Far</template>
        <template #content>
          (Content about the progress so far of CodeMonkeys)
        </template>
      </sub-section>

      <sub-section>
        <template #title>Goals</template>
        <template #content>
          (Content about the goals of CodeMonkeys)
        </template>
      </sub-section>

    </doc-section>
  </section>
</template>

<script>
import DocSection from '../../components/DocSection.vue';
import SubSection from "@/components/SubSection.vue";

export default {
  name: 'WhatIs',
  components: { DocSection, SubSection }
};
</script>

<style scoped>
</style>
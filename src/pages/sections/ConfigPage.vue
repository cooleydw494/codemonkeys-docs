<template>
  <doc-section>
    <template #title>Configuration</template>
    <template #introduction>
      Learn how to configure your monkeys, environment variables and themes for effective CodeMonkey usage.
    </template>
    <sub-section>
      <template #title>Monkeys</template>
      <template #content>
        Brief overview of how to configure your monkeys.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Env</template>
      <template #content>
        Brief overview of how to configure the environment variables.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Theme</template>
      <template #content>
        Brief overview of how to configure the theme for CodeMonkeys.
      </template>
    </sub-section>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue'
import SubSection from '@/components/SubSection.vue'

export default {
  name: 'ConfigPage',
  components: { DocSection, SubSection}
}
</script>

<style scoped>
section {
  margin: 1em;
  padding: 1em;
}
</style>
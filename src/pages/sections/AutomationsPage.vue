<template>
  <doc-section>
    <template #title> Automations </template>
    <template #introduction> Learn about creating and using automations in CodeMonkeys. </template>
    <sub-section>
      <template #title> Overview </template>
      <template #content> Automations in CodeMonkeys allows developers to automate repetitive tasks within the framework. This section provides an overview of how to use these automations. </template>
    </sub-section>
    <sub-section>
      <template #title> Default Automation </template>
      <template #content> CodeMonkeys comes with several default automations that can help you speed up your development process. This section covers the default automations included and how you can use them. </template>
    </sub-section>
  </doc-section>
</template>

<script>
import SubSection from "@/components/SubSection.vue";
import DocSection from "@/components/DocSection.vue";

export default {
  name: 'AutomationsPage',
  components: {DocSection, SubSection}
}
</script>

<style scoped>
</style>
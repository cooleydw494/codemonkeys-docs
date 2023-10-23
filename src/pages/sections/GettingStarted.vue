<template>
  <doc-section>
    <template #title>Getting Started</template>
    <template #introduction>A quick guide to get you up and running with CodeMonkeys</template>
    <sub-section>
      <template #title>Overview</template>
      <template #content>
        <p>Welcome to the CodeMonkeys documentation! This guide will help you get started, covering the basics of installing and setting up CodeMonkeys for the first time.</p>
      </template>
    </sub-section>
    <sub-section>
      <template #title>Installation</template>
      <template #content>
        <p>If you have trouble with the installation process, please refer to our FAQs or reach out to our community for support.</p>
        <p>To install CodeMonkeys, you'll first need to make sure you have NodeJS installed on your computer. After that, you can install CodeMonkeys using npm with the command <code>npm install -g CodeMonkeys</code>.</p>
      </template>
    </sub-section>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue';
import SubSection from '@/components/SubSection.vue';

export default {
  name: 'GettingStarted',
  components: {
    DocSection, SubSection
  }
};
</script>

<style scoped>
</style>
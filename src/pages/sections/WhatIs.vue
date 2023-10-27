<template>
  <doc-section>
    <template #title>What is CodeMonkeys? 🐒</template>
    <template #introduction>
      In this section, we explain the origination of CodeMonkeys, progress so far, and our goals.
    </template>

    <markdown-content markdown="
## Overview 🌐

CodeMonkeys gives devs control over their automated GPT logic. The current focus is working on codebases but it is lovingly designed to enable automations of all kinds. This framework aims to use AI effectively, while being reliable, predictable, and tailored to your needs. There is a strong focus on only involving AI at crucial areas of strength, and using good old-fashioned code for everything else.

## Alpha Status (10-10-2023) 🚧
CodeMonkeys will soon have a stable Alpha release focused on establishing the framework's architecture/concepts to a point of relative stability, and providing a flexible, immediately useful default Automation that is instructional in how it utilizes the framework.
"/>

    <sub-section>
      <template #title>Current Framework Brief</template>
      <template #content>
        <markdown-content markdown="A framework for automating GPT-powered tasks, from simple to complex. Sphinx docs [here](https://cooleydw494.github.io/codemonkeys)." />
      </template>
    </sub-section>

    <sub-section>
      <template #title>Goals</template>
      <template #content>
        (Content about the goals of CodeMonkeys)
      </template>
    </sub-section>

  </doc-section>
</template>

<script>
import DocSection from '../../components/DocSection.vue';
import SubSection from "@/components/SubSection.vue";
import MarkdownContent from "@/components/MarkdownContent.vue";

export default {
  name: 'WhatIs',
  components: {MarkdownContent, DocSection, SubSection },
};
</script>

<style scoped>
</style>
<template>
  <doc-section>
    <template #title>Contribution Guide</template>
    <template #introduction>
      Detailed guidelines on how to contribute to the CodeMonkeys project.
    </template>
    <sub-section>
      <template #title>Overview</template>
      <template #content>
        Contribution to this project is always welcome. This document provides essential guidelines for contributing to CodeMonkeys.
      </template>
    </sub-section>
    <subsection-comp>
      <template #title>Contributing</template>
      <template #content>
        The contributing process involves forking the project, making your updates or additions, creating a pull request for review. More details will be provided in this section.
      </template>
    </subsection-comp>
  </doc-section>
</template>

<script>
    import DocSection from '@/components/DocSection.vue'
    import SubsectionComp from '@/components/SubSection.vue'
    import SubSection from "@/components/SubSection.vue";

    export default {
        name: 'ContributionPage',
        components: {
          SubSection,
            DocSection,
            SubsectionComp
        }
    }
</script>

<style scoped>
    section {
        padding: 1em;
    }
</style>
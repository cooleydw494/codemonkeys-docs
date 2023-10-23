<template>
  <doc-section>
    <template #title>CodeMonkeys CLI</template>
    <template #introduction>
      The CodeMonkeys CLI is a command line interface utility made for easing development process in CodeMonkeys projects. This section will give you an overview and guide you through the different entities, actions, and commands linked with the CLI.
    </template>
    <sub-section>
      <template #title>Overview</template>
      <template #content>
        The CodeMonkeys CLI allows you to initialize new projects, generate boilerplate code for different aspects of a project, manage your development environment and much more.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Entities</template>
      <template #content>
        Entities in CodeMonkeys CLI are the different aspects you can interact with. For instance projects, components, configs etc. are entities.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Actions</template>
      <template #content>
        Actions are performed on entities. Examples of actions are Generate, Add, Remove etc.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Commands</template>
      <template #content>
        Commands are combination of entities and actions in a particular syntax. And those commands are executed in the command line interface.
      </template>
    </sub-section>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue'
import SubSection from "@/components/SubSection.vue";

export default {
  name: 'MonkCli',
  components: {SubSection, DocSection }
}
</script>

<style scoped>
</style>
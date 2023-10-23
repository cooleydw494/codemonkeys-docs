<template>
  <doc-section>
    <template #title>Overview</template>
    <template #introduction>
      <p>Our command structure is integral to the functionality and usability of CodeMonkeys. This section provides an overview of commands, how they are structured, and how you can use them in your own projects.</p>
    </template>

    <sub-section>
      <template #title>Command Structure</template>
      <template #content>
        <p>CodeMonkeys commands are designed to be flexible, enabling you to execute a wide range of functions and queries. The structure of a command includes the following primary sections:</p>
        <ul>
          <li>Command name</li>
          <li>Arguments (optional)</li>
          <li>Options/Flags (optional)</li>
        </ul>
      </template>
    </sub-section>

    <sub-section>
      <template #title>Framework Commands</template>
      <template #content>
        <p>CodeMonkeys comes with several default commands that can help you speed up your development process. This section covers the default commands included and how you can use them.</p>
        <p>Commands are executed in your terminal and can be used in multiple ways, depending on your needs. Here are a few examples:</p>
        <pre><code>monk create entity
  monk create entity --name MyEntity
  monk create entity --name MyEntity --fields name:string,age:number</code></pre>
      </template>
    </sub-section>

  </doc-section>
</template>

<script>
import SubSection from "@/components/SubSection.vue";
import DocSection from "@/components/DocSection.vue";

export default {
  name: 'CommandsPage',
  components: {DocSection, SubSection}
}
</script>

<style scoped>
</style>
<template>
  <doc-section>
    <template #title>Understanding Function Calling</template>
    <template #introduction>
      Discover the world of function calling with CodeMonkeys. Learn what is function calling, how to use functions and other practical examples.
    </template>
    <sub-section>
      <template #title>What is Function Calling?</template>
      <template #content>
        Function calling is the process by which a function's instructions are executed. When you define a function, the function's code isn't executed right away. Instead, the function is "called" at some point, letting the function perform its task.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Funcs</template>
      <template #content>
        In CodeMonkeys, funcs represents a set of reusable code that can be execute anywhere within your codebase. It helps to modularize recurring code, reduce redundancy, and manage code more efficiently.
      </template>
    </sub-section>
    <sub-section>
      <template #title>Func Usage</template>
      <template #content>
        To use a Func in CodeMonkeys, simply import it in your code where you need to use it and call the function according to its definition.
      </template>
    </sub-section>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue';
import SubSection from "@/components/SubSection.vue";

export default {
  name: 'FunctionCalling',
  components: { SubSection, DocSection }
}
</script>
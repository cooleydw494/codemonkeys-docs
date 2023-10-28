<template>
  <doc-section>
    <markdown-content markdown="
# Getting Started 🚀

First, install the framework with pip:
```
pip install codemonkeys
```

Then, use the `monk-new` command to create a new project:
```
monk-new [project_name]
```
This will scaffold a new project with the given name. _Note: CodeMonkeys treats your project as a package, so your project name should respect package name requirements (snake_case)._

`cd` into your project and run `monk` or `monk help`. If scaffolded successfully this will print a general help screen.

## Project Structure 📁
CodeMonkeys' project structure aims to allow you to build/configure/run your automations in a simple, powerful way. You're encouraged to get creative with your Automation/Command/Barrel `run()` methods, custom config properties, and utilize any additional modules/classes/dirs you create. However, the base project scaffolding is assumed by the Monk CLI and built-in config management. Don't fight these paradigms unless you're prepared to replace them.


* `/commands`: Command instances, runnable via `monk <command>`. Also handles bash/bat scripts.
* `/automations`: Automation instances, runnable via `monk -a <automation>`.
* `/barrels`: Custom or extended Barrel classes used to orchestrate multiple Automation/Monkeys.
* `/monkeys`: Custom or extended Monkey classes used to precisely configure Automation behavior.
* `/builders`: Custom or extended Builder classes for re-usable automation logic.
* `/funcs`: Custom or extended Func classes for GPT function-calling.
* `codemonkeys.defs`: A core module that dynamically exposes important PATHs for your project (ex: COMMANDS_PATH).
"></markdown-content>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue';
import SubSection from '@/components/SubSection.vue';
import MarkdownContent from "@/components/MarkdownContent.vue";

export default {
  name: 'GettingStarted',
  components: {
    MarkdownContent,
    DocSection
  }
};
</script>

<style scoped>
</style>
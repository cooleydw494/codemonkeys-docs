<template>
  <doc-section>
    <template #title>Theme - Advanced</template>
    <template #introduction>
      This section provides a detailed overview of the advanced theme section of the CodeMonkeys framework.
    </template>
    <sub-section>
      <template #title> Overview</template>
      <template #content>
        <p>The advanced theme section focuses on providing comprehensive and intricate details about the theming capabilities and functionalities available in the CodeMonkeys framework. This section covers the unique features availabe for theme customization and the functions specifically designed for theme manipulation.</p>
      </template>
    </sub-section>
    <sub-section>
      <template #title>Theme Functions</template>
      <template #content>
        <p>Our advanced-theme provides a broad range of functions to enhance customization. These functions help tweak various attributes and elements within the theme, such as colors, typography, layout, and other UI components. The following are some of the notable theme functions:</p>
      <ul>
        <li><strong>setPrimaryColor:</strong> To change the primary color of the theme</li>
        <li><strong>setSecondaryColor:</strong> To alter the secondary color of the theme</li>
        <li><strong>customizeFont:</strong> To modify the font style of the theme</li>
        <li><strong>adjustLayout:</strong> To modify the theme's layout</li>
        <li><strong>updateUIComponent:</strong> To tailor any UI component of the theme</li>
      </ul>
      <p>Note: For extensive details about each function, you can refer to the 'Funcs' section under 'Funcs.vue'.</p>
      </template>
    </sub-section>
  </doc-section>
</template>

<script>
import DocSection from "@/components/DocSection.vue";
import SubSection from "@/components/SubSection.vue";

export default {
  name: 'ThemeAdvanced',
  components: { SubSection, DocSection },
}
</script>

<style scoped>
</style>
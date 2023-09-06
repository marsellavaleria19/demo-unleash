<template>
  <h1 v-if="toggle">FiturB</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      toggle: this.$unleash.isEnabled('NEW-FEATURE')
     }
  }
}
</script>

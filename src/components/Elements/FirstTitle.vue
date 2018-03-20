<template>
  <div>
    <div class="first-title"><slot></slot></div>
    <div style="color: #b2bec3" v-if="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  props: ['subtitle']
}
</script>

<style>
.first-title {
  font-size: 35px;
  margin-top: 20px;
}
</style>

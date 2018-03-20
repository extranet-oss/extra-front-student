<template>
  <div>
    <menu-bar></menu-bar>
    <div class="container">
      <first-title subtitle="Ceci est un sous titre">PAGE B</first-title>
      ceci est un test
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/Elements/Menu'
import FirstTitle from '@/components/Elements/FirstTitle'
export default {
  name: 'pageB',
  components: {
    MenuBar,
    FirstTitle
  }
}
</script>

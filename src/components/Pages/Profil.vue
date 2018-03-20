<template>
  <div>
    <menu-bar></menu-bar>
    <div class="container">
      <first-title>Page du profil</first-title>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/Elements/Menu'
import firstTitle from '@/components/Elements/FirstTitle'
export default {
  components: {
    MenuBar,
    firstTitle
  }
}
</script>

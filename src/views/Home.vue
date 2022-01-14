<template>
  <div class="home columns mt-4">
    <Menu class="column"/>
    <TotalBox class="column"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import TotalBox from '@/components/TotalBox.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    TotalBox
  }
}
</script>

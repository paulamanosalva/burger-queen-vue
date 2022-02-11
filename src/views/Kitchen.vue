<template>
  <div class="home columns mt-4">
    <Orders/>
  </div>
</template>

<script>
// @ is an alias to /src
import Orders from '@/components/Orders.vue'

export default {
  name: 'Kitchen',
  components: {
    Orders
  }
}
</script>

<template>
    <div class="panel has-background-light">
      <div class="panel-heading">Resumen del pedido</div>
      <div v-if="($store.state.order).length > 0"></div>
      <div class="panel-block" v-for="(item, index) in getOrder" :key="index">
        <p class="mx-2">{{ item.name }}</p>
        <p class="mx-2">$ {{ item.price }}</p>
        <p class="mx-2">x {{ item.quantity }}</p>
      </div>
      <div class="panel-block has-text-weight-bold">Total: $ {{ totalSum }}</div>
      <div class="panel-block" >Enviar pedido</div>
    </div>
</template>

<script>
import { addData } from './src/firestore.js'
export default {
  name: 'TotalBox',
  computed: {
    getOrder () {
      return this.$store.state.order
    },
    totalSum () {
      let total = 0
      this.getOrder.forEach(element => {
        total += element.quantity * element.price
      })
      return total
    }

  }
}

</script>

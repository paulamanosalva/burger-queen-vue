<template>
  <div class="panel has-background-light">
    <div class="panel-heading">Resumen del pedido</div>
    <div v-if="$store.state.order.length > 0"></div>
    <div class="panel-block" v-for="(item, index) in getOrder" :key="index">
      <p class="mx-2">{{ item.name }}</p>
      <p class="mx-2">$ {{ item.price }}</p>
      <p class="mx-2">x {{ item.quantity }}</p>
    </div>
    <div class="panel-block has-text-weight-bold">Total: $ {{ totalSum }}</div>
    <button class="button" @click="saveData">boton de pruebas</button>
    {{ $store.state.fbData }}
  </div>
</template>

<script>
import { readData } from '@/firestore.js'
export default {

  name: 'Orders',
  computed: {
    fbData () {
      return this.$store.state.fbData
    }
  },
  data () {
    return {
      name: '',
      order: [],
      total: 0
    }
  },
  methods: {
    getData (data) {
      this.$store.commit('saveData', data)
    }
  },
  created () {
    readData('orders', this.getData)
  }
}
</script>

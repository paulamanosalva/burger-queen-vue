<template>
  <div class="panel has-background-light" v-if="!loading">
    <div class="panel-heading">Resumen del pedido</div>
    <div v-if="$store.state.order.length > 0"></div>
    <div class="panel-block" v-for="(item, index) in $store.state.fbData" :key="index">
      <p class="mx-2">{{ item.element.data.name }}</p>
      <div v-for="(el, Orderindex) in item.element.data.order" :key="Orderindex">
      <p class="mx-2">{{ el.name }}</p>
      <p class="mx-2">$ {{ el.price }}</p>
      <p class="mx-2">x {{ el.quantity }}</p>
      </div>
    </div>
    <div class="panel-block has-text-weight-bold">Total: $ {{ totalSum }}</div>
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
      loading: true
    }
  },
  methods: {
    getData (data) {
      this.$store.commit('saveData', data)
    }
  },
  created () {
    readData('orders', this.getData)
    this.loading = false
  }
}
</script>

<template>
  <div class="panel has-background-light">
    <div class="panel-heading">Resumen de los pedidos</div>
    <div v-if="$store.state.order.length > 0"></div>
    <div v-for="(order, index) in fbData" :key="index">
      <div class="panel-heading">
        {{ order.data.name }}
        <button class="minus button has-background-danger ml-5 has-text-weight-bold" @click="deleteOrder(order.id)"> - </button>
      </div>
      <div v-for="(el, index) in order.data.order" :key="index" class="panel-block">
        <p class="mx-2">{{ el.name }}</p>
        <p class="mx-2">$ {{ el.price }}</p>
        <p class="mx-2">x {{ el.quantity }}</p>
      </div>
      <div class="panel-block has-text-weight-bold">Total: $ {{ order.data.total }}</div>
    </div>
  </div>
</template>

<script>
import { readData, deleteDocData } from '@/firestore.js'
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
    },
    deleteOrder (id) {
      if (confirm('¡Vas a borrar el pedido! ¿Deseas continuar?')) deleteDocData(id)
    }
  },
  created () {
    readData('orders', this.getData)
    this.loading = false
  }
}
</script>

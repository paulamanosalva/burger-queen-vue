<template>
  <div class="panel has-background-light">
    <div class="panel-heading">

      <button @click="clickBreakfast" id="breakfast-btn" class="button">Desayuno</button>
      <button @click="clickLunch" id="lunch-btn" class="button">Almuerzo</button>
      {{ $store.state.test }}
    </div>

    <div v-if="breakfast">
      <div v-for="(item, index) in showBreakfast" :key="index" class="panel-block">
        <p class="mx-2">{{ item.name }}</p>
        <p class="mx-2">$ {{ item.price }}</p>
        <button class="minus button has-background-danger ml-5 has-text-weight-bold" @click="clickRemove(item.id)"> - </button>
        <p class="mx-4">{{ item.quantity }}</p>
        <button class="plus button has-background-success has-text-weight-bold" @click="clickAdd(item)"> + </button>
      </div>
    </div>
    <div v-if="lunch">
      <div v-for="(item, index) in showLunch" :key="index" class="panel-block">
        <p class="mx-2">{{ item.name }}</p>
        <p class="mx-2">{{ item.price }}</p>
        <button class="minus button has-background-danger ml-5 has-text-weight-bold"  @click="clickRemove(item.id)">-</button>
        <p class="mx-4">{{ item.quantity }}</p>
        <button class="plus button has-background-success has-text-weight-bold" @click="clickAdd(item)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    showBreakfast () {
      return this.$store.state.food.filter(
        (food) => food.category === 'Breakfast'
      )
    },
    showLunch () {
      return this.$store.state.food.filter((food) => food.category === 'lunch')
    }
  },
  data () {
    return {
      breakfast: true,
      lunch: false
    }
  },
  methods: {
    clickBreakfast () {
      this.breakfast = true
      this.lunch = false
    },
    clickLunch () {
      this.lunch = true
      this.breakfast = false
    },
    clickAdd (item) {
      this.$store.commit('addQuantity', item)
    },
    clickRemove (id) {
      this.$store.commit('deleteItem', id)
    }
  }
}
</script>

<style scoped>
</style>

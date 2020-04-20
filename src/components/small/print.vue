<template>
  <div>
      <div>
    <!-- SOURCE -->
    <div id="printMe">
      <h1>Print me!</h1>
    </div>
    <!-- OUTPUT -->
    <button @click="print"></button>
  </div>
  </div>
</template>

<script>
export default {
    name: 'print',
    
  data () {
    return {
      output: null
    }
  },
  methods: {
    print () {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    }
  }
}
</script>

<style>

</style>
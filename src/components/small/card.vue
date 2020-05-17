<template>
<div class="bg">
  <div class="induk-card">
 <div class="card" v-for="card in menu.result" :key="card.id">
  <img :src="card.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{card.title}}</h5>
    <p class="card-text">{{card.price}}</p>
  </div>
</div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'card',

    computed: {
      menu(){
        return this.$store.state.menu
      },
    },
    mounted(){
      this.$store.dispatch('getApi');
    },
}
</script>

<style>
    .card{
        width: 20%;
        margin: 5px 5px;
        top: 80px;
        margin-top: 20px;
        margin-bottom: 30px;
        cursor: pointer;
        border-style: none;
      }

    .induk-card{
      width: 105%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;  
    }

    .card-body{
      height: 40px;
      background-color: rgba(190, 195, 202, 0.3);
    }

    .card-img-top{
      width: 100%;
      height: 55%;
    }

    .card-text{
      font-weight: bold;
    }
</style>
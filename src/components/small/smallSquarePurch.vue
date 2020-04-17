<template>
  <div class="buttonPurch">
      <div class="smallSquarePurch">
      <div class="checkout">Checkout
    </div> 
    </div>
  </div>
</template>

<script>
export default {
    name: 'smallSquarePurch',
}
</script>

<style scoped>
    .buttonPurch{
        margin-top: 0px;
        text-align: center;
        /* position: relative; */
        background: red;
    }

    .smallSquarePurch{
    position: relative;
    width: 280px;
    height: 61px;
    background: #57CAD5;
    margin-right: auto;
    margin-left: auto;
    }

    .checkout{
    width: auto;
    height: 100%;
    font-size: 25px;
    color: #FFFFFF;
    background: #57CAD5;
    margin-right: auto;
    margin-left: auto;
    line-height: 60px ;
    }


</style>
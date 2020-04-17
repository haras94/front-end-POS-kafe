<template>
<div>
  <div class="contoh">
      <div v-for="items in 3" :key="items.id" class="quantity-buttons-added">
            <img class="pictchoose1" src="../../assets/img/blackforest.png">
            <div>
            <input type="button" class="minus" value="-">
            <input id="theInput" type="text"  class="input-text-qty-text" title="Qty" value="1" min="0" step="1">
            <input id="plus" type="button" class="plus" value="+">
      </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'quantityButton',
}
</script>

<style scoped>
.contoh{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
    
}
  /* Button */

   .quantity-buttons-added{
    position: relative;
    width: 100%;
    height: 55px;
    left: 140px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
   }
   
    .input-text-qty-text{
    position: relative;
    width: 10%;
    height: 35px;
    left: 40px;
    top: -40px;
    background: #FFFFFF;
    border: 1px solid #82DE3A;
    box-sizing: border-box;
    padding-left: 13px;
   }

     .minus{
    position: relative;
    width: 10%;
    height: 35px;
    top: -40px;
    background: rgba(130, 222, 58, 0.2);
    border: 1px solid #82DE3A;
    box-sizing: border-box;
    font-size: 30px;
    /* padding-bottom: 20px; */
    color: #82DE3A;
    cursor: pointer;
   }

   .plus{
    position: relative;
    width: 40px;
    height: 35px;
    top: -40px;
    left: 80px;
    background: rgba(130, 222, 58, 0.2);
    border: 1px solid #82DE3A;
    box-sizing: border-box;
    font-size: 30px;
    /* padding-bottom: 20px; */
    color: #82DE3A;
    cursor: pointer;
   }

   /* pictchoose */

   .pictchoose1{
    position: relative;
    width: 100px;
    height: 100px;
    left: -120px;
    top: -103px;
    border-radius: 5px;
   }
</style>
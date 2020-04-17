<template>
  <div class="contoh">
      <div class="gambarChoose"><img class="pictChoose1" src="../../assets/img/blackforest.png"></div>
      <div class="gabungan">
          <div class="judulChoose">Blackforest</div>
          <div class="gabungan1">
              <div class="quantity">
                <input type="button" class="buttonSquare1" value="-">
                <input id="theInput" type="text"  class="buttonSquare2" title="Qty" value="1" min="0" step="1">
                <input id="plus" type="button" class="buttonSquare3" value="+">
              </div>
              <div class="harga">Rp. 20.000</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'quantityButton'
}
</script>

<style>
.pictChoose1{
    width: 80px;
}
    .contoh{
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .gabungan{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
    }

    .gabungan1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 6px;
    }

    .quantity{
    position: relative;
    width: 100px;
    height: 80px;
    top: 16px;
    }

   .buttonSquare1{
    width: 20px;
    position: relative;
    height: 25px;
    font-size: 12px;
    line-height: 20px;
    color: #82DE3A;
    top: 2px;
   }

   .buttonSquare2{
    width: 20px;
    position: relative;
    height: 25px;
    background: #FFFFFF;
    border: 1px solid #82DE3A;
    box-sizing: border-box;
    top: 3.8px;
    color: #82DE3A;
    line-height: 20px;
    padding-left: 5px;
   }

   .buttonSquare3{
    width: 20px;
    position: relative;
    height: 25px;
    font-size: 12px;
    line-height: 20px;
    color: #82DE3A;
    top: 2px;
   }

   .harga{
    position: relative;
    width: 147px;
    height: 47px;
    top: 20px;
    font-size: 15px;
    color: #000000;
    right: -50px;
   }

   .judulChoose{
    position: relative;
    width: auto;
    height: 45px;
    font-size: 15px;
    line-height: 33px;
    color: #000000;
    margin-top: -10px;
   }
</style>
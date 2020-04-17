<template>
  <div>
      <div class="rightbarNew">
        <quantityButton v-for="items in 3" :key="items.id"/>
        <div class="textTPurch">
          <div class="textTotal">Total: </div>
          <div class="hargaTotal">Rp.105.000*</div>
          <div class="textPajak">*Belum Termasuk ppn</div>
          <modal/>
          <smallSquarePurch/>
          <smallCancellPurch/>
        </div>
      </div>
  </div>
</template>

<script>
import quantityButton from '../small/quantityButton.vue'
import modal from '../small/modal.vue'
import smallSquarePurch from '../small/smallSquarePurch.vue'
import smallCancellPurch from '../small/smallCancelPurch.vue'
export default {
    name: 'rightbarNew',
    components: {
        quantityButton,
        modal,
        smallSquarePurch,
        smallCancellPurch

    }
}
</script>

<style scoped>
    .rightbarNew{
    position: absolute;
    width: 350px;
    height: 800px;
    background: #FFFFFF;
    border: 1px solid #CECECE;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    right: 0px;
    top: 80px;
    }

    .textTotal{
    position: relative;
    width: 178px;
    height: 58px;
    right: -2px;
    top: 5px;
    font-size: 15px;
    line-height: 31px;
    color: #000000;
    }

    .hargaTotal{
    position: relative;
    width: 80px;
    height: 38px;
    right: -210px;
    top: -50px;
    font-size: 15px;
    color: #000000;
    }

    .textPajak{
    position: relative;
    width: 223px;
    height: 30px;
    right: 7px;
    top: -65px;
    font-size: 15px;
    line-height: 26px;
    color: #000000;
    }

</style>
<template>
  <div>
      <div class="rightbarNew">
      <div class="indukpurch">
        <quantityButton v-for="items in 5" :key="items.id"/></div>
        <div class="textTPurch">
          <div class="textTotal">Total: </div>
          <div class="hargaTotal">Rp.100.000*</div>
          <div class="textPajak">*Belum Termasuk ppn</div>
          <smallSquarePurch/>
          <smallCancellPurch/>
        </div>
      </div>
  </div>
</template>

<script>
import quantityButton from '../small/quantityButton.vue'
import smallSquarePurch from '../small/smallSquarePurch.vue'
import smallCancellPurch from '../small/smallCancelPurch.vue'
export default {
    name: 'rightbarNew',
    components: {
        quantityButton,
        smallSquarePurch,
        smallCancellPurch,

    },
    methods: {
    open() {
      document.querySelector('.modal-add').classList.toggle('modal');
    },
    close() {
      document.querySelector('.modal-add').classList.toggle('modal');
      },
    },
}
</script>

<style scoped>
    .rightbarNew{
    position: fixed;
    /* width: 350px; */
    height: 800px;
    background: #FFFFFF;
    border: 1px solid #CECECE;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    right: 0px;
    top: 60px;
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

    .indukpurch{
      height: 180px;
      overflow-y: scroll;
      margin-top: 80px;
      /* width: 300px; */
    }

</style>
<template>
  <div class="buttonPurch">
      <button class="smallSquarePurch" @click="$emit('addModal')" data-toggle="modal" data-target=".bd-example-modal-lg">
      <div class="checkout">Checkout
      </div>
      </button>

        <div class="modal fade bd-example-modal-lg" id="modall" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
        <h5 class="modal-title" id="exampleModalCenterTitle">Checkout <span class="pojok-kanan">Receipt no: #010410919</span></h5>
        <div class="cashier">Cashier : Pevita Pearce</div>
        <br>
        <br>
        <br>
        <br>
        <div class="purch-item"> Coffee Latte 1x <span class="price-item-purch">Rp. 15.000</span></div>
        <br>
        <div class="purch-item1"> Coffee Latte 1x <span class="price-item-purch1">Rp. 15.000</span></div>
        <br>
        <div class="purch-item2"> Coffee Latte 1x <span class="price-item-purch2">Rp. 15.000</span></div>
        <br>
        <div class="purch-item3"> Ppn 10% <span class="price-item-purch3">Rp. 10.500</span></div>
        <br>
        <div class="total"> Total: <span class="total-purch">Rp. 115.500</span></div>
        <br>
        <div class="payment-cash"> Payment: Cash </div>
        <br>
        

        
        <div>
        <div class="print-button">
        <button type="button" class="btn-btn-secondary"><div class="print-text">Print</div></button></div>
        <div>Or</div>
        <button type="button" class="btn-btn-primary"><div class="send-text">Send Email</div></button></div>
      </div>
      </div>
      </div>
      </div> 
</template>

<script>
export default {
    name: 'smallSquarePurch',

    methods: {
    open() {
      document.querySelector('.modal-add').classList.toggle('modal');
    },
    },
}
</script>

<style scoped>
    .buttonPurch{
        margin-top: 0px;
        text-align: center;
        /* position: relative; */
    }

    .smallSquarePurch{
    position: relative;
    width: 280px;
    height: 61px;
    background: #57CAD5;
    margin-right: auto;
    margin-left: auto;
    top: 0;
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

    /* Modal */

    .modal-title{
      position: relative;
      left: -200px;
    }

    .pojok-kanan{
      position: relative;
      right: -400px;
    }

    .cashier{
      position: relative;
      left: -275px;
    }

    .purch-item{
      position: relative;
      left: -261px;
    }

    .price-item-purch{
      position: relative;
      right: -485px;
    }

    .purch-item1{
      position: relative;
      left: -261px;
    }

    .price-item-purch1{
      position: relative;
      right: -485px;
    }

    .purch-item2{
      position: relative;
      left: -261px;
    }

    .price-item-purch2{
      position: relative;
      right: -485px;
    }

    .purch-item3{
      position: relative;
      left: -281px;
    }

    .price-item-purch3{
      position: relative;
      right: -527px;
    }

     .total{
      position: relative;
      right: -250px;
    }

    .total-purch{
      position: relative;
      right: -12px;
    }

    .payment-cash{
      position: relative;
      left: -300px;
    }

    /* button modal */

    .btn-btn-secondary{
    position: relative;
    width: 643px;
    height: 78px;
    background: #F24F8A;
    border-radius: 10px;   
    }

    .print-text{
    position: relative;
    width: 340px;
    height: 44px;
    left: 150px;
    font-size: 35px;
    line-height: 46px;
    color: #FFFFFF;
    }

    .btn-btn-primary{
    position: relative;
    width: 643px;
    height: 78px;
    background: #57CAD5;
    border-radius: 10px;
    margin-bottom: 30px;
    }

    .send-text{
    position: relative;
    width: 340px;
    height: 44px;
    left: 150px;
    font-size: 35px;
    line-height: 46px;
    color: #FFFFFF;
    }

     #modall{
      z-index: 99;
      position: fixed;
    }

    .modal-content{
      z-index: 100;
    } 
</style>
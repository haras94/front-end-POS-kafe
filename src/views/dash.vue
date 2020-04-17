<template>
  <div>
      <div class="navbar">
        <button id="openNav"><img class="burger"
        src="../../src/assets/img/menu (1).png"></button>

        <div class="textnav"><p>Food Items</p></div>
        
        <div>
          <img class="glass" src="../assets/img/magnifying-glass.png">
        </div><div class="cart"><p>Cart <span>0</span></p>
        </div></div>

        <div class="sidebar">
            <img class="fork" src="../assets/img/fork.png">
            <img class="clipboard" src="../assets/img/clipboard.png">
            <img class="add" src="../assets/img/add.png">
        </div>

        <div class="bgCard">
            <div class="row">
            <div class="col-md-4">
            <card/>
           </div>

          <div class="col-md-4">
            <card/>
          </div>

          <div class="col-md-4">
            <card/>
          </div>
        </div>
        </div>
        <div><rightbarNew/></div>

        <!-- <div class="rightbar">
            <img class="food-and-restaurant" src="../assets/img/food-and-restaurant.png">
            <p class="CIE">Your Cart Is Empty</p>
            <p class="addalert">Please add some items from the menu</p>
        </div> -->
  </div>
</template>

<script>
import card from '../components/small/card.vue'
import rightbarNew from '../components/small/sideBarRight.vue'

export default {
    name: 'dash',
    components: {
        card,
        rightbarNew,
      }
}
</script>

<style scoped>
    .navbar{
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0px;
    z-index: 1;
    }

    .burger{
    position: absolute;
    width: 35.35px;
    height: 35px;
    left: 31.31px;
    top: 34px;
    }

    .textnav{
    position: absolute;
    width: 278.78px;
    height: 31px;
    left: 404.03px;
    top: 34px;
    font-size: 30px;
    line-height: 39px;
    color: #000000;
    }

    .glass{
    position: absolute;
    width: auto;
    height: 35px;
    right: 520px;
    top: 34px;
    }

    .sidebar{
    position: absolute;
    width: 109px;
    height: 700px;
    left: 0px;
    top: 100px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .fork{
    position: absolute;
    width: 44.04px;
    height: 40.61px;
    left: 28.63px;
    top: 60px;
    }

    .clipboard{
    position: absolute;
    width: 55.05px;
    height: 50.76px;
    left: 25.32px;
    top: 170px;
    }

    .add{
    position: absolute;
    width: 55.05px;
    height: 50.76px;
    left: 25.32px;
    top: 285px;
    }

    .rightbar{
    position: relative;
    width: 150px;
    height: 600px;
    background: #FFFFFF;
    border: 1px solid #CECECE;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: right;
    background: red;
    }

    .cart p span{
     background: #57CAD5;
     padding-left: 5px;
     padding-right: 5px;
     border-radius: 70%;
     width: 2px;
     height: 2px;
     color: white;
    }

    .cart p{
    position: absolute;
    width: 125px;
    height: 50px;
    top: 40px;
    font-size: 25px;
    line-height: 33px;
    right: 150px;
    color: #000000;
    }

    .food-and-restaurant{
    position: relative;
    width: auto;
    height: 200px;
    left: 27px;
    }

   .CIE{
    position: relative;
    width: auto;
    height: 60px;
    font-size: 30px;
    margin-left: 75px;
    top: -40px;
   }

   .addalert{
    position: relative;
    width: auto;
    height: 118px;
    left: 40px; 
    top: -60px;
    font-size: 20px;
    /* line-height: 26px; */
    color: #CECECE;
   }

    /* card */

    .bgCard{
      width: 800px;
      margin-left: 155px;
      margin-top: 20px;
    }

</style>
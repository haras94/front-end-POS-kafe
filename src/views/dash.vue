<template>
  <div class="bgc">
      <div class="navbar">
        <a id="imageDivLink" href="javascript:toggle5('contentDivImg', 'imageDivLink');"><img class="burger"
        src="../../src/assets/img/menu (1).png"></a>

        <div class="textnav"><p>Food Items</p></div>
        <div>
          <img class="glass" src="../assets/img/magnifying-glass.png">
        </div>
        <button><div class="cart"><p>Cart <span>5</span></p>
        </div></button>
        </div>

        <div class="sidebar" id="contentDivImg" style="display: block;">
           <button> <img class="fork" src="../assets/img/fork.png">
           <router-link to="/history"> <img class="clipboard" src="../assets/img/clipboard.png"></router-link></button>
            <div><button><img class="add" src="../assets/img/add.png"></button>
            </div>
        </div>
        <div class="bgCard">
            <card/>
        </div>
        <!-- <div>
          <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav></div> -->
        <div><rightbarNew/></div>

        <!-- <div class="rightbar">
            <img class="food-and-restaurant" src="../assets/img/food-and-restaurant.png">
            <p class="CIE">Your Cart Is Empty</p>
            <p class="addalert">Please add some items from the menu</p>
        </div> -->
  </div>
</template>

<script type="text/javascript">
import card from '../components/small/card.vue';
import rightbarNew from '../components/small/sideBarRight.vue';
// import print from '../components/small/print.vue';

export default {
    name: 'dash',
   components: {
        card,
        rightbarNew,
        // print,
      },

      methods: {
    open() {
      document.querySelector('.modal').classList.toggle('modal1');
    },

},
}
</script>

<style scoped>
    .bgc{
      background-color: rgba(190, 195, 202, 0.3);;
      height: 1800px;
    }

    .navbar{
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0px;
    z-index: 1;
    top: 0px;
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
    cursor: pointer;
    }

    .sidebar{
    position: fixed;
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
      margin-bottom: 20px;
    }

</style>
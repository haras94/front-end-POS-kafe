<template>
  <div class="buttonCancel">
      <div class="smallCancellPurch">
      <div class="cancel">Cancel
    </div>
    </div>
      
  </div>
</template>

<script>
export default {
    name: 'smallCancellPurch',
}
</script>

<style scoped>
    .buttonCancel{
    margin-top: 40px;
    text-align: center;
    position: relative;
    right: -0px;
    }

    .smallCancellPurch{
    position: relative;
    width: 280px;
    height: 61px;
    background: #F24F8A;
    }

    .cancel{
    position: absolute;
    width: auto;
    height: 35px;
    right: 100px;
    top: 15px;
    font-size: 25px;
    color: #FFFFFF;
    margin-right: auto;
    margin-left: auto;
    }
</style>
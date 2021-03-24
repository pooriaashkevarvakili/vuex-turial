<template>
<div class="container my-5"
     style="text-align: center">
  <img src="./../assets/shopping-cart.png"
       alt="shopping" width="200px"/>
  <div class="mt-4">
    <h4 class="orange-red fw-600 ">your Cart Is Empty</h4>
    <h5 class="dark-blue fw-600">you can go to home page to view more food items.</h5>
  </div>
  <Summary/>
</div>
</template>

<script>
export default {
name: 'EmptyCart'
};
</script>

<style scoped src="../style/style.css">

</style>
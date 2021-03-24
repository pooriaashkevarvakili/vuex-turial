<template>
<div class="row" style="width: 50%">
<div class="col-md-4">
  <h4>Total</h4>
  <h6>PromoCode</h6>
  <h6>Shopping</h6>
  <div class="my-3 line w-120"></div>
  <h6>Subtotal</h6>
</div>
  <div class="col-md-4">
    <h6>Rs {{totalPrice}}</h6>
    <h6>SwEETDISH</h6>
    <h6>RS50</h6>
    <div class="my-3 line w-60"></div>
    <h6>Rs {{totalPrice+50}}</h6>
  </div>
</div>
</template>

<script>
export default {
  props:["totalPrice"],
name: "Summary"
}
</script>

<style scoped src="../style/style.css">

</style>
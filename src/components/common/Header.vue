<template>
  <header>
<div class="header">
  <div @click="goTo('home')" class="logo">
    <h4 class="swit">swit dish</h4>
    <img src="../../assets/breakfast.png"
         alt="breakfast" class="img-photo">
  </div>
  <div class="d-flex cart">
    <i @click="goTo('home')" class="fa fa-shopping-cart cart-icon"></i>
    <span class="cart-count">{{count}}</span>
    <h5 class="login">login</h5>
    <h5 class="register">signup</h5>
  </div>
</div>
  </header>
</template>

<script>
export default {
name: 'Header',
  computed: {
  count() {
    return this.$store.state.cartItemCount
  }
  },
  methods: {
  goTo(page){
    page=="home"?this.$router.push("/"):this.$router.push('/cart')
  }
  }
};
</script>

<style scoped src="../../style/style.css">

</style>
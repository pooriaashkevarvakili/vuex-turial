<template>
<div class="wrapper">
  <Header/>
  <div class="content">
    <div class="container mb-5">
      <h4 class="my-4 fw-600 d-blue">TopRated</h4>
      <div class="row">
        <div @click="foodDetails(items)" v-for="items in topRated" :key="items.id" class="col-md-4 pointer">
          <img :src="items.url"
               class="img-home">
          <h5 class="hw-600 black">{{items.name}}</h5>
        </div>
      </div>

      <h4 class="my-4 fw-600 d-blue">allCategories</h4>
      <div class="row">
        <div @click="foodDetails(items)" v-for="items in allCategories" :key="items.id" class="col-md-4 pointer">
          <img :src="items.url"
               class="img-home">
          <h5 class="hw-600 black">{{items.name}}</h5>
        </div>
      </div>

      <h4 class="my-4 fw-600 d-blue">dishesNearYou</h4>
      <div class="row">
        <div @click="foodDetails(items)" v-for="items in dishesNearYou" :key="items.id" class="col-md-4 pointer">
          <img :src="items.url"
               class="img-home">
          <h5 class="hw-600 black">{{items.name}}</h5>
        </div>
      </div>

    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import Header from './common/Header';
import Footer from './common/Footer';
export default {

name: 'Home',
  components: {
    Header,
    Footer
  },
  computed:{
  topRated(){
    return this.$store.state.topRated
  },
    allCategories() {
      return this.$store.state.allCategories

    },
    dishesNearYou(){
    return this.$store.state.dishesNearYou
    }
  },
  methods: {
  foodDetails(items){
    this.$router.push({name:"foodDetails",params:items})
  }
  }
};
</script>

<style scoped src="../style/style.css">

</style>
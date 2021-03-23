<template>
  <div class="d-flex food-details-outer">
    <Header />
    <div class="food-details">
      <div class="container mb-5">
        <div class="container mb-5">
          <h4 class="my-4 fw-600">Add Item to cart</h4>
          <div class="row">
            <div class="col-md-4" style="cursor: pointer">
              <img class="img-home" :src="details.url" />
            </div>
            <div class="col-md-4" style="cursor: pointer">
              <h5 class="my-4 fw-600">Name:{{details.name}}</h5>
              <h5 class="my-4 fw-600">Price: {{details.price}}</h5>
              <h5 class="my-4 fw-600">Description: {{details.desc}}</h5>
              <h5 class="my-4 fw-600">Rating: {{details.rate}}</h5>
              <div >
                <button @click="goToCart" class="btn btn-primary">Go to Cart</button>
                <button @click="addToCart" class="btn btn-success" style="margin-left:10px">Add Item</button>
                <button @click="removeItem" style="margin-left:10px" class="btn btn-danger">Remove Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './common/Header';
import Footer from './common/Footer';
export default {
name: 'FoodDetails',
  data () {
  return{
    details:this.$route.params

  }
  },
  methods: {
  goToCart(){
this.$router.push("/cart")
  },
    addToCart(){
this.$store.dispatch("addToCart",this.details)
    },
    removeItem(){
      this.$store.dispatch("removeItem",this.details)

    },
    created(){
    if(this.$route.params.id !==undefined){
      localStorage.setItem('details',JSON.stringify(this.$route.params))
    }
    },
    mounted(){
    this.details=JSON.parse(localStorage.getItem('details'))
    }
  },
  components: {
  Header,
    Footer
  }

};
</script>

<style scoped src="../style/style.css">

</style>
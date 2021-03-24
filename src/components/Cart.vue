<template>
  <div class="d-flex cart-outer-div">
    <Header />
    <div class="cart-body">
      <div v-if="totalPrice !== 0" class="container mb-5">
        <h4 class="my-4 my-cart">My Cart</h4>
        <div class="d-flex my-3" style="justify-content: space-between;">
          <h4 class="fw-600">Summary</h4>
          <h4 class="fw-600" style="margin-right: 49%;">Cart</h4>
        </div>
        <div class="d-flex">
<Summary @click="totalPrice"/>
            <div class="col-md-4">
              <h6>Total:</h6>
              <h6>Promo Code:</h6>
              <h6>Shipping:</h6>
              <div class="my-3 line w-120"></div>
              <h6>Subtotal:</h6>
            </div>
            <div class="col-md-4">
              <h6>Rs {{totalPrice}}</h6>
              <h6>SWEETDISH</h6>
              <h6>Rs 50</h6>
              <div class="my-3 line w-60"></div>
              <h6>Rs {{totalPrice + 50}}</h6>
            </div>

          <div class="row" style="width: 50%">
            <div style="max-width: 70%" class="col-md-12">
              <ul style="padding: 0">
                <li v-for="items in cartItems" :key="items.id" style="list-style: none;">
                  <div class="cart-items">
                    <img :src="items.url" width="50px" height="50px" style="border-radius: 50%" />
                    <h6 class="mt-15">{{items.name}}</h6>
                    <div class="d-flex mt-10">
                      <button @click="removeItem(items)" class="add" type="button">-</button>
                      <span class="cart-quantity">{{items.quantity}}</span>
                      <button @click="addToCart(items)" class="remove" type="button">+</button>
                    </div>
                    <h6 class="mt-15">{{items.price * items.quantity}}</h6>
                  </div>
                  <div class="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 80%; margin-top: 2%">
          <button @click="checkout" class="btn btn-primary" type="button">Checkout</button>
        </div>
      </div>
<!--      <div v-else class="container my-5" style="text-align: center">-->
<!--        <img src="../assets/shopping-cart.png" width="200px" />-->
<!--        <div class="mt-4">-->
<!--          <h4 class="orange-red fw-600">Your cart is empty</h4>-->
<!--          <h5 class="darkblue fw-600">You can go to home page to view more food items.</h5>-->
<!--        </div>-->
<!--      </div>-->
      <EmptyCart v-else/>
    </div>
    <Footer />
  </div>
</template>

<script>
// import swal from "sweetalert";
import Header from './common/Header';
import Footer from './common/Footer';
import EmptyCart from "./EmptyCart"
import Summary from "./Summary"
export default {
name: "Cart",
  components: {
  Header,
    Footer,
Summary,
    EmptyCart
  },
  methods:{
  addItem(items){
this.$store.dispatch("addToCart",items)
  },
    removeItem(items){
      this.$store.dispatch("removeItem",items)

    },
    checkout() {
      // swal("Good job!", "Your order is placed successfully!", "success").then(
      //     value => {
      //       window.location.href = "/cart";
      //     }
      // );
    }
  },
  computed: {
  cartItems(){
    return this.$store.state.cartItems
  },
    totalPrice(){
    let price=0;
    this.$store.state.cartItems.map(el=>{
      price +=el["quantity"]*el["price"]
    })
      return price
    }

  }

}
</script>

<style scoped src="../style/style.css">

</style>
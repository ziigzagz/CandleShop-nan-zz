<template>
  <div class="container">
      <Nav />
    <hr />
    <div class="col align-self-center box">
      <Cover />
    </div>
    <!-- content -->
    <Cart />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import Cart from "@/components/C_Cart.vue";
import firebase from "firebase";
export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("/Login");
        //alert("You don't have a permission")
      } else {

      }
    });
  },
  components: {
    Nav,
    Cover,
    Cart,
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
</style>

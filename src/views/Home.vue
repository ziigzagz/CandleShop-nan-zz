<template>
  <div class="container">
    <Nav />
    <hr />
    <div class="col align-self-center box">
      <Cover />
    </div>
    <!-- content -->
    <Product />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import Product from "@/components/C_Product.vue";
import firebase from "firebase";
export default {
  // beforeCreate() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (!user) {
  //       //this.$router.replace("/Login");
  //       //alert("You don't have a permission")
  //     } else {

  //     }
  //   });
  // },
  components: {
    Nav,
    Cover,
    Product,
  },
};
</script>

<style>
div.menu {
  display: inline;
}
</style>

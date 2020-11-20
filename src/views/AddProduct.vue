<template>
  <div class="container">
   
      <Nav />

    <hr />
    <!-- content -->
    <AddProduct />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import AddProduct from "@/components/C_AddProduct.vue";
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
    AddProduct,
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
</style>

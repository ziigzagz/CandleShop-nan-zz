<template>
  <div class="container">

      <Nav />
  
    <hr />
    <!-- <div class="col align-self-center box">
      <Cover />
    </div> -->
    <!-- content -->
    <ProductEdit  />

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Cover from '@/components/Cover.vue';
import ProductEdit from '@/components/C_ProductEdit.vue';
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
    ProductEdit
  },

};
</script>

<style>

.box {
  width: 100%;
  height: 100%;
}

</style>
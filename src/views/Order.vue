<template>
  <div class="container">
    <Nav />

    <hr />
    <div class="col align-self-center box">
      <Cover />
    </div>
    <!-- content -->
    <Order />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import Order from "@/components/C_Order.vue";
import firebase from "firebase";
export default {
  async mounted() {
    await firebase.auth().onAuthStateChanged((user) => {
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
    Order,
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="container">
    <Nav />

    <hr />
    <!-- content -->
    <InfoOrder />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import InfoOrder from "@/components/C_InfoOrder.vue";
import firebase from "firebase";
export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("/Login");
        //alert("You don't have a permission")
      } else {
        console.log(user.refreshToken);
      }
    });
  },
  components: {
    Nav,
    Cover,
    InfoOrder,
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
</style>

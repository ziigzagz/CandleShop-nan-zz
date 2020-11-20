<template>
  <div class="container">

      <Nav />

    <hr />
    <div class="col align-self-center box">
      <Cover />
    </div>
    <!-- content -->
    <ForgetPassword />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import ForgetPassword from "@/components/C_ForgetPassword.vue";
import firebase from "firebase";
export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        //  this.$router.replace("/Login");
        //alert("You don't have a permission")
      } else {
        // this.$router.replace("/");
        // this.$router.replace("/");
      }
    });
  },
  components: {
    Nav,
    Cover,
    ForgetPassword,
  },

  data() {
    return {};
  },
};
</script>
<style></style>

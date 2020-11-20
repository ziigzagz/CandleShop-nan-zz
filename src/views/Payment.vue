<template>
  <div class="container">

      <Nav />

    <hr />
    <div class="col align-self-center box">
      <Cover />
    </div>
    <!-- content -->
    <Payment  />

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Cover from '@/components/Cover.vue';
import Payment from '@/components/C_Payment.vue';
import firebase from "firebase";
export default {
  mounted() {
    if(localStorage.getItem('User') == null){
      // this.$router.replace("/");
      console.log("Login please !");
    }
  },
  beforeCreate() {

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // this.$router.replace("/Login");
        //alert("You don't have a permission")
      } else {

      }
    });
  },
  components: {
    Nav,
    Cover,
    Payment
  },

};
</script>

<style>

.box {
  width: 100%;
  height: 100%;
}

</style>
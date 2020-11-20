<template>
  <div class="container">
    <Nav />

    <hr />
    <!-- content -->
    <Productmanage />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import Productmanage from "@/components/C_ProductManage.vue";
import firebase from "firebase";
export default {
  mounted() {
    if (localStorage.getItem("uid") != "oe0Yj7t0NcgvxQl6jyu0FWMWPjf1") {
      this.$router.replace("/Logout");
      console.log("7897879");
    }
    // console.log("7897879");
  },
  //   beforeCreate() {
  //     firebase.auth().onAuthStateChanged((user) => {
  //       if (!user) {
  //         this.$router.replace("/Login");
  //         //alert("You don't have a permission")
  //       } else {

  //       }
  //     });
  //   },
  components: {
    Nav,
    Cover,
    Productmanage,
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
</style>

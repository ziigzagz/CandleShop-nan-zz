<template>
  <div class="container">

      <Nav />

    <hr />
    <div class="col align-self-center box">
      <Cover />
    </div>
    <!-- content -->
    <Login />

  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Cover from "@/components/Cover.vue";
import Login from "@/components/C_Login.vue";
import firebase from "firebase";
export default {
  beforeCreate() {
    
  },
  components: {
    Nav,
    Cover,
    Login,
  },
};
</script>
<style>

</style>

<template>
  <div>
    <h1>
      {{ $store.state.cartNumber }}
    </h1>
    <button class="btn btn-danger" @click="add">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    add(){
      this.$store.dispatch("addAction",1)
    }
  },
};
</script>

<style>
</style>
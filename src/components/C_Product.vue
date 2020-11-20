<template>
  <div class="container mt-5 text-center">
    <div class="row mb-5 bg-light ml-3 mr-3">
      <div class="col align-self-center "><h1>รายการสินค้า</h1></div>
    </div>
    <div class="row">
      <div class="col-3" v-for="n in datas">
        <div class="card">
          <div
            class="card-header bg-white col-md-3mx-auto my-auto"
            style="height:220px"
          >
            <div id="img_container">
              <img
                :src="n.img"
                class="img-thumbnail rounded  mx-auto"
                height="180px"
              />
            </div>
          </div>
          <div class="card-body text-center">
            <div class="col">
              <h3>{{ n.Name }}</h3>
            </div>
            <br />
            <div class="col info">{{ n.Info }}</div>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-4">
                <button
                  class="btn btn-success"
                  @click="addCart(n.Serial, n.img, n.Name, n.Price)"
                >
                  <i class="fas fa-shopping-basket"></i>
                </button>
              </div>
              <div class="col-8">ราคา {{ n.Price }}.00 บาท</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
    };
  },
  mounted() {
    const axios = require("axios");
    // let self = this;
    axios
      .get("http://localhost:80/action.php")
      .then((response) => {
        response.data.forEach((element) => {
          // console.log(element.first_name);
          this.datas.push(element);
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  },
  methods: {
    addCart(ID, Name, Price, img) {
      // console.log(ID, Name, Price);
      this.$store.dispatch("addProduct", [ID, Name, Price, img]);
    },
  },
};
</script>

<style>
.container {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

div.info {
  height: 100px;
 overflow-x: hidden;
  overflow-y: scroll;
}

img{
  border: white;
}
</style>

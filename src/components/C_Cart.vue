<template>
  <div class="container mt-4">
    <div class="row text-center">
      <div class="col text-center">
        <div class="card text-center">
          <div class="card-header">
            <h3>
              การชำระเงิน
            </h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>หมายเลขสินค้า</th>
                  <th>รูป</th>
                  <th>ชื่อสินค้า</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="a in this.$store.getters.getCartProduct">
                  <td>{{ a[0] }}</td>
                  <td><img :src="a[1]" alt="" width="50px" /></td>
                  <td>{{ a[2] }}</td>
                  <td>{{ a[3] }}.00 บาท</td>
                </tr>
              </tbody>
            </table>
            <div class="row mt-3">
              <div class="col">
                <h4>ยอดชำระ</h4>
                <h2>{{ price }}.00 บาท</h2>
                <input
                  name="Name"
                  type="text"
                  id="Name"
                  class="form-control col-6 mx-auto mb-2"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="ชื่อ-สกุล"
                />
                <input
                  name="Tel"
                  id="Tel"
                  type="text"
                  class="form-control col-6 mx-auto mb-2"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="เบอร์โทร"
                />
                <textarea
                  name="info"
                  id="info"
                  cols="100%"
                  rows="10"
                  placeholder="ที่อยู่"
                ></textarea>
                <br />
                <button class="btn btn-info" @click="insertOrder">
                  <h4>ยืนยัน</h4>
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      product: [],
    };
  },
  mounted() {
    var a = 0;
    let self = this;
    this.$store.getters.getCartProduct.forEach((element) => {
      a += parseInt(element[3]);
    });
    this.price = a;
    // console.log(this.$store.getters.getCartProduct);
    // console.log(str);
  },
  methods: {
    insertOrder() {
      var r = confirm("ยืนยันการสั่งซื้อ  ");
      if (r == true) {
        if (
          document.getElementById("Name").value != "" &&
          document.getElementById("Tel").value != "" &&
          document.getElementById("info").value != ""
        ) {
          var year = new Date().getFullYear();
          var month = new Date().getMonth() + 1;
          var day = new Date().getDate();
          var hr = new Date().getHours();
          var mins = new Date().getMinutes();
          var sec = new Date().getSeconds();
          var ms = new Date().getMilliseconds();
          var order = "ORDER-" + year + month + day + hr + mins + sec + ms;
          let self = this;
          const axios = require("axios");
          let tmp;
          this.$store.getters.getCartProduct.forEach((element) => {
            tmp = element[0];
            var data = new FormData();
            data.append("OrderID", order);
            data.append("Serial", tmp);
            data.append(
              "Name",
              document.querySelector("input[name=Name]").value
            );
            data.append("Tel", document.querySelector("input[name=Tel]").value);
            data.append(
              "Address",
              document.querySelector("textarea[name=info]").value
            );
            data.append("User", localStorage.getItem("User"));
            console.log(order);
            console.log(tmp);
            console.log(document.querySelector("input[name=Name]").value);
            console.log(document.querySelector("input[name=Tel]").value);
            console.log(document.querySelector("textarea[name=info]").value);
            console.log(localStorage.getItem("User"));

            axios
              .post("http://localhost:80/insertorder.php", data)
              .then((response) => {
                console.log(response);
              });
          });
          this.$router.replace("/Order");
        } else {
          alert("กรุณากรอกข้อมูลให้ครบ");
        }
      } else {
        //cancel
      }
    },
  },
};
</script>

<style></style>

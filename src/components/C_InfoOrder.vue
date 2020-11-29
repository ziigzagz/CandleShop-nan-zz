
<template>
  <div class="container ">
    <div class="row mt-5">
      <div class="col-6 mx-auto">
        <div class="form-group">
          <label for="exampleInputEmail1">เลขที่สั่งซื้อ</label>
          <input
            type="text"
            class="form-control text-center"
            aria-describedby="emailHelp"
            id="OrderID"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6  mx-auto">
        <div class="form-group">
          <label for="exampleInputEmail1">ชื่อ</label>
          <input
            type="text"
            class="form-control  text-center"
            aria-describedby="emailHelp"
            id="Name"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6  mx-auto">
        <div class="form-group ">
          <label for="exampleInputEmail1">เบอร์โทร</label>
          <input
            type="text"
            class="form-control text-center"
            aria-describedby="emailHelp"
            id="Tel"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6  mx-auto">
        <div class="form-group">
          <label for="exampleInputEmail1">ที่อยู่</label>
          <input
            type="text"
            class="form-control text-center"
            aria-describedby="emailHelp"
            id="Address"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="alert alert-warning" role="alert" v-if="Paid == 0">
          <i class="fas fa-spinner"></i>
          ยังไม่ชำระเงิน
        </div>
        <div class="alert alert-success" role="alert" v-if="Paid == 1">
          <i class="fas fa-check-circle"></i>
          ชำระเงินแล้ว
        </div>
        <div class="alert alert-danger" role="alert" v-if="Paid == 2">
          <i class="fas fa-times-circle"></i>
          ถูกยกเลิก
        </div>


      </div>
    </div>

    <div class="row table-responsive-md">
      <table class="table table-striped table-bordered">
        <thead class="">
          <tr>
            <th>หมายเลขสินค้า</th>
            <th>รูป</th>
            <th>ชื่อสินค้า</th>
            <th>รายละเอียด</th>
            <th>ราคา</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in datas">
            <td>{{ data.Serial }}</td>
            <td>
              <img :src="data.img" alt="" width="70px" />
            </td>
            <td>{{ data.Name }}</td>
            <td>{{ data.Info }}</td>
            <td>{{ data.Price }} บาท</td>
          </tr>
          <tr>
            <td colspan="4">=== ยอดชำระ ===</td>
            <td>{{ SumPrice }} บาท</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      Paid: 0,
      SumPrice: 0,
    };
  },
  mounted() {
    if (localStorage.getItem("OrderID") == null) {
      this.$router.replace("/Order");
    }
    const axios = require("axios");
    // let self = this;
    var data = new FormData();
    data.append("OrderID", localStorage.getItem("OrderID"));
    axios
      .post("http://localhost:80/selectorderid.php", data)
      .then((response) => {
        // console.log(response.data);
        response.data.forEach((element) => {
          this.datas.push(element);
          document.getElementById("OrderID").value = element.OrderID;
          document.getElementById("Name").value = element.name;
          document.getElementById("Tel").value = element.tel;
          document.getElementById("Address").value = element.address;
          this.Paid = element.status;
          this.SumPrice += parseInt(element.Price);
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style>

</style>

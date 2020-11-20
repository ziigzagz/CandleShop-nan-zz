<template>
  <div class="container mt-4">
    <div class="row text-center">
      <div class="col text-center">
        <div class="card text-center">
          <div class="card-header">
            <h3>
              รายการการสั่งซื้อ
            </h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body table-responsive">
            <input
              class="form-control mb-3"
              id="myInput"
              type="text"
              placeholder="ค้นหา"
            />

            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>เลขที่สั่งซื้อ</th>
                  <!-- <th v-if="!isAdmin">ราคารวม</th> -->

                  <th>ราคา</th>
                  <th v-if="isAdmin">ชื่อ</th>
                  <th v-if="isAdmin">เบอร์</th>
                  <th v-if="isAdmin">ที่อยู่</th>
                  <th>วัน-เวลาที่สั่งซื้อ</th>
                  <th v-if="isAdmin">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody id="myTable">
                <tr v-for="a in datas">
                  <td>
                    <div
                      class="alert alert-warning"
                      role="alert"
                      v-if="a.status == 0"
                    >
                     <i class="fas fa-spinner"></i>
                      ยังไม่ชำระเงิน
                      <br />
                      {{ a.OrderID }}
                      <br />
                      <button class="btn btn-info" @click="InfoOrder(a.OrderID, a.status)">
                        คลิ๊กดูรายละเอียด
                      </button>
                    </div>
                    <div
                      class="alert alert-success"
                      role="alert"
                      v-if="a.status == 1"
                    >
                      <i class="fas fa-check-circle"></i>
                      ชำระเงินแล้ว
                      <br />
                      {{ a.OrderID }}
                      <br />
                      <button class="btn btn-info" @click="InfoOrder(a.OrderID)">คลิ๊กดูรายละเอียด</button>
                    </div>
                    <div
                      class="alert alert-danger"
                      role="alert"
                      v-if="a.status == 2"
                    >
                      <i class="fas fa-times-circle"></i>
                      รายการถูกยกเลิก
                      <br />
                      {{ a.OrderID }}
                      <br />
                      <button class="btn btn-info" @click="InfoOrder(a.OrderID,a.status)">คลิ๊กดูรายละเอียด</button>
                    </div>
                  </td>
                  <td>{{ a.s }}.00 บาท</td>
                  <td v-if="isAdmin">{{ a.name }}</td>
                  <td v-else>{{ a.time }}</td>
                  <td v-if="isAdmin">{{ a.tel }}</td>
                  <td v-if="isAdmin">{{ a.address }}</td>
                  <td v-if="isAdmin">{{ a.time }}</td>
                  <td v-if="a.status == 0 && isAdmin">
                    <a :href="a.imgpay" target="_blank">
                      <img :src="a.imgpay" alt="" width="80px" />
                    </a>
                    <br />
                    <button
                      class="btn btn-success mt-2"
                      @click="updatesuccess(a.OrderID, a.s)"
                    >
                      ชำระเงินแล้ว
                    </button>
                    <br />
                    <button
                      class="btn btn-danger mt-2"
                      @click="cancelorder(a.OrderID, a.s)"
                    >
                      ยกเลิก
                    </button>
                  </td>
                  <td v-if="a.status == 1 && isAdmin">
                    <a :href="a.imgpay" target="_blank">
                      <img :src="a.imgpay" alt="" width="80px" />
                    </a>
                  </td>
                  <td v-if="a.status == 2 && isAdmin">
                    <a :href="a.imgpay" target="_blank">
                      <img :src="a.imgpay" alt="" width="80px" />
                    </a>
                    <div class="alert alert-danger" role="alert">
                      <i class="fas fa-times-circle"></i>
                      รายการถูกยกเลิก
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function() {
  $("#myInput").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});
export default {
  data() {
    return {
      datas: [],
      isAdmin: localStorage.getItem("isAdmin"),
    };
  },
  mounted() {
    let self = this;
    if (localStorage.getItem("isAdmin")) {
      const axios = require("axios");
      // let self = this;
      var data = new FormData();
      data.append("User", localStorage.getItem("User"));
      axios
        .post("http://localhost:80/selectorderall.php", data)
        .then((response) => {
          response.data.forEach((element) => {
            this.datas.push(element);

          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    } else {
      const axios = require("axios");
      // let self = this;
      var data = new FormData();
      data.append("User", localStorage.getItem("User"));
      axios
        .post("http://localhost:80/selectorder.php", data)
        .then((response) => {
          response.data.forEach((element) => {
            this.datas.push(element);
            // console.log(element);

          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  methods: {
    updatesuccess(OrderID, sumPrice) {
      var r = confirm(
        "ยืนยันการชำระเงินของ : " + OrderID + " ยอดเงิน " + sumPrice + " บาท"
      );
      if (r == true) {
        const axios = require("axios");
        var data = new FormData();
        data.append("OrderID", OrderID);
        axios
          .post("http://localhost:80/updatesuccess.php", data)
          .then((response) => {
            location.reload();
          });
      } else {
      }
    },
    cancelorder(OrderID, sumPrice) {
      var r = confirm("ยืนยันการยกเลิกของ : " + OrderID);
      if (r == true) {
        const axios = require("axios");
        var data = new FormData();
        data.append("OrderID", OrderID);
        axios
          .post("http://localhost:80/updatecancel.php", data)
          .then((response) => {
            location.reload();
          });
      }
    },
    InfoOrder(OrderID, status) {
      localStorage.setItem("OrderID", OrderID);
      this.$router.replace("/InfoOrder");
    },
  },
};
</script>

<style></style>

<template>
  <div class="container mt-5 mx-auto">
    <!-- ชื่อ-สกุล -->
    <div class="row mt-3 ">
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >ชื่อ</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value=""
          />
        </div>
      </div>
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >นามสกุล</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
    </div>
    <!-- email รหัสผ่าน -->
    <div class="row mt-3 ">
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >E-mail</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >รหัสผ่าน</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
    </div>
    <!-- ที่อยู่ ยืนยันรหัสผ่าน -->
    <div class="row mt-3 ">
      <div class="col-6">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">ที่อยู่</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >ยืนยันรหัสผ่าน</span
            >
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
    </div>

    <div class="row mt-5 ">
      <div class="col">
        <button type="button" class="btn btn-success mr-3">บันทึก</button>
        <button type="button" class="btn btn-danger">ยกเลิก</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let self = this;
    if (localStorage.getItem("isAdmin")) {
      const axios = require("axios");
      // let self = this;
      var data = new FormData();
      data.append("", localStorage.getItem("User"));
      axios
        .post("http://localhost:80/selectorderall.php", data)
        .then((response) => {
          response.data.forEach((element) => {
            this.datas.push(element);
            console.log(element);
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    } else {
      this.$router.replace("/");
    }
  },
};
</script>
<style></style>

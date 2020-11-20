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
          <div class="card-body table-responsive">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>เลขที่สั่งซื้อ</th>
                  <th>จำนวนเงิน(บาท)</th>

                  <th>วัน-เวลาที่สั่งซื้อ</th>
                  <th>อัปโหลดสลิป</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="a in datas">
                  <td>
                    {{ a.OrderID }}
                    <br>
                    <button
                      class="btn btn-info"
                      @click="InfoOrder(a.OrderID)"
                    >
                      คลิ๊กดูรายละเอียด
                    </button>
                  </td>
                  <td>{{ a.s }}</td>
                  <td>{{ a.time }}</td>
                  <td>
                    <div class="row">
                      <div class="col mx-auto">
                        <a
                          :href="a.imgpay"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img :src="a.imgpay" alt="" width="70px" />
                        </a>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input type="file" id="files" name="files[]" multiple class="mx-auto"/>
                        <button
                          class="btn btn-info"
                          @click="uploadslip(a.OrderID)"
                        >
                          บันทึก
                        </button>
                      </div>
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
import firebase from "firebase";
export default {
  data() {
    return {
      datas: [],
      img: [],
      upload: [],
    };
  },
  mounted() {
    const axios = require("axios");
    // let self = this;
    var data = new FormData();
    data.append("User", localStorage.getItem("User"));
    axios
      .post("http://localhost:80/selectorderpayment.php", data)
      .then((response) => {
        response.data.forEach((element) => {
          this.datas.push(element);
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  },
  methods: {
    uploadslip(OrderID) {
      var storageRef = firebase.storage().ref("img");
      // Get the file from DOM
      var file = document.getElementById("files").files[0];
      console.log(file);
      //dynamically set reference to the file name
      var thisRef = storageRef.child(file.name);
      //put request upload file to firebase storage
      thisRef.put(file).then((snapshot) => {
        alert("File Uploaded");
        console.log("Uploaded a blob or file!");
      });
      const storage = firebase.storage();
      // Get metadata properties
      let linkimg;
      let self = this;
      storage
        .ref("img")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          console.log(typeof url); //string
          console.log(url); // link
          self.linkimg = url;
          self.upload.push(url);
          var data = new FormData();
          data.append("imgpay", self.upload[0]);
          data.append("OrderID", OrderID);
          // console.log(self.upload[0]); // link
          // console.log(OrderID); // orderid
          axios
            .post("http://localhost:80/updatepayimg.php", data)
            .then((response) => {});
        });
      this.$router.replace("/Order");
    },
    InfoOrder(OrderID) {
      localStorage.setItem("OrderID", OrderID);
      this.$router.replace("/InfoOrder");
    },
  },
};
</script>

<style></style>

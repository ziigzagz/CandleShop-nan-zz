<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="card">
          <div class="card-header">แก้ไขสินค้า</div>
          <div class="card-body">
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    หมายเลขสินค้า</span
                  >
                </div>
                <input
                  name="serial"
                  type="text"
                  id="serial"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    ชื่อสินค้า</span
                  >
                </div>
                <input
                  name="name"
                  type="text"
                  id="name"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    ราคา</span
                  >
                </div>
                <input
                  name="price"
                  type="number"
                  id="price"
                  min="0"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    รายละเอีด</span
                  >
                </div>
                <textarea
                  name="info"
                  cols="100%"
                  rows="10"
                  id="info"
                ></textarea>
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    รูปภาพ</span
                  >
                </div>
                <input
                  type="file"
                  id="files"
                  name="files[]"
                  multiple
                  accept="image/*"
                  @click="check(1)"
                />
              </div>
            </div>
            <button class="btn btn-danger mr-3" @click="cancel">
              ยกเลิก
            </button>
            <button class="btn btn-success" @click="update">แก้ไขสินค้า</button>
            <div class="mainDiv" align="right"></div>
          </div>
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
      CheckUpdateImg: false,
    };
  },
  methods: {
    cancel(){
 this.$router.replace("/Manage");
    },
    check(val) {
      console.log(this.CheckUpdateImg);
      this.CheckUpdateImg = true;
      console.log(this.CheckUpdateImg);
    },
    update() {
      if (this.CheckUpdateImg) {
        var storageRef = firebase.storage().ref("img");
        // Get the file from DOM

        var file = document.getElementById("files").files[0];
        console.log(file);
        //dynamically set reference to the file name
        var thisRef = storageRef.child(file.name);
        //put request upload file to firebase storage
        thisRef.put(file).then(() => {
          alert("อัพเดตสินค้าสำเร็จ");
          console.log("Uploaded a blob or file!");
          const storage = firebase.storage();
          // let linkimg = "";
          // Get metadata properties
          let linkimg;
          let self = this;
          storage
            .ref("img")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              self.datas.push(url);

              console.log(self.datas[1]);
              // console.log(datas);
              var data = new FormData();
              data.append(
                "serial",
                document.querySelector("input[name=serial]").value
              );
              data.append(
                "name",
                document.querySelector("input[name=name]").value
              );
              data.append(
                "price",
                document.querySelector("input[name=price]").value
              );
              data.append(
                "info",
                document.querySelector("textarea[name=info]").value
              );

              data.append("img", self.datas[1]);
              data.append("id", localStorage.getItem("ProductID"));
              console.log(data);
              axios
                .post("http://localhost:80/updateproduct.php", data)
                .then((response) => {
                  console.log(response.data);
                  this.$router.replace("/Manage");
                });
            });
        });
      } else {
        // Get the file from DOM
        var data = new FormData();
        data.append(
          "serial",
          document.querySelector("input[name=serial]").value
        );
        data.append("name", document.querySelector("input[name=name]").value);
        data.append("price", document.querySelector("input[name=price]").value);
        data.append(
          "info",
          document.querySelector("textarea[name=info]").value
        );

        data.append("img", localStorage.getItem("img"));
        data.append("id", localStorage.getItem("ProductID"));
        console.log(data);
        axios
          .post("http://localhost:80/updateproduct.php", data)
          .then((response) => {
            console.log(response.data);
            this.$router.replace("/Manage");
          });
      }
    },
  },
  mounted() {
    let self = this;
    if (localStorage.getItem("isAdmin")) {
      const axios = require("axios");
      // let self = this;
      if (localStorage.getItem("ProductID") != null) {
        var data = new FormData();
        data.append("ProductID", localStorage.getItem("ProductID"));
        axios
          .post("http://localhost:80/selectproductid.php", data)
          .then((response) => {
            console.log(response);
            document.getElementById("serial").value = response.data[0].Serial;
            document.getElementById("name").value = response.data[0].Name;
            document.getElementById("price").value = response.data[0].Price;
            document.getElementById("info").value = response.data[0].Info;
            document.getElementById("serial").value = response.data[0].Serial;
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
        this.$router.replace("/Manage");
      }
    } else {
      this.$router.replace("/");
    }
  },
};
</script>
<style></style>

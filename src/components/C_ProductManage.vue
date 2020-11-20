<template>
  <div class="table-responsive">
    <!-- Button trigger modal -->
    <!-- Button trigger modal -->

    <table id="datatable" class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>หมายเลขสินค้า</th>
          <th>ชื่อสินค้า</th>

          <th>แก้ไข</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in datas">
          <td>{{ a.Serial }}</td>
          <td>{{ a.Name }}</td>
          <td style="width:400px;">
            <button class="btn btn-danger mr-3" @click="Delete(a.Serial)">
              <i class="fas fa-trash"></i>
              ลบ
            </button>
            <button class="btn btn-warning" @click="Edit(a.Serial)">
              <i class="fas fa-wrench"></i>
              แก้ไข
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
        console.log(error);
      });
  },
  methods: {
    Delete(ProductID) {
      var txt;
      var r = confirm("ยืนยันการลบ");
      if (r == true) {
        const axios = require("axios");
        var data = new FormData();
        data.append("ProductID", ProductID);
        axios
          .post("http://localhost:80/deleteproduct.php", data)
          .then((response) => {
            location.reload();
          });
      } else {
        txt = "You pressed Cancel!";
      }
    },
    Edit(Serial){
      localStorage.setItem("ProductID", Serial);
    }
  },
};
</script>

<style></style>

<template>
  <div>
    <button @click="click">insert</button>
    <button @click="get">get</button>
    <button @click="test">test</button>
    <button @click="addScore1">add</button>
    <ul>
      <li v-for="i in datas">
        <!-- loop data -->
        {{i.id}}
        {{i.first_name}}

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
    };
  },
  methods: {
     addScore1() {
      const axios = require("axios");
      // let self = this;
       axios
        .get("http://localhost:80/action.php")
        .then((response)=> {
          response.data.forEach((element) => {
            console.log(element.first_name);
            this.datas.push(element);
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
      // this.datas.push({
      //   studentName: "name 1",
      //   score: 123,
      // });
      // this.newData.studentName = "";
      // this.newData.score = 0;
    },
    addScore: function() {
      response.data.forEach((element) => {
        console.log(element["first_name"]);
      });
      this.datas.push({
        studentName: this.newData.studentName,
        score: this.newData.score,
      });
      this.newData.studentName = "";
      this.newData.score = 0;
    },
    click() {
      var data = new FormData();
      data.append("fname", "abc@xyz.com");
      data.append("lname", "newsletter");
      axios.post("http://localhost:80/action.php", data).then((response) => {
        console.log(response.data);
      });
    },
    get() {
      axios.post("http://localhost:80/action.php").then((res) => {
        console.log(res.data);
      });
    },
    test() {
      const axios = require("axios");
      // Make a request for a user with a given ID
      axios
        .get("http://localhost:80/action.php")
        .then(function(response) {
          // handle success
          console.log(response.data);
          response.data.forEach((element) => {
            console.log(element["first_name"]);
            // this.name.push({
            //   studentName: element["first_name"],
            //   score: element["id"],
            // });
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style></style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="card mt-5 mx-auto">
          <div class="card-header">สมัครสมาชิก</div>
          <div class="card-body">
            <div class="row"></div>
            <!-- username -->
            <div class="col ">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    ><i class="fas fa-user"></i
                  ></span>
                </div>

                <input
                  name="email"
                  ref="username"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <!-- password -->
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    ><i class="fas fa-lock"></i
                  ></span>
                </div>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Password"
                />
              </div>
            </div>
            <!-- password-2 -->
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    ><i class="fas fa-lock"></i
                  ></span>
                </div>
                <input
                  name="password2"
                  type="password"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Re-Password"
                />
              </div>
            </div>

            <button class="btn btn-danger mr-3" @click="cancel">
              ยกเลิก
            </button>
            <button class="btn btn-success" @click="Register">
              สมัครสมาชิก
            </button>
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
      name: "test",
    };
  },
  methods: {
    cancel() {
      this.$router.replace("/");
    },
    Register() {
      var email = document.querySelector("input[name=email]").value;
      var password = document.querySelector("input[name=password]").value;
      var password2 = document.querySelector("input[name=password2]").value;
      if (password != password2) {
        alert("กรุณากรอกรหัสผ่านใหม่ !");
      } else {
        var r = confirm("ยืนยันการสมัคร");
        if (r == true) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              alert("สมัครสำเร็จ !");
              this.$router.replace("/Login");
            })
            .catch((error) => {
              // Handle Errors here.
              alert(error);
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
            });
        } else {
          txt = "You pressed Cancel!";
        }
      }
    },
  },
};
</script>

<style></style>

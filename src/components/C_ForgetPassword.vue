<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="card mt-5">
          <div class="card-header">
            กรุณากรอกอีเมลล์
          </div>
          <div class="card-body">
            <input
              name="email"
              type="email"
              id="defaultLoginFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"
            />
            <button class="btn btn-info" @click="sendmail">
              ส่งลิงค์ยืนยันไปใน Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    sendmail() {
      // forget password
      var auth = firebase.auth();
      var emailAddress = document.querySelector("input[name=email]").value;
      auth
        .sendPasswordResetEmail(emailAddress)
        .then(() => {
          alert("ระบบส่งลิงค์สำหรับรีเซ็ทรหัสผ่านไปใน Email ของคุณแล้ว !");
        })
        .catch(function(error) {
          // An error happened.
        });
    },
  },
};
</script>

<style></style>

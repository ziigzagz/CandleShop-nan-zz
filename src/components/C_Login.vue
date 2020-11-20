<template>
  <div class="col-6 mx-auto">
    <br /><br />
    <div class="card">
      <form
        class="text-center border border-light p-5"
        action="#!"
        @submit="login"
      >
        <p class="h4 mb-4">Sign in</p>

        <!-- Email -->
        <input
          type="email"
          id="defaultLoginFormEmail"
          class="form-control mb-4"
          placeholder="E-mail"
          v-model="email"
        />

        <!-- Password -->
        <input
          type="password"
          id="defaultLoginFormPassword"
          class="form-control mb-4"
          placeholder="Password"
          v-model="password"
        />

        <div class="d-flex justify-content-around">
          <div>
            <!-- Forgot password -->
            <a href="/Forgetpass">Forgot password?</a>
          </div>
        </div>

        <!-- Sign in button -->
        <button class="btn btn-info btn-block my-4" type="submit">
          Sign in
        </button>

        <!-- Register -->
        <p>
          Not a member?
          <a href="/Register">Register</a>
        </p>

        <!-- Social login -->
        <p>or sign in with:</p>

        <a @click="loginWithProvider" class="mx-5" role="button"
          ><i class="fab fa-google"></i
        ></a>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data: function() {
    return { email: "", password: "" };
  },
  methods: {
    login(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            var user = firebase.auth().currentUser;
            if (user != null) {
              user.providerData.forEach(function(profile) {
                localStorage.setItem("User", profile.email);
                localStorage.setItem("StatusLogin", 1);
                // console.log("Sign-in provider: " + profile.providerId);
                // console.log("  Provider-specific UID: " + profile.uid);
                // console.log("  Name: " + profile.displayName);
                // console.log("  Email: " + profile.email);
                // console.log("  Photo URL: " + profile.photoURL);
              });
            }
            this.$router.replace("/");
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
    loginWithProvider(e) {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          (user) => {
            var user = firebase.auth().currentUser;
            if (user != null) {
              user.providerData.forEach((profile) => {
                console.log(user.uid);
                localStorage.setItem("uid", user.uid);
                localStorage.setItem("User", profile.email);
                localStorage.setItem("StatusLogin", 1);
                // console.log("Sign-in provider: " + profile.providerId);
                // console.log("  Provider-specific UID: " + profile.uid);
                // console.log("  Name: " + profile.displayName);
                // console.log("  Email: " + profile.email);
                // console.log("  Photo URL: " + profile.photoURL);
                if (profile.email == "zigzagzaczax@gmail.com") {
                  localStorage.setItem("isAdmin", true);
                }
              });
              this.$router.replace("/");
            }
          },
          (err) => {
            alert(err.message);
          }
        );
    },
  },
};
</script>

<style>
</style>

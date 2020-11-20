<template>
  <div>
    <button @click="signout">SignOut</button>
    <h1>
      123456
    </h1>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Home",
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("/");
        //alert("You don't have a permission")
      } else {
      }
    });

    // ------------------------------
    // Write Data To firebase
    // ------------------------------
    // var database = firebase.database();
    // var userId = "Fb7V3AdEvtheyQVglzPAszUyZZQ2";
    // var name = "zax";
    // var email = "iffammmm";
    // function writeUserData(userId, name, email) {
    //   firebase
    //     .database()
    //     .ref("users/" + userId)
    //     .set({
    //       username: name,
    //       email: email,

    //     });
    // }

    // ------------------------------
    // Get Data Data To firebase
    // ------------------------------
    // var user = firebase.auth().currentUser;
    // if (user != null) {
    //   user.providerData.forEach(function (profile) {
    //     console.log("Sign-in provider: " + profile.providerId);
    //     console.log("  Provider-specific UID: " + profile.uid);
    //     console.log("  Name: " + profile.displayName);
    //     console.log("  Email: " + profile.email);
    //     console.log("  Photo URL: " + profile.photoURL);
    //   });
    // }

    firebase
      .database()
      .ref("users/" + "oe0Yj7t0NcgvxQl6jyu0FWMWPjf1")
      .set({
        username: "qwe",
        email: "asd",
      });

    


    // var postData = {
    //   username: "44444444",
    //   email: "testemail",
    // };

    // // Get a key for a new Post.
    // var newPostKey = firebase.database().ref().child("posts").push().key;

    // // Write the new post's data simultaneously in the posts list and the user's post list.
    // var updates = {};
    // updates["/posts/" + newPostKey] = postData;
    // updates["/users/" + "Fb7V3AdEvtheyQVglzPAszUyZZQ2"] = postData;
    // return firebase.database().ref().update(updates);
    // }
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    },
  },
};
</script>

<style>
</style>
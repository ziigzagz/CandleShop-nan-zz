<template>
  <div class="col sticky-top mx-auto " id="Nav">
    <br />
    <div class="">
      <nav class=" navbar navbar-expand-lg  ml-3 mr-3  ">
        <div class="col-1 text-left ">
          <img
            src="../views/img/google_login.jpg"
            alt="Smiley face"
            width="70"
            height="70"
          />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <div class="row justify-content-start">
            <div class="col">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="fas fa-home">&nbsp;&nbsp;&nbsp;หน้าแรก</i></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Order"
                    ><i class="fas fa-receipt "
                      >&nbsp;&nbsp;&nbsp;รายการสั่งซื้อ</i
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Payment"
                    ><i class="fas fa-wallet">&nbsp;&nbsp;&nbsp;ชำระเงิน</i></a
                  >
                </li>
                <li class="nav-item" v-if="isAdmin">
                  <a class="nav-link" href="/Manage"
                    ><i class="fas fa-box-open">&nbsp;&nbsp;&nbsp;สินค้า</i></a
                  >
                </li>
              </ul>
            </div>
          </div>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                href="https://www.facebook.com/profile.php?id=100006104437537"
                target="_blank"
                class="nav-link"
              >
                <img
                  class="nav-icon mr-3"
                  src="https://www.flaticon.com/svg/static/icons/svg/2111/2111398.svg"
                  width="18"
                  alt=""
                />
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://line.me/ti/p/Lj4eiQ0Ud9"
                target="_blank"
                class="nav-link"
              >
                <img
                  class="nav-icon"
                  src="https://www.flaticon.com/svg/static/icons/svg/124/124027.svg"
                  width="18"
                  alt=""
                />
              </a>
            </li>
            <li class="nav-item">
              <router-link to="/Cart" class="nav-link">
                <i class="fas fa-shopping-cart nav-icon"
                  >&nbsp;&nbsp;&nbsp;ตะกร้าสินค้า&nbsp;&nbsp;&nbsp;
                  <span class="badge badge-pill badge-warning" v-if="users">{{
                    $store.state.cartNumber
                  }}</span>
                </i>
              </router-link>
            </li>

            <li class="nav-item" v-if="users">
              <a href="#" class="nav-link">
                <i class="fas fa-user nav-icon"
                  >&nbsp;&nbsp;&nbsp;{{ users }}</i
                >
              </a>
            </li>
            <li class="nav-item text-danger" v-if="users">
              <a href="/Logout" class="nav-link">
                <i class="fas fa-sign-out-alt nav-icon text-danger"></i>
              </a>
              <!-- <router-link to="/Logout" class="nav-link">
                  </router-link> -->
            </li>
            <li class="nav-item" v-else>
              <router-link to="/Login" class="nav-link"
                ><i class="fas fa-user nav-icon"
                  >&nbsp;&nbsp;&nbsp;เข้าสู่ระบบ</i
                ></router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      users: "",
      isAdmin: localStorage.getItem("isAdmin"),
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("/Login");
      } else {
        this.users = user.email;
        // console.log(user.refreshToken);
      }
    });
  },
};

// export default {
//   data() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (!user) {
//         this.$router.replace("/Login");
//         //alert("You don't have a permission")
//       } else {
//         console.log(user.email);
//         return {
//  message: 'Hello Vue!',
//           isAdmin: true,
//         }
//       }
//     });
// }
// };
</script>

<style scoped>

nav {
  background: rgb(21, 58, 108);
  background: linear-gradient(
    90deg,
    rgba(21, 58, 108, 1) 14%,
    rgba(17, 125, 166, 1) 100%
  );
}
a {
  color: white;
  transition: font-size 0.1s;
}
a:hover {
  color: white;
  text-decoration: none;
  font-size: 25px;
}
</style>

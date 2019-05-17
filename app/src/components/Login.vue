<template>
    <div class="container mt-5" style="background: url('./assets/coba.jpg'); padding:60px;">
          <div class="row">
            <div class="col"></div>
            <div class="col-6">
              <form @submit.prevent="userLogin">
                <div class="form-group">
                  <h2 class="txtop">LOGIN</h2>
                  <label style="color:white" for="loginEmail">Email address</label>
                  <input
                    v-model="loginEmail"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  >
                </div>
                <div class="form-group">
                  <label style="color:white"  for="loginPassword">Password</label>
                  <input
                    v-model="loginPassword"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  >
                </div>
                <button type="submit" class="mt-2 btn btn-dark">Submit</button><br>
                <a class="txtop"  href="" @click.prevent="goRegister">Register</a>
              </form>
            </div>
            <div class="col"></div>
            <slot></slot>
            <div></div>
          </div>
        </div>
</template>

<script>
import firebase from '@/firebase/index'

export default {
    name : 'login',
    data() {
        return {
            loginEmail: '',
            loginPassword : '',
        }
    },
    methods: {
      goRegister() {
        this.$emit('ask-register');
      },
      userLogin() {
        const auth = firebase.auth;

        auth
          .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
          .then((response) => {
            localStorage.setItem('userId', response.user.uid);
            localStorage.setItem('email', response.user.email);
            this.loginEmail = '';
            this.loginPassword = '';
            this.$router.push({ name: 'waitinglobby' });
          })
          .catch((error) => {
            console.log(error);
          });
      },

    }
    
}
</script>

<style>

.txtop{
  font-family: 'Pixel Digivolve';
  font-size:2rem;
  color:white;
  text-align: center;
}

</style>

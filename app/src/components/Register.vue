<template>
     <div class="container mt-5" style="background: url('./assets/coba.jpg'); padding:60px;">
          <div class="row">
            <div class="col"></div>
            <div class="col-6">
              <form @submit.prevent="userRegister">
                <div class="form-group">
                  <h2 class="txtop">REGISTER</h2>
                  <label style="color:white"  for="registerEmail">Email address</label>
                  <input
                    v-model="registerEmail"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  >
                </div>
                <div class="form-group">
                  <label style="color:white"  for="registerPassword">Password</label>
                  <input
                    v-model="registerPassword"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  >
                </div>
                <button type="submit" class="mt-2 btn btn-dark">Submit</button><br>
                <a class="txtop" href="" @click.prevent="goLogin">Login</a>
              </form>
            </div>
            <div class="col"></div>
            <slot></slot>
            <div></div>
          </div>
        </div>
</template>

<script>
import firebase from '@/firebase/index';

export default {
    name : 'register',
    data() {
        return {
            registerEmail: '',
            registerPassword : '',
        }
    },
    methods: {
      goLogin() {
        this.$emit('ask-login');
      },
      userRegister() {
        const auth = firebase.auth;

        auth
          .createUserWithEmailAndPassword(this.registerEmail, this.registerPassword)
          .then((response) => {
            console.log(response);
            localStorage.setItem('userId', response.user.uid);
            localStorage.setItem('email', response.user.email);
            this.registerEmail = '';
            this.registerPassword = '';
            this.$router.push({ name: 'lobby' });
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

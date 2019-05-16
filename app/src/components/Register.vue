<template>
     <div class="container mt-5" style="background: url('./assets/coba.jpg'); padding:60px;">
          <div class="row">
            <div class="col"></div>
            <div class="col-6">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="registerEmail">Email address</label>
                  <input
                    v-model="registerEmail"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  >
                </div>
                <div class="form-group">
                  <label for="registerPassword">Password</label>
                  <input
                    v-model="registerPassword"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  >
                </div>
                <button type="submit" class="mt-2 btn btn-light">Submit</button>
              </form>
            </div>
            <div class="col"></div>
            <slot></slot>
            <div></div>
          </div>
        </div>
</template>

<script>
export default {
    name : 'register',
    data() {
        return {
            registerEmail: '',
            registerPassword : '',
        }
    },
}
</script>

<style>

</style>

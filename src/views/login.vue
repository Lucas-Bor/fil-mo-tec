<template>
    <div id="login">
        <h1>Log In</h1>
        <p><input type="text" name="username" v-model="input.username" placeholder="              Username" /> </p>
        <p><input type="password" name="password" v-model="input.password" placeholder="              Password" /></p>
        <button type="button" v-on:click="login()">Login</button>
        <p></p>
        <button type="button" v-on:click="requestToken()">Create request token (create a request token but has no use for now)</button>
        <p></p>
        <form action="https://www.themoviedb.org/authenticate/">
            <input type="submit" value="Validate request token (offline)" />
        </form>
        <p></p>
        <button type="button" v-on:click="sessionToken()">Create session token (offline)</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
         return {
             input: {
                username: "",
                password: "",
                resultRequest: "",
                resultSession: ""
             }
         }
      },
      methods: {
          login() {
             if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                } else {
                console.log("The username and / or password is incorrect");
                 }
             } else {
                console.log("A username and password must be present");
            }
          },
          requestToken(){
            axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=af89ad743d30d1a6a0ad07e7c49d215b').then(response => { this.resultRequest = response.data.request_token})
            console.log(this.resultRequest)         
          }, 
          sessionToken(){
            axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=af89ad743d30d1a6a0ad07e7c49d215b').then(response => { this.resultSession = response.data})
            console.log(this.resultSession)         
          }, 
     },
}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 100px;
        text-align: center;
        padding: 20px;
    }
</style>
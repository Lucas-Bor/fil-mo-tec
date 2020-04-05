<template>
    <div id="login">
        <h1>Log In</h1>
        <p><input type="text" name="username" v-model="input.username" placeholder=" Identificant" /> </p>
        <p><input type="password" name="password" v-model="input.password" placeholder=" Mot de passe" /></p>
        <button type="button" v-on:click="login()">Connexion</button>
        <p></p>
        <button type="button" v-on:click="request()">Create request token (create a request token but has no use for now)</button>
        <div v-for='result in result' :key='result'>
            <p>{{result.request_token}}</p>
        </div>
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
                    result: ""
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
            request(){
                axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=af89ad743d30d1a6a0ad07e7c49d215b').then(response => { this.result = response.data})
                console.log(this.result)         
            }
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
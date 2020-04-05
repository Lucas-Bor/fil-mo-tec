<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg fixed-top row">
            <router-link tag="li" class="col" class-active="active" to="/home"> Home</router-link>
            <router-link tag="li" class="col" class-active="active" v-if="authenticated" to="/search"> Search</router-link>
            <router-link tag="li" class="col" class-active="active" v-if="authenticated" to="/review"> Review</router-link>
            <router-link tag="li" class="col" class-active="active" v-if="authenticated == false" to="/login"> Login</router-link>
            <router-link tag="li" class="col" class-active="active" v-if="authenticated" to="/login" v-on:click.native="logout()" replace> Déconnection</router-link>
        </nav>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "admin",
                    password: "0000"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
        
    }
    #app {
        width: 1024px;
        margin: auto;
    }
    nav li:hover,
    nav li.router-link-active,
    nav li.router-link-exact-active {
   background-color: indianred;
   cursor: pointer;
 }
</style>
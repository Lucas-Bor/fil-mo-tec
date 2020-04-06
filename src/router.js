import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
import HomeComponent from "./views/home.vue"
import SearchComponent from "./views/search.vue"
import ReviewComponent from "./views/review.vue"
import RatingComponent from "./views/rating.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "home"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
            
        },
        {
          path: "/home",
          name: "home",
          component: HomeComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: '/search',
            name: "search",
            component: SearchComponent
        },
        {
            path: '/review',
            name: "review",
            component: ReviewComponent
        },
        {
            path: '/rating',
            name: "rating",
            component: RatingComponent
        },
    ]
})
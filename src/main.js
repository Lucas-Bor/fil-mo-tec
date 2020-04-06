import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueParticlesBg from "particles-bg-vue";

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueParticlesBg);

new Vue({
   router,
    render(createElement){
      return createElement(App);
    }
}).$mount('#app')

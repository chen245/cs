import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import scroll from 'vue-seamless-scroll'
import store from './store'

Vue.use(scroll)
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    render: h => h(App),
    store,
}).$mount('#app')
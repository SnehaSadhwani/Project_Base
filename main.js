// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AppBase from '@/components/AppBase'
//@import 'path/to/node_modules/vuetify/src/stylus/main.styl'
//Vue.config.productionTip = false
//require('/path/to/node_modules/vuetify/dist/vuetify.min.css')
Vue.prototype.$bus = new Vue()
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    //template: '<App/>',
    //components: { App },
    render: h => h(App)
})
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/feather'
import './plugins/cookies'

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')

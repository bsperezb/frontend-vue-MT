import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueAlertify from 'vue-alertify'

// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// createApp(App).use(BootstrapVue)
const Myapp = createApp(App)
Myapp
	.use(router)
	.mount('#app')
// createApp(App).use(router).mount('#app')

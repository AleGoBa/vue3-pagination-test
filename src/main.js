import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Toast from "vue-toastification";
import { VueSpinnersPlugin } from 'vue3-spinners';
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(Toast, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
})

app.use(VueSpinnersPlugin)

app.mount('#app')

import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Translate
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import DE from './locale/de.json'
import UK from './locale/uk.json'

// Quasar
import { Quasar } from 'quasar'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const i18n = createI18n({
    locale: document.cookie.split('=')[1],
    messages: {
        UK: UK,
        DE: DE,
        EN: EN,
    }
})

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App).use(Quasar,{
    config: {
        dark: false // Dark Mode
    }
});
app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')
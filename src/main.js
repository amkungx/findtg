// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// custom meta header
import Meta from 'vue-meta'
Vue.use(Meta)

// bootstrap 4 ui framework
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// element ui framework
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '../theme/index.css'
Vue.use(ElementUI, { locale })

// custom css file
import './assets/font.css'

// custom icon
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import CustomIcons from './assets/customIcons'
Icon.register(CustomIcons)
Vue.component('icon', Icon)

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// moment
import VueMoment from 'vue-moment'
Vue.use(VueMoment)

// social sharing
import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)

// filters
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filters,
  template: '<App/>',
  components: { App }
})
